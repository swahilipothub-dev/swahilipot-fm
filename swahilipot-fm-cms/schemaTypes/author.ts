import {defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Authors',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),

    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image'
    }),

    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text'
    }),

    defineField({
      name: 'role',
      title: 'Role',
      type: 'string'
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (document: Record<string, unknown>) => (document.name as string) || '',
        maxLength: 96,
      }
    }),

    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string'
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'email'
    }),

    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({
          name: 'x',
          title: 'X',
          type: 'url'
        }),
        defineField({
          name: 'facebook',
          title: 'Facebook',
          type: 'url'
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url'
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url'
        })
      ]
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false
    })
  ]
})