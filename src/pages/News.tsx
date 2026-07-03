import React, { useState } from 'react';
import { ExternalLink, RefreshCw, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { getDailyNewsArticles } from '@/lib/newsService';
import { useQuery } from '@tanstack/react-query';
import type { NewsCategory } from '@/types/news';

const categoryTabs: NewsCategory[] = [
  'Politics',
  'Business',
  'Technology',
  'Sports',
  'General',
];

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<NewsCategory | 'All'>(
    'All'
  );
  const [activeSocialIndex, setActiveSocialIndex] = useState(0);

  const {
    data: articles = [],
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['news-articles'],
    queryFn: getDailyNewsArticles,
    staleTime: 1000 * 60 * 30,
    refetchInterval: 1000 * 60 * 60,
  });

  // Filter articles based on search and category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === 'All' || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  const socialEmbeds = [
    {
      title: 'Swahilipot FM on TikTok',
      url: 'https://www.tiktok.com/discover/swahili-pot-fm',
      embedUrl: 'https://www.tiktok.com/embed/v2/7214951654606380330',
    },
    {
      title: 'Swahilipot FM on YouTube',
      url: 'https://www.youtube.com/@swahilipotfm',
      embedUrl:
        'https://www.youtube.com/embed?listType=search&list=swahilipotfm',
    },
    {
      title: 'Swahilipot FM on Instagram',
      url: 'https://www.instagram.com/swahilipotfm/',
      embedUrl: 'https://www.instagram.com/swahilipotfm/embed',
    },
    {
      title: 'Swahilipot FM on Facebook',
      url: 'https://www.facebook.com/people/Swahilipot-Fm/100093582650835/?sk=reels_tab',
      embedUrl:
        'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FSwahilipot-Fm%2F100093582650835%2F&tabs=timeline&width=340&height=380&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true',
    },
  ];

  return (
    <div className='container mx-auto px-4 md:px-6 py-12 md:py-16 mb-10 space-y-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-10 md:mb-12'>
          <h1 className='font-display text-4xl md:text-5xl font-bold mb-4'>
            News Center
          </h1>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Fresh daily Kenyan headlines across politics, business, technology,
            sports, and more.
          </p>
        </div>

        <div className='rounded-3xl border border-gray-100 bg-gradient-to-r from-[#271d73] to-[#2295e2] text-white p-6 md:p-8 mb-8'>
          <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
            <div>
              <p className='text-white/80 text-sm'>Updated daily</p>
              <h2 className='text-2xl md:text-3xl font-bold'>
                Headlines by section
              </h2>
            </div>
            <Button
              onClick={() => refetch()}
              disabled={isFetching}
              className='bg-white text-[#271d73] hover:bg-white/90'
            >
              <RefreshCw
                className={`h-4 w-4 mr-2 ${isFetching ? 'animate-spin' : ''}`}
              />
              Refresh now
            </Button>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='flex-1 space-y-8'>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
              <Input
                type='text'
                placeholder='Search articles...'
                className='pl-10 border-gray-200 h-11 rounded-xl'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Tabs
              value={activeCategory}
              onValueChange={(value) =>
                setActiveCategory(value as NewsCategory | 'All')
              }
            >
              <TabsList className='w-full h-auto flex flex-wrap justify-start gap-2 bg-transparent p-0'>
                <TabsTrigger
                  value='All'
                  className='rounded-full border px-4 py-2 data-[state=active]:bg-[#271d73] data-[state=active]:text-white'
                >
                  All
                </TabsTrigger>
                {categoryTabs.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className='rounded-full border px-4 py-2 data-[state=active]:bg-[#271d73] data-[state=active]:text-white'
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {isLoading ? (
              <div className='text-center py-12 bg-gray-50 rounded-lg'>
                <p className='text-gray-500'>Loading the latest headlines...</p>
              </div>
            ) : filteredArticles.length > 0 ? (
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {filteredArticles.map((article, index) => (
                  <div
                    key={index}
                    className='animate-fade-in'
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Card className='overflow-hidden border-gray-200 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
                      <div className='relative aspect-[4/3] overflow-hidden'>
                        <img
                          src={article.image}
                          alt={article.title}
                          className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                        />
                      </div>
                      <div className='p-6 flex-1 flex flex-col'>
                        <div className='flex items-center justify-between gap-3 mb-3'>
                          <Badge variant='secondary'>{article.category}</Badge>
                          <span className='text-xs text-gray-500'>
                            {new Date(article.publishedAt).toLocaleDateString()}
                          </span>
                        </div>
                        <h2 className='text-lg md:text-xl font-bold mb-3 leading-tight'>
                          {article.title}
                        </h2>
                        <p className='text-gray-600 text-sm mb-4 flex-1'>
                          {article.excerpt}
                        </p>
                        <a
                          href={article.url}
                          className='inline-flex items-center text-sm font-medium mt-auto'
                          target='_blank'
                          rel='noreferrer'
                        >
                          Read article <ExternalLink className='ml-1 h-4 w-4' />
                        </a>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            ) : (
              <div className='text-center py-12 bg-gray-50 rounded-lg'>
                <p className='text-gray-500'>
                  No stories matched your search and category filters.
                </p>
              </div>
            )}
          </div>

          <div className='lg:w-96'>
            <div className='sticky top-24'>
              <div className='rounded-2xl p-6 text-white bg-gradient-to-br from-[#271d73] via-[#3142a0] to-[#2295e2] shadow-lg'>
                <h3 className='font-bold text-lg mb-4'>Swahilipot Social</h3>
                <p className='text-sm text-white/90'>
                  Watch clips, highlights, and community updates from all
                  Swahilipot FM platforms.
                </p>
              </div>

              <div className='mt-6 bg-gray-50 rounded-2xl p-5 border border-gray-100'>
                <h3 className='font-bold text-lg mb-4'>Follow & Watch</h3>
                <div className='grid grid-cols-2 gap-2 mb-4'>
                  {socialEmbeds.map((social, index) => (
                    <button
                      key={social.url}
                      type='button'
                      onClick={() => setActiveSocialIndex(index)}
                      className={`text-xs px-3 py-2 rounded-lg border transition-colors ${
                        activeSocialIndex === index
                          ? 'bg-[#271d73] text-white border-[#271d73]'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-[#2295e2]'
                      }`}
                    >
                      {social.title.replace('Swahilipot FM on ', '')}
                    </button>
                  ))}
                </div>

                <div className='rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm'>
                  <iframe
                    src={socialEmbeds[activeSocialIndex].embedUrl}
                    title={socialEmbeds[activeSocialIndex].title}
                    className='w-full h-72 md:h-80'
                    loading='lazy'
                  />
                </div>
                <a
                  href={socialEmbeds[activeSocialIndex].url}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center text-sm mt-3 font-semibold text-[#271d73] hover:text-[#2295e2]'
                >
                  Open {socialEmbeds[activeSocialIndex].title}{' '}
                  <ExternalLink className='h-3.5 w-3.5 ml-1' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
