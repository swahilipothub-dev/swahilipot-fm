import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(80)
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (document: Record<string, unknown>) => (document.title as string) || '',
        maxLength: 96,
      }
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }),

    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          {title: 'Blue', value: 'blue'},
          {title: 'Green', value: 'green'},
          {title: 'Red', value: 'red'},
          {title: 'Orange', value: 'orange'},
          {title: 'Purple', value: 'purple'},
        ],
        layout: 'dropdown'
      }
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false
    }),

    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: Rule => Rule.min(0)
    })
  ]
})