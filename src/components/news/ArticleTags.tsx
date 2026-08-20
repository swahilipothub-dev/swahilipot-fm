import { Link } from 'react-router-dom';

interface ArticleTagsProps {
  tags: string[];
}

/** Single clean tags section at the end of the article, rendered as clickable pills */
export const ArticleTags = ({ tags }: ArticleTagsProps) => {
  if (!tags.length) return null;

  return (
    <section
      className='mt-14 border-t border-gray-100 pt-8'
      aria-label='Article tags'
    >
      <h2 className='mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400'>
        Tags
      </h2>
      <div className='flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <Link
            key={tag}
            to={`/news?q=${encodeURIComponent(tag)}`}
            className='rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm text-gray-600 transition-colors hover:border-[#00aeef] hover:bg-[#00aeef]/5 hover:text-[#00aeef]'
          >
            {tag}
          </Link>
        ))}
      </div>
    </section>
  );
};
