import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Navbar from "../common/Navbar";
import { ArrowLeftIcon } from "lucide-react";
import type { Blog } from "@/types/sanity";
import { client } from "../../lib/sanityClient";
import { urlFor } from "../../lib/urlFor";
import { PortableText, type PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img src={urlFor(value).width(900).url()} alt={value.alt ?? ""} className="w-full rounded-2xl" />
    ),
  },
  block: {
    h2: ({ children }) => <h2 className="text-xl sm:text-2xl font-semibold text-primary">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg sm:text-xl font-semibold text-primary">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="border-l-4 pl-4 italic">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 flex flex-col gap-1">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 flex flex-col gap-1">{children}</ol>,
  },
  marks: {
    link: ({ value, children }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="underline">{children}</a>
    ),
  },
};

function BlogDetails() {
  const { slug } = useParams();
  const [result, setResult] = useState<{ slug?: string; blog: Blog | null }>();

  useEffect(() => {
    client
      .fetch<Blog | null>(`*[_type == "blog" && slug.current == $slug][0]`, { slug })
      .then((data) => setResult({ slug, blog: data }));
  }, [slug]);

  const loaded = result !== undefined && result.slug === slug;
  const blog = loaded ? result.blog : null;

  if (loaded && !blog) return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center gap-4 text-primary">
        <p className="text-xl">Blog not found.</p>
        <Link to="/blogs" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <ArrowLeftIcon size={18} /> Back to Blogs
        </Link>
      </main>
    </>
  );

  if (!blog) return null;

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-24 lg:pb-40 flex flex-col gap-6 text-primary">
        <Link to="/blogs" className="flex items-center gap-2 w-fit hover:opacity-70 transition-opacity">
          <ArrowLeftIcon className="size-5" /> Go Back
        </Link>

        <div className="flex flex-col gap-4">
          <p className="text-sm text-secondary">{blog.date}</p>
          <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">{blog.title}</h1>

          <div className="w-full h-56 sm:h-72 lg:h-96 overflow-hidden rounded-2xl">
            <img
              src={urlFor(blog.image).width(900).url()}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full text-secondary text-sm sm:text-base leading-relaxed flex flex-col gap-4">
            <PortableText value={blog.content} components={components} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default BlogDetails;
