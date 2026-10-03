// Seeds [TEST] documents into Sanity, checks the frontend's queries against them,
// and removes them again. Uses the token from `sanity login`.
//   node scripts/sanity-test.mjs seed | check | clean
import { createClient } from '@sanity/client'
import { readFileSync, createReadStream } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'

const token = JSON.parse(readFileSync(join(homedir(), '.config/sanity/config.json'), 'utf8')).authToken
const write = createClient({ projectId: 'rd0579i0', dataset: 'production', apiVersion: '2024-01-01', useCdn: false, token })
// Same config as src/lib/sanityClient.ts, minus the CDN so fresh writes are visible
const read = createClient({ projectId: 'rd0579i0', dataset: 'production', apiVersion: '2024-01-01', useCdn: false })

const ids = ['seed-about', 'seed-project-1', 'seed-project-2', 'seed-blog-1', 'seed-blog-2']

async function image(file) {
  const asset = await write.assets.upload('image', createReadStream(join('public', file)), { filename: file })
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
}

const block = (key, text, style = 'normal') => ({
  _type: 'block', _key: key, style, markDefs: [],
  children: [{ _type: 'span', _key: key + 's', text, marks: [] }],
})

async function seed() {
  const [about, mintr, book, review] = await Promise.all(['about.jpg', 'mintr.png', 'book.png', 'bookreview.jpg'].map(image))
  const tx = write.transaction()
  tx.createOrReplace({ _id: 'seed-about', _type: 'about', p_1: '[TEST] About paragraph one', p_2: '[TEST] About paragraph two', image: about })
  tx.createOrReplace({ _id: 'seed-project-1', _type: 'project', name: '[TEST] Project with tools', description: 'Has tools and a link', tools: ['React', 'Sanity'], image: mintr, link: 'https://github.com/Adwoa-p' })
  tx.createOrReplace({ _id: 'seed-project-2', _type: 'project', name: '[TEST] Project without tools', description: 'No tools, no link — must not crash', image: book })
  tx.createOrReplace({
    _id: 'seed-blog-1', _type: 'blog', title: '[TEST] Featured post', slug: { _type: 'slug', current: 'test-featured-post' },
    date: '2026-10-01', image: review, excerpt: 'Featured excerpt', featured: true,
    content: [
      block('a', 'Rich text heading', 'h2'),
      block('b', 'First paragraph.'),
      { ...block('c', 'A linked paragraph.'), markDefs: [{ _type: 'link', _key: 'l1', href: 'https://sanity.io' }], children: [{ _type: 'span', _key: 'cs', text: 'A linked paragraph.', marks: ['l1'] }] },
      { ...block('d', 'Bullet item'), listItem: 'bullet', level: 1 },
      { ...mintr, _key: 'e', alt: 'Inline image' },
    ],
  })
  tx.createOrReplace({
    _id: 'seed-blog-2', _type: 'blog', title: '[TEST] Regular post', slug: { _type: 'slug', current: 'test-regular-post' },
    date: '2026-09-15', image: book, excerpt: 'Regular excerpt', featured: false, content: [block('a', 'Plain paragraph.')],
  })
  await tx.commit()
  console.log('seeded', ids.join(', '))
}

function assert(cond, msg) {
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${msg}`)
  if (!cond) process.exitCode = 1
}

async function check() {
  // Queries copied from the components
  const about = await read.fetch(`*[_type == "about"][0]`)
  assert(about?.p_1 && about?.image?.asset?._ref, 'About: p_1 and image present')

  const projects = await read.fetch(`*[_type == "project"] | order(_createdAt desc)`)
  assert(projects.length >= 2, `Project: ${projects.length} returned`)
  assert(projects.some((p) => !p.tools && !p.link), 'Project: tool-less, link-less doc returned (frontend handles optional)')

  const blogs = await read.fetch(`*[_type == "blog"] | order(_createdAt desc)`)
  assert(blogs.find((b) => b.featured), 'Blog: featured post present')
  assert(blogs.every((b) => b.slug?.current), 'Blog: every post has a slug')

  const detail = await read.fetch(`*[_type == "blog" && slug.current == $slug][0]`, { slug: 'test-featured-post' })
  assert(Array.isArray(detail?.content) && detail.content.some((b) => b._type === 'image'), 'BlogDetails: slug lookup returns Portable Text with inline image')
  assert((await read.fetch(`*[_type == "blog" && slug.current == $slug][0]`, { slug: 'nope' })) === null, 'BlogDetails: unknown slug returns null (→ "Blog not found")')
}

async function clean() {
  const tx = write.transaction()
  ids.forEach((id) => tx.delete(id))
  await tx.commit()
  const orphans = await write.fetch(`*[_type == "sanity.imageAsset" && originalFilename in $files && count(*[references(^._id)]) == 0]._id`, { files: ["about.jpg", "mintr.png", "book.png", "bookreview.jpg"] })
  for (const id of orphans) await write.delete(id)
  console.log('removed', ids.length, 'docs and', orphans.length, 'unused image assets')
}

await { seed, check, clean }[process.argv[2]]()
