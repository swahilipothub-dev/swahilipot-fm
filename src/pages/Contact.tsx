import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { SWAHILIPOT_SOCIALS } from '@/data/socialLinks';

const contactHighlights = [
  {
    title: 'Visit Our Studio',
    icon: MapPin,
    iconBg: 'bg-[#1b1f68]',
    lines: ['Dedan Kimathi Ave,', 'Opposite Pandya Hosp, Kizingo,', 'Mombasa'],
    action: {
      label: 'Get directions',
      href: 'https://maps.app.goo.gl/gDFvUHYG8iJJbN3Y8',
    },
  },
  {
    title: 'Call Us',
    icon: Phone,
    iconBg: 'bg-[#f28c00]',
    lines: ['+254 700 917917', '+254 732 917917'],
    action: { label: 'Call now', href: 'tel:+254700917917' },
  },
  {
    title: 'Email Us',
    icon: Mail,
    iconBg: 'bg-[#00aeef]',
    lines: ['adminswahilipotfm@gmail.com'],
    action: {
      label: 'Send an email',
      href: 'mailto:adminswahilipotfm@gmail.com',
    },
  },
];

const socialLinks = [
  { icon: FaFacebook, href: SWAHILIPOT_SOCIALS.facebook, label: 'Facebook' },
  { icon: FaInstagram, href: SWAHILIPOT_SOCIALS.instagram, label: 'Instagram' },
  { icon: FaXTwitter, href: SWAHILIPOT_SOCIALS.x, label: 'X' },
  { icon: FaYoutube, href: SWAHILIPOT_SOCIALS.youtube, label: 'YouTube' },
  { icon: FaWhatsapp, href: SWAHILIPOT_SOCIALS.whatsapp, label: 'WhatsApp' },
];

// EmailJS credentials — set these in .env (see .env.example)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as
  string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as
  string | undefined;
// Optional — sends a confirmation email back to the visitor
const EMAILJS_AUTOREPLY_TEMPLATE_ID = import.meta.env
  .VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as
  string | undefined;

