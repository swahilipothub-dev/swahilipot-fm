import { useRouter } from 'next/router';
import { getPostBySlug, getAllPosts } from '../api/posts';
import markdownToHtml from '../api/markdowntohtml';
import { format } from 'date-fns';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Post({ post }) {
  const router = useRouter();

  // If the page is still being generated
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Header/>
    <main className='content-space-t-4' style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2em', marginBottom: '20px' }}>{post.title}</h1>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        {format(new Date(post.date), 'PPPP')}
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        style={{ lineHeight: '1.6', fontSize: '1.1em' }}
      />
    </main>
    <Footer/>
    </>
  );
}

// Generate static paths for all posts
export async function getStaticPaths() {
  const posts = getAllPosts();
  
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true, // Allows for on-demand generation of pages
  };
}

// Fetch data for a single post based on the slug
export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}
