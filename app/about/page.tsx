import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Link from 'next/link';
import { Heart, Leaf, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      description: 'We source only the finest organic herbs, many grown using traditional African methods passed down through generations.',
    },
    {
      icon: Heart,
      title: 'Holistic Wellness',
      description: 'Our approach considers the whole person - mind, body, and spirit - for comprehensive natural healing.',
    },
    {
      icon: Award,
      title: 'Expert Knowledge',
      description: 'Our team combines traditional herbal wisdom with modern scientific understanding for safe, effective remedies.',
    },
    {
      icon: Users,
      title: 'Community Care',
      description: 'We believe in supporting our community\'s health and wellness journey with personalized guidance and care.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '15+', label: 'Years Experience' },
    { number: '30+', label: 'Herbal Varieties' },
    { number: '98%', label: 'Satisfaction Rate' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Bridging ancient African herbal wisdom with modern wellness needs
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Afro Herbal Remedy, we are dedicated to preserving and sharing the rich tradition 
                of African herbal medicine. Our mission is to provide natural, effective wellness 
                solutions that honor our ancestors' wisdom while meeting modern health needs.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe that nature provides everything we need for optimal health, and our 
                carefully crafted herbal blends are designed to support your body's natural 
                healing processes.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link href="/consultation">
                  Start Your Wellness Journey
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Card className="shadow-strong">
                <CardContent className="p-8">
                  <blockquote className="text-lg italic text-muted-foreground mb-4">
                    "Traditional medicine is not just about healing the body; it's about 
                    restoring harmony between mind, body, and spirit."
                  </blockquote>
                  <cite className="text-primary font-semibold">
                    — Dr. Amara Okafor, Traditional Healer & Founder
                  </cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at Afro Herbal Remedy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth text-center">
                  <CardContent className="p-6">
                    <div className="bg-primary text-primary-foreground rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-16 gradient-earth text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              African Herbal Heritage
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
              Our recipes are rooted in centuries-old African traditions, passed down through 
              generations of healers and refined with modern understanding of herbal medicine. 
              Each blend tells a story of healing, community, and the profound connection between 
              nature and wellness.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h3 className="text-xl font-playfair font-semibold mb-2">Traditional Knowledge</h3>
                <p className="opacity-90">Recipes passed down through generations</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-playfair font-semibold mb-2">Scientific Validation</h3>
                <p className="opacity-90">Modern research supporting ancient wisdom</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-playfair font-semibold mb-2">Quality Assurance</h3>
                <p className="opacity-90">Rigorous testing for purity and potency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="shadow-medium gradient-subtle text-center">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
                Ready to Experience Natural Healing?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have discovered the power of African herbal medicine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="lg">
                  <Link href="/shop">
                    Shop Herbal Teas
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/consultation">
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;