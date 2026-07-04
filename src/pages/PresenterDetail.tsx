import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  User,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Globe,
} from 'lucide-react';
import { getPresenterById } from '@/data/presentersData';
import { allShows } from '@/data/scheduleData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const PresenterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const presenter = getPresenterById(id || '');

  useEffect(() => {
    if (!presenter) {
      navigate('/presenters');
    }
  }, [navigate, presenter]);

  // Get shows for this presenter
  const presenterShows = presenter.showIds
    ? allShows.filter((show) => presenter.showIds?.includes(show.id))
    : [];

  return (
    <div className='container mx-auto px-4 py-12 mb-10'>
      <Button variant='ghost' className='mb-6' onClick={() => navigate(-1)}>
        <ArrowLeft className='mr-2 h-4 w-4' /> Back
      </Button>

      <div className='grid gap-8 md:grid-cols-3'>
        <div className='md:col-span-1'>
          <div className='sticky top-24'>
            <div className='aspect-square overflow-hidden rounded-lg mb-6'>
              {presenter.image ? (
                <img
                  src={presenter.image}
                  alt={presenter.name}
                  className='object-cover w-full h-full'
                  loading='lazy'
                />
              ) : (
                <div className='flex items-center justify-center w-full h-full bg-muted'>
                  <User className='h-24 w-24 text-muted-foreground' />
                </div>
              )}
            </div>

            <h1 className='text-3xl font-display font-bold mb-1'>
              {presenter.name}
            </h1>
            <p className='text-xl text-muted-foreground mb-4'>
              {presenter.role}
            </p>

            {presenter.socialLinks && (
              <div className='flex gap-3 mb-6'>
                {presenter.socialLinks.twitter && (
                  <a
                    href={presenter.socialLinks.twitter}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 rounded-full hover:bg-muted transition-colors'
                  >
                    <Twitter className='h-5 w-5' />
                  </a>
                )}
                {presenter.socialLinks.youtube && (
                  <a
                    href={presenter.socialLinks.youtube}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 rounded-full hover:bg-muted transition-colors'
                  >
                    <Youtube className='h-5 w-5' />
                  </a>
                )}
                {presenter.socialLinks.instagram && (
                  <a
                    href={presenter.socialLinks.instagram}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 rounded-full hover:bg-muted transition-colors'
                  >
                    <Instagram className='h-5 w-5' />
                  </a>
                )}
                {presenter.socialLinks.linkedin && (
                  <a
                    href={presenter.socialLinks.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 rounded-full hover:bg-muted transition-colors'
                  >
                    <Linkedin className='h-5 w-5' />
                  </a>
                )}
                {presenter.socialLinks.website && (
                  <a
                    href={presenter.socialLinks.website}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 rounded-full hover:bg-muted transition-colors'
                  >
                    <Globe className='h-5 w-5' />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className='md:col-span-2'>
          <div className='prose max-w-none'>
            <h2 className='text-2xl font-display font-semibold mb-4'>About</h2>
            <p className='text-lg leading-relaxed whitespace-pre-line'>
              {presenter.bio}
            </p>
          </div>

          {presenterShows.length > 0 && (
            <>
              <Separator className='my-8' />

              <div>
                <h2 className='text-2xl font-display font-semibold mb-6'>
                  Shows Hosted by {presenter.name}
                </h2>

                <div className='grid gap-6'>
                  {presenterShows.map((show) => (
                    <Card key={show.id}>
                      <CardContent className='p-6 flex flex-col md:flex-row gap-6'>
                        <div className='w-full md:w-1/4 aspect-square md:aspect-auto flex-shrink-0'>
                          <img
                            src={show.image}
                            alt={show.title}
                            className='w-full h-full object-cover rounded-md'
                          />
                        </div>
                        <div>
                          <h3 className='text-xl font-semibold mb-2'>
                            {show.title}
                          </h3>
                          <p className='text-muted-foreground mb-4'>
                            {show.description}
                          </p>
                          <div className='flex gap-2'>
                            <Button asChild variant='outline' size='sm'>
                              <Link to={`/schedule`}>View in Schedule</Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PresenterDetail;
