import {defineField, defineType} from 'sanity'

export const markdown = defineType({
  name: 'markdownSchema',
  title: 'Markdown',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Title of the text document. Used for SEO and navigation.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'markdown',
      type: 'markdown',
      description: 'Markdown content',
      validation: (rule) => rule.required(),
    }),
  ],
})
