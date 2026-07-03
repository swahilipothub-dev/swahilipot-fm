import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle2, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type FormValues = z.infer<typeof schema>;

export const NewsletterSubscription = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: '' },
  });

  const onSubmit = async (_values: FormValues) => {
    setStatus('loading');
    // Plug in your newsletter endpoint here:
    // await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify(values) });
    await new Promise((r) => setTimeout(r, 900));
    setStatus('success');
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className='rounded-3xl bg-gradient-to-br from-[#271d73] via-[#1e3a8a] to-[#2295e2] p-8 md:p-10 text-white text-center'
    >
      <AnimatePresence mode='wait'>
        {status === 'success' ? (
          <motion.div
            key='success'
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
            className='flex flex-col items-center gap-4'
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 260 }}
            >
              <CheckCircle2 className='h-14 w-14 text-green-300' />
            </motion.div>
            <h3 className='font-display text-2xl font-bold'>You're in!</h3>
            <p className='text-white/80 max-w-sm'>
              Thanks for subscribing. We'll send you the best stories from
              Swahilipot FM straight to your inbox.
            </p>
          </motion.div>
        ) : (
          <motion.div key='form' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className='flex justify-center mb-4'>
              <div className='h-12 w-12 rounded-full bg-white/15 flex items-center justify-center'>
                <Mail className='h-6 w-6 text-white' />
              </div>
            </div>

            <h3 className='font-display text-2xl md:text-3xl font-bold mb-2'>
              Stay in the Loop
            </h3>
            <p className='text-white/75 mb-8 max-w-md mx-auto'>
              Get the best stories from Mombasa's coast — community features,
              youth voices, and FM show highlights — delivered to your inbox.
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'
              >
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem className='flex-1 text-left'>
                      <FormControl>
                        <Input
                          placeholder='your@email.com'
                          {...field}
                          className='h-12 rounded-xl bg-white/15 border-white/25 placeholder:text-white/50 text-white focus-visible:ring-white/50 focus-visible:border-white/50'
                        />
                      </FormControl>
                      <FormMessage className='text-red-300 text-xs' />
                    </FormItem>
                  )}
                />
                <Button
                  type='submit'
                  disabled={status === 'loading'}
                  className='h-12 rounded-xl bg-white text-[#271d73] hover:bg-white/90 font-semibold px-7 shrink-0'
                >
                  {status === 'loading' ? (
                    <Loader2 className='h-4 w-4 animate-spin' />
                  ) : (
                    'Subscribe'
                  )}
                </Button>
              </form>
            </Form>

            <p className='text-white/40 text-xs mt-4'>
              No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};
