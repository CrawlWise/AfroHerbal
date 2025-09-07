import { ArrowRight, Leaf, Award, Users, Heart, Star} from 'lucide-react';
import afroBTonicImage from '/public/afro-b-tonic.jpg';
import afroImmuneImage from '/public/afro-immune-support.jpg';
import afroDCareImage from '/public/afro-d-care.jpg';

// import { Button } from 'react-day-picker';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from './components/ui/card';
import Image from 'next/image';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import Link from 'next/link';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Afro B-Tonic',
      slug: 'afro-b-tonic',
      description: 'Natural energy booster with African herbs',
      price: 2999,
      image: afroBTonicImage,
      benefits: ['Boosts Energy', 'Improves Circulation'],
    },
    {
      id: 2,
      name: 'Afro Immune Support',
      slug: 'afro-immune-support',
      description: 'Powerful immune system booster',
      price: 3499,
      image: afroImmuneImage,
      benefits: ['Strengthens Immunity', 'Anti-inflammatory'],
    },
    {
      id: 3,
      name: 'Afro D-Care',
      slug: 'afro-d-care',
      description: 'Diabetic care support tea',
      price: 3999,
      image: afroDCareImage,
      benefits: ['Blood Sugar Support', 'Natural Care'],
    },
  ];

  const whyChooseUs = [
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      description: 'Sourced from the finest organic African herbs with no artificial additives.',
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Get personalized guidance from our experienced herbal practitioners.',
    },
    {
      icon: Award,
      title: 'African Heritage',
      description: 'Authentic recipes passed down through generations of traditional healers.',
    },
    {
      icon: Heart,
      title: 'Holistic Wellness',
      description: 'Supporting your complete well-being - mind, body, and spirit.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Afro B-Tonic has completely transformed my energy levels. I feel more vibrant and alive!',
    },
    {
      name: 'Michael Adebayo',
      rating: 5,
      text: 'The immune support tea helped me through the flu season. Highly recommend!',
    },
    {
      name: 'Grace Okafor',
      rating: 5,
      text: 'The consultation service was incredibly helpful. They truly care about your wellness.',
    },
  ];

  const formatPrice = (price: number) => {
    return `₦${(price / 100).toLocaleString()}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/hero-image.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
            Afro Herbal Remedy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Natural Healing, African Wisdom
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto opacity-80">
            Discover the power of traditional African herbs with our carefully crafted herbal teas. 
            Experience natural wellness that has been trusted for generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg" className="text-lg px-8 py-4">
              <Link href="/shop">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-4">
              <Link href="/consultation">
                Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Featured Herbal Teas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our signature blends combine traditional African herbs with modern wellness science
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="shadow-medium hover:shadow-strong transition-smooth group">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent">Featured</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-playfair text-primary mb-2">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="mb-4">
                    {product.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.benefits.map((benefit) => (
                      <Badge key={benefit} variant="secondary" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(product.price)}
                    </span>
                    <Button asChild variant="outline">
                      <Link href={`/product/${product.slug}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="hero" size="lg">
              <Link href="/shop">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Why Choose Afro Herbal Remedy?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring you authentic African herbal wisdom with modern quality standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth text-center">
                  <CardContent className="p-8">
                    <div className="bg-primary text-primary-foreground rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wellness Articles Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Wellness Wisdom
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about herbal medicine, natural wellness, and traditional healing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-4">Energy</Badge>
                <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
                  How Afro B-Tonic Boosts Energy Naturally
                </h3>
                <p className="text-muted-foreground mb-4">
                  Discover the powerful combination of African herbs that make our B-Tonic a natural energy booster...
                </p>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/articles/afro-b-tonic-natural-energy-boost" className="flex items-center">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-4">Immunity</Badge>
                <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
                  Top 5 Herbal Remedies for Immune Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  Learn about the most effective herbal remedies that strengthen your immune system naturally...
                </p>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/articles/top-herbal-remedies-immune-support" className="flex items-center">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-4">Wellness</Badge>
                <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
                  When to Use Herbal Tea vs Modern Medicine
                </h3>
                <p className="text-muted-foreground mb-4">
                  Understanding the role of herbal remedies in modern healthcare and when to consult...
                </p>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/articles/herbal-tea-vs-modern-medicine" className="flex items-center">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/articles">
                Read All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 gradient-earth text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Real stories from people who have experienced the power of natural healing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-primary-foreground">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-accent" />
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="shadow-strong gradient-hero text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Get Your Free Consultation
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Our herbal experts are ready to help you discover the perfect natural remedies 
                for your unique wellness needs. Book your complimentary consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-4">
                  <Link href="/consultation">
                    Book Free Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-primary hover:bg-white hover:text-primary">
                  <Link href="/contact">
                    Contact Us
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

export default Home;