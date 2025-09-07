"use client"
import { useState } from 'react';

import { Calendar, Clock, UserCheck, MessageSquare } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@radix-ui/react-select';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const Consultation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    concern: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Booked!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      concern: '',
      message: '',
    });
  };

  const concerns = [
    'Energy & Vitality',
    'Immune System Support',
    'Diabetes Management',
    'Blood Pressure',
    'Digestive Health',
    'Sleep Issues',
    'Stress & Anxiety',
    'Weight Management',
    'General Wellness',
    'Other',
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="gradient-subtle py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Free Herbal Consultation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get personalized advice from our experienced herbal practitioners.
              Book your free 30-minute consultation today.
            </p>
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* How It Works */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-primary mb-8">
                How It Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full p-3">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">1. Book Your Session</h3>
                    <p className="text-muted-foreground">
                      Fill out the form with your details and preferred time. We'll confirm within 24 hours.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full p-3">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2. Initial Assessment</h3>
                    <p className="text-muted-foreground">
                      Our herbal expert will discuss your health concerns and wellness goals.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full p-3">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">3. Personalized Plan</h3>
                    <p className="text-muted-foreground">
                      Receive custom herbal tea recommendations and wellness guidance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full p-3">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">4. Follow-up Support</h3>
                    <p className="text-muted-foreground">
                      Get ongoing support and adjustments to your herbal wellness plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">Book Your Consultation</CardTitle>
                <CardDescription>
                  Please fill out all fields to schedule your free consultation.
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
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Select
                        value={formData.time}
                        onValueChange={(value) => setFormData({ ...formData, time: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="concern">Primary Health Concern *</Label>
                    <Select
                      value={formData.concern}
                      onValueChange={(value) => setFormData({ ...formData, concern: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your main concern" />
                      </SelectTrigger>
                      <SelectContent>
                        {concerns.map((concern) => (
                          <SelectItem key={concern} value={concern}>
                            {concern}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      placeholder="Please share any additional details about your health concerns or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" variant="hero" size="lg">
                    Book Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;