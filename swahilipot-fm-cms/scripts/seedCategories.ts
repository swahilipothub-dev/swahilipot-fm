/**
 * Seeds the website's seven editorial categories.
 * Run from swahilipot-fm-cms/:
 *   npx sanity exec scripts/seedCategories.ts --with-user-token
 *
 * Idempotent — uses deterministic IDs with createIfNotExists, so existing
 * categories (and any edits made to them in the studio) are left untouched.
 */
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2024-01-01'})

// Titles must match MEDIA_CATEGORIES in the website's src/types/media.ts
const categories: {title: string; color: string}[] = [
  {title: 'Technology', color: 'purple'},
  {title: 'Innovation', color: 'blue'},
  {title: 'Community', color: 'green'},
  {title: 'Events', color: 'orange'},
  {title: 'Youth Stories', color: 'blue'},
  {title: 'Creative Arts', color: 'orange'},
  {title: 'FM Shows', color: 'red'},
  {title: 'Politics', color: 'red'},
  {title: 'Business', color: 'green'},
  {title: 'Sports', color: 'orange'},
  {title: 'Music', color: 'purple'},
]

const slugify = (title: string) => title.toLowerCase().replace(/\s+/g, '-')

const tx = client.transaction()
categories.forEach(({title, color}, i) => {
  const slug = slugify(title)
  tx.createIfNotExists({
    _id: `category-${slug}`,
    _type: 'category',
    title,
    slug: {_type: 'slug', current: slug},
    color,
    order: i,
    featured: false,
  })
})

tx.commit()
  .then(() => console.log(`Seeded ${categories.length} categories (existing ones untouched)`))
  .catch((err) => {
    console.error('Seeding failed:', err.message)
    process.exit(1)
  })
