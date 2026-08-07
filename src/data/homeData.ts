import { allShows, getShowTimeLabel } from '@/data/scheduleData';

const featuredSource = allShows.filter((show) => show.featuredOnHome);
const fallbackFeaturedSource = featuredSource.length > 0 ? featuredSource : allShows.slice(0, 4);

export const featuredShows = fallbackFeaturedSource.map((show) => ({
  title: show.title,
  host: show.host,
  time: getShowTimeLabel(show),
  image: show.image,
}));

// Mock data for latest news
export const latestNews = [
  {
    id: '1',
    title: 'Exclusive Interview with Grammy Winner Coming This Weekend',
    excerpt:
      "Tune in for our exclusive interview with this year's breakout Grammy winner discussing their journey and upcoming projects.",
    category: 'Interviews',
    date: 'June 15, 2023',
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
  },
];
