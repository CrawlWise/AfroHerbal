"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Calendar } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent , CardDescription } from '../components/ui/card';
import { ArrowRight, Clock } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'How Afro B-Tonic Can Boost Your Energy Naturally',
    excerpt: 'Discover the powerful combination of African herbs that make Afro B-Tonic a natural energy booster without the crash.',
    content: 'Traditional African medicine has long relied on specific herbs to boost energy and vitality...',
    category: 'Energy',
    readTime: '5 min read',
    publishedAt: '2024-01-15',
    slug: 'afro-b-tonic-natural-energy-boost',
  },
  {
    id: 2,
    title: 'Top 5 Herbal Remedies for Immune Support',
    excerpt: 'Learn about the most effective herbal remedies that have been used for centuries to strengthen the immune system.',
    content: 'The immune system is our body\'s natural defense mechanism...',
    category: 'Immunity',
    readTime: '7 min read',
    publishedAt: '2024-01-10',
    slug: 'top-herbal-remedies-immune-support',
  },
  {
    id: 3,
    title: 'When to Use Herbal Tea vs Modern Medicine',
    excerpt: 'Understanding the role of herbal remedies in modern healthcare and when to consult healthcare professionals.',
    content: 'The relationship between traditional herbal medicine and modern healthcare...',
    category: 'Wellness',
    readTime: '6 min read',
    publishedAt: '2024-01-05',
    slug: 'herbal-tea-vs-modern-medicine',
  },
  {
    id: 4,
    title: 'Managing Diabetes with Natural Herbal Support',
    excerpt: 'Explore how certain herbs can complement your diabetes management plan alongside medical treatment.',
    content: 'Diabetes management requires a comprehensive approach...',
    category: 'Diabetes',
    readTime: '8 min read',
    publishedAt: '2024-01-01',
    slug: 'diabetes-natural-herbal-support',
  },
  {
    id: 5,
    title: 'The Science Behind African Herbal Medicine',
    excerpt: 'Understanding the research and scientific evidence supporting traditional African herbal remedies.',
    content: 'Modern science is increasingly validating traditional African herbal practices...',
    category: 'Science',
    readTime: '10 min read',
    publishedAt: '2023-12-28',
    slug: 'science-african-herbal-medicine',
  },
  {
    id: 6,
    title: 'Brewing the Perfect Herbal Tea: A Complete Guide',
    excerpt: 'Master the art of brewing herbal teas to maximize their therapeutic benefits and flavor.',
    content: 'The way you brew your herbal tea can significantly impact its effectiveness...',
    category: 'Guide',
    readTime: '4 min read',
    publishedAt: '2023-12-25',
    slug: 'brewing-perfect-herbal-tea-guide',
  },
];

const categories = ['All', 'Energy', 'Immunity', 'Wellness', 'Diabetes', 'Science', 'Guide'];

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="gradient-subtle py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Wellness Articles
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive collection of articles on herbal medicine, 
              wellness tips, and traditional African healing wisdom.
            </p>
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer hover:bg-accent transition-smooth px-4 py-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{article.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-playfair text-primary leading-tight">
                    {article.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(article.publishedAt)}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                  <Button asChild variant="ghost" className="p-0 h-auto group">
                    <Link href={`/articles/${article.slug}`} className="flex items-center">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 transition-smooth group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="shadow-medium gradient-hero text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
                Stay Updated with Wellness Tips
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Subscribe to our newsletter for the latest articles on herbal medicine and natural wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md text-foreground"
                />
                <Button variant="secondary">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Articles;