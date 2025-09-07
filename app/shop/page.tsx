'use client';

import { useCart } from '../contexts/CartContext';
import { useToast } from '../hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import Image from 'next/image';
import { Button } from '../components/ui/button';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Afro B-Tonic',
    slug: 'afro-b-tonic',
    description: 'Natural energy booster with African herbs for blood circulation and vitality',
    price: 2999,
    image: '/afro-b-tonic.jpg',
    ingredients: ['Bitter leaf', 'Hibiscus', 'Moringa', 'Ginger'],
    benefits: ['Boosts energy', 'Improves circulation', 'Natural vitality'],
    inStock: true,
  },
  {
    id: 2,
    name: 'Afro Immune Support',
    slug: 'afro-immune-support',
    description: 'Powerful immune system booster with traditional African remedies',
    price: 3499,
    image: '/afro-immune-support.jpg',
    ingredients: ['Echinacea', 'African potato', 'Turmeric', 'Ginger'],
    benefits: ['Strengthens immunity', 'Anti-inflammatory', 'Natural protection'],
    inStock: true,
  },
  {
    id: 3,
    name: 'Afro D-Care',
    slug: 'afro-d-care',
    description: 'Diabetic care support tea with blood sugar management herbs',
    price: 3999,
    image: '/afro-d-care.jpg',
    ingredients: ['Cinnamon', 'Fenugreek', 'Bitter melon', 'African bitter herbs'],
    benefits: ['Blood sugar support', 'Natural diabetes care', 'Metabolic health'],
    inStock: true,
  },
];

const Shop = () => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const formatPrice = (price: number) => {
    return `₦${(price / 100).toLocaleString()}`;
  };

  const handleAddToCart = (product: typeof products[0]) => {
    console.log('Adding to cart:', product); // Debug log
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug,
    });
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="gradient-subtle py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Our Herbal Teas
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully crafted herbal teas, made with traditional African herbs
              and modern wellness knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    {product.inStock && (
                      <Badge className="absolute top-4 left-4 bg-accent">
                        In Stock
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-playfair text-primary mb-2">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="mb-4">
                    {product.description}
                  </CardDescription>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Key Ingredients:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.ingredients.slice(0, 3).map((ingredient) => (
                        <Badge key={ingredient} variant="secondary" className="text-xs">
                          {ingredient}
                        </Badge>
                      ))}
                      {product.ingredients.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{product.ingredients.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {formatPrice(product.price)}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 space-x-2">
                  <Button 
                    className="flex-1" 
                    variant="hero"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href={`/product/${product.slug}`}>
                      View Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Need Personal Guidance?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Our herbal experts can help you choose the perfect tea blend for your specific needs.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link href="/consultation">
                Book Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;