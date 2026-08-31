import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formState.name || !formState.email || !formState.message) {
      toast({
        title: 'Please fill out all required fields',
        variant: 'destructive',
      });
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      toast({
        title: 'Message sent!',
        description: "We'll get back to you as soon as possible.",
      });
    }, 1000);
  };

  return (
    <div className='flex flex-col gap-20 pb-24'>
      {/* Hero Section */}
      <section
        className='relative bg-cover bg-center bg-no-repeat scroll-animation'
        style={{
          backgroundImage: 'url(/images/contact-background.jpg)',
        }}
        aria-label='Contact Swahilipot FM'
      >
        {/* Overlay for better text readability */}
        <div className='absolute inset-0 bg-black/50'></div>
        <div className='container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center max-w-3xl mx-auto'>
              <h1 className='font-display text-4xl md:text-5xl font-bold mb-6 text-white'>
                Get in Touch
              </h1>
              <p className='text-lg text-white mb-8'>
                Have a question or feedback? We'd love to hear from you. Reach
                out through the form below or using our contact information.
              </p>
              <div className='flex flex-wrap justify-center gap-4'>
                <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2'>
                  <Phone className='h-4 w-4 text-white' />
                  <span className='text-white'>
                    +254 700 917917 or +254 732917917
                  </span>
                </div>
                <div className='flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2'>
                  <Mail className='h-4 w-4 text-white' />
                  <span className='text-white'>
                    adminswahilipotfm@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className='container mx-auto px-4 md:px-6 scroll-animation'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-12'>
            {/* Contact Form - 3 columns */}
            <div className='lg:col-span-3'>
              <Card className='p-6 md:p-8 border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
                <div className='mb-8'>
                  <h2 className='text-2xl font-bold mb-2'>Send us a message</h2>
                  <p className='text-gray-600'>
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </div>

                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <div className='space-y-2'>
                        <Label htmlFor='name'>
                          Your Name <span className='text-red-500'>*</span>
                        </Label>
                        <Input
                          id='name'
                          name='name'
                          placeholder='John Doe'
                          value={formState.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor='email'>
                          Email Address <span className='text-red-500'>*</span>
                        </Label>
                        <Input
                          id='email'
                          name='email'
                          type='email'
                          placeholder='john@example.com'
                          value={formState.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className='space-y-2'>
                      <Label htmlFor='subject'>Subject</Label>
                      <Input
                        id='subject'
                        name='subject'
                        placeholder='How can we help you?'
                        value={formState.subject}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className='space-y-2'>
                      <Label htmlFor='message'>
                        Message <span className='text-red-500'>*</span>
                      </Label>
                      <Textarea
                        id='message'
                        name='message'
                        placeholder='Your message here...'
                        rows={6}
                        value={formState.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <Button
                      type='submit'
                      className='w-full rounded-full bg-[#1b1f68] hover:bg-[#00aeef]'
                    >
                      Send Message <Send className='ml-2 h-4 w-4' />
                    </Button>
                  </form>
                ) : (
                  <div className='text-center py-12 space-y-4'>
                    <div className='mx-auto w-16 h-16 rounded-full bg-green-50 flex items-center justify-center'>
                      <CheckCircle className='h-8 w-8 text-green-500' />
                    </div>
                    <h3 className='text-2xl font-bold'>
                      Message Sent Marhabaa!
                    </h3>
                    <p className='text-gray-600 max-w-md mx-auto'>
                      Thank you for reaching out. We've received your message
                      and will respond as soon as possible.
                    </p>
                    <Button
                      variant='outline'
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormState({
                          name: '',
                          email: '',
                          subject: '',
                          message: '',
                        });
                      }}
                      className='mt-4'
                    >
                      Send another message
                    </Button>
                  </div>
                )}
              </Card>
            </div>

            {/* Contact Info - 2 columns */}
            <div className='lg:col-span-2'>
              <div className='space-y-8'>
                <Card className='p-6 border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
                  <h3 className='text-lg font-bold mb-4'>Visit Our Studio</h3>
                  <div className='flex gap-4'>
                    <div className='shrink-0'>
                      <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center'>
                        <MapPin className='h-5 w-5' />
                      </div>
                    </div>
                    <div>
                      <address className='not-italic text-gray-600'>
                        Next to Imaara - Your New Address, <br />
                        Dedan Kimathi Ave. <br />
                        Opposite Pandya Hosp. Kizingo, <br />
                        Mombasa
                      </address>
                      <a
                        href='https://maps.app.goo.gl/gDFvUHYG8iJJbN3Y8'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='mt-2 inline-flex items-center text-sm font-medium'
                      >
                        Get directions <ArrowRight className='ml-1 h-3 w-3' />
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className='p-6 border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
                  <h3 className='text-lg font-bold mb-4'>Studio Hours</h3>
                  <div className='flex gap-4'>
                    <div className='shrink-0'>
                      <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center'>
                        <Clock className='h-5 w-5' />
                      </div>
                    </div>
                    <div className='space-y-2'>
                      <div className='flex justify-between'>
                        <span>Monday - Friday:</span>
                        <span>6:00 AM - Midnight</span>
                      </div>
                      <div className='flex justify-between'>
                        <span>Saturday:</span>
                        <span>8:00 AM - 5:00 PM</span>
                      </div>
                      <div className='flex justify-between'>
                        <span>Sunday:</span>
                        <span>10:00 AM - 1:00 PM</span>
                      </div>
                      <Separator className='my-2' />
                      <p className='text-sm text-gray-600'>
                        * Broadcasting hours are 24/7, but the office and studio
                        visiting hours are as listed above.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className='p-6 border-gray-200 shadow-sm'>
                  <h3 className='text-lg font-bold mb-4'>
                    Other Ways to Connect
                  </h3>
                  <div className='space-y-4'>
                    <div className='flex gap-4'>
                      <div className='shrink-0'>
                        <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center'>
                          <Phone className='h-5 w-5' />
                        </div>
                      </div>
                      <div>
                        <p className='font-medium'>Call Us</p>
                        <a href='tel:+254700917917' className='text-gray-600'>
                          +254 732 917917
                        </a>
                        <a
                          href='tel:+25471917917'
                          className='text-gray-600 ml-4'
                        >
                          +254 700 917917
                        </a>
                      </div>
                    </div>

                    <div className='flex gap-4'>
                      <div className='shrink-0'>
                        <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center'>
                          <Mail className='h-5 w-5' />
                        </div>
                      </div>
                      <div>
                        <p className='font-medium'>Email Us</p>
                        <a
                          href='mailto:adminswahilipotfm@gmail.com'
                          className='text-gray-600'
                        >
                          adminswahilipotfm@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='container mx-auto px-4 md:px-6 scroll-animation'>
        <div className='max-w-7xl mx-auto'>
          <Card className='border-gray-200 shadow-sm p-0 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
            <div className='aspect-[21/9] w-full'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7704715011578!2d39.6709314!3d-4.067137000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18401322c6d24283%3A0x6452b2790d4e3e3f!2sImaara%20-%20Your%20New%20Address%2C%20Dedan%20Kimathi%20Ave%2C%20Mombasa!5e0!3m2!1sen!2ske!4v1741154782415!5m2!1sen!2ske'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Studio Location'
              ></iframe>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='bg-gray-50 py-20 scroll-animation'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='max-w-3xl mx-auto text-center mb-12'>
            <h2 className='font-display text-3xl font-bold mb-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-gray-600'>
              Find answers to the most common questions about Swahilipot FM.
            </p>
          </div>

          <div className='max-w-3xl mx-auto'>
            <div className='space-y-6'>
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className='border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
                >
                  <div className='p-6'>
                    <h3 className='text-lg font-bold mb-2'>{faq.question}</h3>
                    <p className='text-gray-600'>{faq.answer}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Mock data for FAQs
const faqs = [
  /*{
    question: "How can I advertise on Swahilitpot FM?",
    answer: "We offer various advertising packages tailored to businesses of all sizes. Please contact us at info@swahilipotfm.co.ke"
  },*/
  {
    question: 'How can I request a song?',
    answer:
      'You can request songs through our mobile app, by calling our request line at +254 700 917917 or texting via Whatsapp at the same number.',
  },
  {
    question: 'Do you offer internships or job opportunities?',
    answer:
      'We periodically offer internships and industrial attachment. Just send your resume to adminswahilipotfm@gmail.com',
  },
];

export default Contact;
