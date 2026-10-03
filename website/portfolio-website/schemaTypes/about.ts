import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'p_1',
      title: 'Paragraph 1',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'p_2',
      title: 'Paragraph 2',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'p_1',
      media: 'image',
    },
  },
})
