import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Social media links - Update with your actual URLs
  const socialLinks = {
    facebook: "https://facebook.com/erivinscompany",
    instagram: "https://instagram.com/erivinscompany",
    twitter: "https://twitter.com/erivinscompany",
    whatsapp: "https://wa.me/254727937010", // WhatsApp link format
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Option 1: Send to your backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        
        // Reset form
        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          eventType: "", 
          eventDate: "",
          guestCount: "",
          budget: "",
          message: "" 
        });

        // Optional: Track conversion with analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'form_submission', {
            event_category: 'Contact',
            event_label: 'Contact Form',
          });
        }
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Fallback: Open email client if API fails
      const mailtoLink = `mailto:info@erivinscompany.co.ke?subject=Event Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AEvent Type: ${formData.eventType}%0D%0AEvent Date: ${formData.eventDate}%0D%0AGuest Count: ${formData.guestCount}%0D%0ABudget: ${formData.budget}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      
      window.location.href = mailtoLink;
      
      toast({
        title: "Opening Email Client",
        description: "Your default email app will open to send your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Quick WhatsApp contact function
  const contactViaWhatsApp = () => {
    const message = `Hi! I'm interested in planning an event. My name is ${formData.name || '[Your Name]'}.`;
    window.open(`${socialLinks.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    
    // Track WhatsApp click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'Contact',
        event_label: 'WhatsApp',
      });
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Ready to start planning your unforgettable event? Contact us today for a free consultation
            </p>
            {/* Quick WhatsApp CTA */}
            <Button
              onClick={contactViaWhatsApp}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp - Instant Response
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <a 
                        href="tel:+254727937010" 
                        className="text-muted-foreground hover:text-accent transition-colors block"
                      >
                        0727 937 010
                      </a>
                      <a 
                        href="tel:+254721320787" 
                        className="text-muted-foreground hover:text-accent transition-colors block"
                      >
                        0721 320 787
                      </a>
                      <p className="text-xs text-muted-foreground mt-2">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">WhatsApp</h3>
                      <a 
                        href={socialLinks.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-green-500 transition-colors block"
                      >
                        0727 937 010
                      </a>
                      <p className="text-xs text-muted-foreground mt-2">Fastest response time</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <a 
                        href="mailto:info@erivinscompany.co.ke"
                        className="text-muted-foreground hover:text-accent transition-colors block break-all"
                      >
                        info@erivinscompany.co.ke
                      </a>
                      <a 
                        href="mailto:events@erivinscompany.co.ke"
                        className="text-muted-foreground hover:text-accent transition-colors block break-all"
                      >
                        events@erivinscompany.co.ke
                      </a>
                      <p className="text-xs text-muted-foreground mt-2">Response within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Location</h3>
                      <p className="text-muted-foreground">Nairobi, Kenya</p>
                      <p className="text-sm text-muted-foreground mt-2">Serving all of Kenya</p>
                      <a 
                        href="https://maps.google.com/?q=Nairobi,Kenya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-accent hover:underline mt-2 inline-block"
                      >
                        View on Map
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Sat: 10:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground">Sun: By Appointment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href={socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                      aria-label="Visit our Facebook page"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                      aria-label="Visit our Instagram profile"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                      aria-label="Visit our Twitter profile"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-border shadow-strong">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-serif font-bold mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground mb-6">Fill out the form below and we'll respond within 24 hours</p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="border-2"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="border-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+254 712 345 678"
                          className="border-2"
                        />
                      </div>
                      <div>
                        <label htmlFor="eventType" className="block text-sm font-medium mb-2">
                          Event Type *
                        </label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          required
                          className="w-full border-2 rounded-md p-2 bg-background"
                        >
                          <option value="">Select event type</option>
                          <option value="Wedding">Wedding</option>
                          <option value="Traditional Wedding">Traditional Wedding</option>
                          <option value="Corporate Event">Corporate Event</option>
                          <option value="Private Party">Private Party</option>
                          <option value="Birthday">Birthday Celebration</option>
                          <option value="Anniversary">Anniversary</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="eventDate" className="block text-sm font-medium mb-2">
                          Event Date
                        </label>
                        <Input
                          id="eventDate"
                          name="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="border-2"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <label htmlFor="guestCount" className="block text-sm font-medium mb-2">
                          Guest Count
                        </label>
                        <Input
                          id="guestCount"
                          name="guestCount"
                          type="number"
                          value={formData.guestCount}
                          onChange={handleChange}
                          placeholder="100"
                          className="border-2"
                          min="1"
                        />
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full border-2 rounded-md p-2 bg-background"
                        >
                          <option value="">Select budget</option>
                          <option value="Under 100K">Under KES 100,000</option>
                          <option value="100K-300K">KES 100,000 - 300,000</option>
                          <option value="300K-500K">KES 300,000 - 500,000</option>
                          <option value="500K-1M">KES 500,000 - 1M</option>
                          <option value="1M+">Over KES 1M</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your event vision, venue preferences, and any specific requirements..."
                        rows={6}
                        className="border-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold hover-glow gap-2"
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Stay Inspired with Event Ideas
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get exclusive event planning tips, latest trends, and special offers delivered to your inbox. Join our community of event planners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-primary-foreground/10 border-2 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold hover-glow whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/70 mt-4">
              We respect your privacy. Unsubscribe at any time. No spam, just valuable event content.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;