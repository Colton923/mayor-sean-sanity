import {defineField, defineType} from 'sanity'

export const recipe = defineType({
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      validation: (rule) => rule,
    }),
    defineField({
      name: 'ingredients',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              validation: (rule) => rule,
            }),
            defineField({
              name: 'quantity',
              type: 'string',
              validation: (rule) => rule,
            }),
            defineField({
              name: 'additionalInfo',
              type: 'string',
            }),
          ],
        },
      ],
      validation: (rule) => rule,
    }),
    defineField({
      name: 'preparationSteps',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      validation: (rule) => rule,
    }),
    defineField({
      name: 'additionalNotes',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'servings',
      type: 'string',
      validation: (rule) => rule,
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'pdf',
      type: 'file',
    }),
  ],
})
