import {defineField, defineType} from 'sanity'

export const articleType = defineType({
  name: 'article',
  title: 'News',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Headline',
      type: 'string',
      validation: Rule => Rule.required()
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
      name: 'excerpt',
      title: 'Summary',
      type: 'text',
      rows: 3
    }),

    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),

    defineField({
      name: 'body',
      title: 'News Content',
      type: 'array',
      of: [{type: 'block'}]
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}]
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}]
    }),

    defineField({
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime'
    }),

    defineField({
      name: 'featured',
      title: 'Featured Story',
      type: 'boolean',
      initialValue: false
    }),

    defineField({
      name: 'breaking',
      title: 'Breaking News',
      type: 'boolean',
      initialValue: false
    }),

    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'string'
    }),

    defineField({
      name: 'articleType',
      title: 'Article Type',
      type: 'string',
      options: {
        list: [
          {title: 'News', value: 'News'},
          {title: 'Feature', value: 'Feature'},
          {title: 'Opinion', value: 'Opinion'},
          {title: 'Interview', value: 'Interview'},
          {title: 'Announcement', value: 'Announcement'}
        ],
        layout: 'dropdown'
      }
    }),

    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      validation: Rule => Rule.min(1)
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}]
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{type: 'image'}]
    }),

    defineField({
      name: 'sourceUrl',
      title: 'Source URL',
      type: 'url'
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string'
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3
        }),
        defineField({
          name: 'socialImage',
          title: 'Social Image',
          type: 'image',
          options: {
            hotspot: true
          }
        })
      ]
    }),

    defineField({
      name: 'relatedArticles',
      title: 'Related Articles',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'article'}]}]
    })
  ]
})