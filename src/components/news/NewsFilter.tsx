import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { MEDIA_CATEGORIES } from '@/types/media';

const ALL_CATEGORIES: string[] = [...MEDIA_CATEGORIES];

interface NewsFilterProps {
  totalResults?: number;
  isLoading?: boolean;
}

export const NewsFilter = ({ totalResults, isLoading }: NewsFilterProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategory = searchParams.get('cat') ?? 'All';
  const searchValue = searchParams.get('q') ?? '';

  const handleCategoryChange = (category: string) => {
    setSearchParams(
      (prev) => {
        const params = new URLSearchParams(prev);
        if (category === 'All') {
          params.delete('cat');
        } else {
          params.set('cat', category);
        }
        return params;
      },
      { replace: true }
    );
  };
  const [inputValue, setInputValue] = useState(searchValue);
  const debounceRef = useRef<number>();

  // Debounce: sync input → URL 300 ms after the user stops typing
  const handleSearchChange = (value: string) => {
    setInputValue(value);
    window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      setSearchParams(
        (prev) => {
          const params = new URLSearchParams(prev);
          if (value) {
            params.set('q', value);
          } else {
            params.delete('q');
          }
          return params;
        },
        { replace: true }
      );
    }, 300);
  };

  // Clear any pending debounce on unmount
  useEffect(() => () => window.clearTimeout(debounceRef.current), []);

  const clearAll = () => {
    window.clearTimeout(debounceRef.current);
    setInputValue('');
    setSearchParams({}, { replace: true });
  };

  const isFiltering = !!searchValue || activeCategory !== 'All';

  return (
    <div className='space-y-4'>
      {/* Search row */}
      <div className='flex items-center gap-3'>
        <div className='relative flex-1 max-w-md'>
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none' />
          <Input
            placeholder='Search stories...'
            className='pl-10 h-11 rounded-xl border-gray-200 focus-visible:ring-[#2295e2]'
            value={inputValue}
            onChange={(e) => handleSearchChange(e.target.value)}
            aria-label='Search editorial stories'
          />
          <AnimatePresence>
            {inputValue && (
              <motion.button
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
                onClick={() => handleSearchChange('')}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700'
                aria-label='Clear search'
              >
                <X className='h-4 w-4' />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {isFiltering && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
          >
            <Button
              variant='ghost'
              size='sm'
              onClick={clearAll}
              className='text-gray-500 hover:text-[#271d73] gap-1.5'
            >
              <X className='h-3.5 w-3.5' /> Clear
            </Button>
          </motion.div>
        )}
      </div>

      {/* Category pills — editorial newsroom categories */}
      <Tabs value={activeCategory} onValueChange={handleCategoryChange}>
        <TabsList
          className='flex flex-wrap justify-start gap-2 bg-transparent p-0 h-auto'
          aria-label='Story categories'
        >
          <TabsTrigger
            value='All'
            className='rounded-full border px-4 py-2 text-sm data-[state=active]:bg-[#271d73] data-[state=active]:text-white data-[state=active]:border-[#271d73] data-[state=active]:shadow-sm'
          >
            All
          </TabsTrigger>
          {ALL_CATEGORIES.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className='rounded-full border px-4 py-2 text-sm data-[state=active]:bg-[#271d73] data-[state=active]:text-white data-[state=active]:border-[#271d73] data-[state=active]:shadow-sm'
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Live result count */}
      <AnimatePresence mode='wait'>
        {isFiltering && !isLoading && totalResults !== undefined && (
          <motion.p
            key={`${activeCategory}-${searchValue}`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className='text-sm text-gray-500'
            aria-live='polite'
            aria-atomic='true'
          >
            {totalResults === 0
              ? 'No stories found'
              : `${totalResults} ${totalResults === 1 ? 'story' : 'stories'} found`}
            {activeCategory !== 'All' && ` in ${activeCategory}`}
            {searchValue && ` for "${searchValue}"`}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};