const Contact = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formState.name || !formState.email || !formState.message) {
      toast({
        title: 'Please fill out all required fields',
        variant: 'destructive',
      });
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast({
        title: 'Email service not configured',
        description:
          'Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to enable sending.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject || `New message from ${formState.name}`,
          message: formState.message,
          to_email: 'adminswahilipotfm@gmail.com',
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      // Best-effort visitor confirmation — doesn't block success if it fails
      if (EMAILJS_AUTOREPLY_TEMPLATE_ID) {
        emailjs
          .send(
            EMAILJS_SERVICE_ID,
            EMAILJS_AUTOREPLY_TEMPLATE_ID,
            {
              from_name: formState.name,
              to_name: formState.name,
              email: formState.email,
              to_email: formState.email,
              subject:
                formState.subject || `New message from ${formState.name}`,
              message: formState.message,
            },
            { publicKey: EMAILJS_PUBLIC_KEY }
          )
          .catch((error) => console.error('EmailJS auto-reply failed:', error));
      }

      setFormSubmitted(true);
      toast({
        title: 'Message sent!',
        description: "We'll get back to you as soon as possible.",
      });
    } catch (error) {
      console.error('EmailJS send failed:', error);
      toast({
        title: 'Something went wrong',
        description:
          'Please try again, or email us directly at adminswahilipotfm@gmail.com.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='flex flex-col gap-16 md:gap-20 pb-24'>
      {/* Hero Section */}
      <section
        className='relative overflow-hidden bg-cover bg-center bg-no-repeat scroll-animation'
        style={{
          backgroundImage: 'url(/images/contact-background.jpg)',
        }}
        aria-label='Contact Swahilipot FM'
      >
        {/* Overlay for better text readability */}
        <div className='absolute inset-0 bg-black/50'></div>
        <div className='container mx-auto px-4 md:px-6 pt-20 pb-32 md:pt-28 md:pb-40 relative z-10'>
          <div className='max-w-2xl'>
            <span className='inline-block text-xs font-bold tracking-widest uppercase bg-[#f28c00] text-white px-4 py-1.5 rounded-full mb-5'>
              Hit Us Up
            </span>
            <h1 className='font-display text-4xl md:text-6xl font-extrabold mb-5 text-white leading-tight'>
              Let's Get The Conversation{' '}
              <span className='text-[#f28c00]'>Started!</span>
            </h1>
            <p className='text-lg text-white/90 max-w-xl'>
              Got a banger of an idea, a juicy story tip, or just want to say
              what's up? Slide into our inbox, ring the studio line, or drop us
              a message below — we're always tuned in and hyped to hear from
              you!
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Highlights */}
      <section className='container mx-auto px-4 md:px-6 -mt-20 md:-mt-24 relative z-20 scroll-animation'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6'>
          {contactHighlights.map((item) => (
            <Card
              key={item.title}
              className='p-6 border-gray-100 shadow-lg rounded-2xl hover-float'
            >
              <div
                className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-4`}
              >
                <item.icon className='h-6 w-6 text-white' />
              </div>
              <h3 className='text-lg font-bold mb-2'>{item.title}</h3>
              <div className='space-y-0.5 text-gray-600 text-sm mb-4'>
                {item.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <a
                href={item.action.href}
                target={
                  item.action.href.startsWith('http') ? '_blank' : undefined
                }
                rel='noopener noreferrer'
                className='inline-flex items-center text-sm font-semibold text-[#1b1f68]'
              >
                {item.action.label} <ArrowRight className='ml-1 h-3.5 w-3.5' />
              </a>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className='container mx-auto px-4 md:px-6 scroll-animation'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10'>
            {/* Contact Form - 3 columns */}
            <div className='lg:col-span-3'>
              <Card className='p-6 md:p-10 border-gray-100 shadow-md rounded-2xl h-full'>
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
                      disabled={isSubmitting}
                      className='w-full rounded-full bg-[#1b1f68] hover:bg-[#00aeef]'
                    >
                      {isSubmitting ? (
                        'Sending…'
                      ) : (
                        <>
                          Send Message <Send className='ml-2 h-4 w-4' />
                        </>
                      )}
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
            <div className='lg:col-span-2 space-y-6'>
              <Card className='p-6 md:p-8 border-gray-100 shadow-md rounded-2xl'>
                <div className='flex items-center gap-3 mb-5'>
                  <div className='w-10 h-10 rounded-xl bg-[#f28c00]/10 flex items-center justify-center'>
                    <Clock className='h-5 w-5 text-[#f28c00]' />
                  </div>
                  <h3 className='text-lg font-bold'>Studio Hours</h3>
                </div>
                <div className='space-y-3 text-sm'>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Monday - Friday</span>
                    <span className='font-medium'>6:00 AM - Midnight</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Saturday</span>
                    <span className='font-medium'>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Sunday</span>
                    <span className='font-medium'>10:00 AM - 1:00 PM</span>
                  </div>
                </div>
                <Separator className='my-4' />
                <p className='text-xs text-gray-500 leading-relaxed'>
                  Broadcasting is 24/7 — the hours above are for office and
                  studio visits.
                </p>
              </Card>

              <Card className='p-6 md:p-8 border-gray-100 shadow-md rounded-2xl'>
                <div className='flex items-center gap-3 mb-5'>
                  <div className='w-10 h-10 rounded-xl bg-[#00aeef]/10 flex items-center justify-center'>
                    <Send className='h-5 w-5 text-[#00aeef]' />
                  </div>
                  <h3 className='text-lg font-bold'>Follow Us Online</h3>
                </div>
                <p className='text-sm text-gray-600 mb-5'>
                  Catch behind-the-scenes moments and daily updates on our
                  social channels.
                </p>
                <div className='flex flex-wrap gap-3'>
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={label}
                      className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1b1f68] hover:text-white transition-colors'
                    >
                      <Icon className='h-4 w-4' />
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='container mx-auto px-4 md:px-6 scroll-animation'>
        <div className='max-w-7xl mx-auto'>
          <Card className='border-gray-100 shadow-md rounded-2xl overflow-hidden'>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
              <div className='lg:col-span-2 aspect-[16/9] lg:aspect-auto lg:min-h-[420px]'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7704715011578!2d39.6709314!3d-4.067137000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18401322c6d24283%3A0x6452b2790d4e3e3f!2sImaara%20-%20Your%20New%20Address%2C%20Dedan%20Kimathi%20Ave%2C%20Mombasa!5e0!3m2!1sen!2ske!4v1741154782415!5m2!1sen!2ske'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title='Studio Location'
                  className='w-full h-full'
                ></iframe>
              </div>
              <div className='p-8 md:p-10 flex flex-col justify-center bg-[#1b1f68] text-white'>
                <div className='w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5'>
                  <MapPin className='h-6 w-6' />
                </div>
                <h3 className='text-xl font-bold mb-3'>Find Our Studio</h3>
                <address className='not-italic text-white/80 leading-relaxed mb-6'>
                  Next to Imaara - Your New Address, <br />
                  Dedan Kimathi Ave, <br />
                  Opposite Pandya Hosp, Kizingo, <br />
                  Mombasa
                </address>
                <Button
                  asChild
                  variant='secondary'
                  className='rounded-full w-fit bg-white text-[#1b1f68] hover:bg-white/90'
                >
                  <a
                    href='https://maps.app.goo.gl/gDFvUHYG8iJJbN3Y8'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Get Directions <ArrowRight className='ml-2 h-4 w-4' />
                  </a>
                </Button>
              </div>
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
            <div className='space-y-4'>
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className='border-gray-100 rounded-2xl shadow-sm hover-float'
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
