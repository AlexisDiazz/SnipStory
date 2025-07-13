import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { toast } from '@/components/ui/use-toast';

const formSchema = z.object({
  name: z.string().min(1, 'Full Name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(1, 'Message is required'),
  'phone number': z.string().optional(),
  'company name': z.string().optional(),
  'type of inquiry': z.string().optional(),
  'how did you hear': z.string().optional(),
  botField: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      'phone number': '',
      'company name': '',
      'type of inquiry': '',
      'how did you hear': '',
      botField: '',
    },
  });

  async function onSubmit(values: FormValues) {
    if (values.botField) return; // honeypot
    try {
      const res = await fetch('https://sheetdb.io/api/v1/r4af3gpdaf2ue', {
        method: 'POST',
        body: JSON.stringify({ data: values }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error('Failed to submit');
      toast({ title: 'Thank you! We\'ll get back to you within 24 hours.' });
      form.reset();
    } catch (err) {
      toast({ title: 'Submission failed', description: 'Please try again later.' });
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-foreground">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 pt-32 pb-20 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-center">Start Your Project</h1>
        <p className="text-muted-foreground mb-8 text-center">
          Tell us about your project and we\'ll reach out within 24 hours.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Optional" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Optional" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type of inquiry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type of Inquiry</FormLabel>
                  <FormControl>
                    <select className="w-full h-10 rounded-md bg-background border border-input px-3" {...field}>
                      <option value="">Select...</option>
                      <option value="Creator">Creator</option>
                      <option value="Agency">Agency</option>
                      <option value="Brand">Brand</option>
                      <option value="Editor">Editor</option>
                      <option value="Other">Other</option>
                    </select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="how did you hear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How did you hear about us?</FormLabel>
                  <FormControl>
                    <select className="w-full h-10 rounded-md bg-background border border-input px-3" {...field}>
                      <option value="">Select...</option>
                      <option value="Instagram">Instagram</option>
                      <option value="TikTok">TikTok</option>
                      <option value="YouTube">YouTube</option>
                      <option value="Referral">Referral</option>
                      <option value="Other">Other</option>
                    </select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message / Inquiry</FormLabel>
                  <FormControl>
                    <Textarea rows={5} placeholder="Tell us about your project" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...form.register('botField')} />
            <div className="text-sm text-center text-muted-foreground">
              <a href="#" className="underline">Privacy Policy</a>
            </div>
            <Button type="submit" className="button-gradient w-full">Send Inquiry</Button>
          </form>
        </Form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
