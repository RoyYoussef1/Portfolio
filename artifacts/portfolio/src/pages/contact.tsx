import React from "react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactValues) => {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "7cc868b8-cf66-4e83-8897-0b84167d971f",
          ...data,
        }),
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.message || "Submission failed");
      toast({ title: "Message sent", description: "Thanks — I'll get back to you shortly.", duration: 5000 });
      form.reset();
    } catch {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Your message didn't go through. You can email me directly at roy.b.youssef@gmail.com.",
        duration: 7000,
      });
    }
  };

  return (
    <>
      <SEO 
        title="Contact | Roy Youssef" 
        description="Get in touch with Roy Youssef for full-time roles or freelance projects."
      />
      
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Initialize Contact.</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you're looking to fill a senior engineering role or need a high-end application built, my inbox is open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-panel p-8 rounded-xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none transition-transform group-hover:scale-110 group-hover:opacity-10">
                <MapPin className="w-32 h-32" />
              </div>
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Coordinates</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-mono mb-1">Email</p>
                    <a href="mailto:roy.b.youssef@gmail.com" className="font-medium hover:text-primary transition-colors">
                      roy.b.youssef@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-mono mb-1">Secure Line</p>
                    <a href="tel:+96176348117" className="font-medium hover:text-primary transition-colors">
                      +961 76 348 117
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-10 pt-6 border-t border-white/10">
                <a href="https://github.com/RoyYoussef1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/roy-youssef-097a47252" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass-panel p-8 rounded-xl border border-white/5">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Ident</FormLabel>
                          <FormControl>
                            <Input placeholder="Full Name" className="bg-black/20 border-white/10 focus-visible:ring-primary/50" {...field} data-testid="input-name" />
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
                          <FormLabel className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Return Address</FormLabel>
                          <FormControl>
                            <Input placeholder="example@example.com" type="email" className="bg-black/20 border-white/10 focus-visible:ring-primary/50" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Subject Vector</FormLabel>
                        <FormControl>
                          <Input placeholder="Subject" className="bg-black/20 border-white/10 focus-visible:ring-primary/50" {...field} data-testid="input-subject" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Payload</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Detail your requirements or inquiry here..." 
                            className="min-h-[150px] bg-black/20 border-white/10 focus-visible:ring-primary/50 resize-none" 
                            {...field} 
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors group disabled:opacity-50"
                    disabled={form.formState.isSubmitting}
                    data-testid="button-submit-contact"
                  >
                    {form.formState.isSubmitting ? "Transmitting..." : "Transmit Payload"}
                    {!form.formState.isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
