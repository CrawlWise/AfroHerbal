"use client";
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['123 Herbal Garden Street', 'Victoria Island, Lagos', 'Nigeria'],
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+234 802 123 4567', '+234 901 234 5678'],
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@afroherbalremedy.com', 'support@afroherbalremedy.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
    },
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' },
    { icon: Twitter, name: 'Twitter', url: '#' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="gradient-subtle py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're here to help with any questions about our herbal remedies or wellness services.
              Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" variant="hero" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-playfair font-bold text-primary mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Whether you have questions about our products, need personalized recommendations, 
                  or want to learn more about African herbal medicine, we're here to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="shadow-soft">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-primary text-primary-foreground rounded-full p-3">
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Social Media */}
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          className="bg-primary text-primary-foreground rounded-full p-3 hover:opacity-90 transition-smooth"
                          aria-label={social.name}
                        >
                          <IconComponent className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Stay connected for wellness tips, product updates, and herbal wisdom.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-4">
              Visit Our Store
            </h2>
            <p className="text-muted-foreground">
              Come experience our herbal remedies in person at our Victoria Island location.
            </p>
          </div>
          <Card className="shadow-medium">
            <CardContent className="p-0">
              <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Interactive map will be available here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;