"use client";
import { ArrowLeft, Star, Leaf, Shield, Clock, AlertTriangle} from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/app/components/ui/card';
import { useCart } from '@/app/contexts/CartContext';
import { useToast } from '@/app/hooks/use-toast';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

const products = {
  'afro-b-tonic': {
    id: 1,
    name: 'Afro B-Tonic',
    price: 2999,
    image: '/afro-b-tonic.jpg',
    description: 'Natural energy booster with African herbs for blood circulation and vitality',
    longDescription: 'Afro B-Tonic is a carefully crafted herbal blend that combines traditional African herbs known for their energy-boosting properties. This natural tonic supports healthy blood circulation, enhances vitality, and provides sustained energy without the crash associated with caffeine.',
    ingredients: [
      { name: 'Bitter leaf', benefits: 'Rich in antioxidants, supports liver health' },
      { name: 'Hibiscus', benefits: 'Supports healthy blood pressure, vitamin C' },
      { name: 'Moringa', benefits: 'Complete nutrition, energy boost' },
      { name: 'Ginger', benefits: 'Anti-inflammatory, digestive support' },
    ],
    benefits: [
      'Naturally boosts energy levels',
      'Improves blood circulation',
      'Supports cardiovascular health',
      'Rich in antioxidants',
      'No artificial stimulants',
    ],
    brewing: [
      'Boil 2 cups of water',
      'Add 1 tea bag or 1 teaspoon of loose tea',
      'Steep for 5-7 minutes',
      'Strain and enjoy warm',
      'Can be sweetened with honey if desired',
    ],
    usage: 'Drink 1-2 cups daily, preferably in the morning or early afternoon for best energy benefits.',
    warnings: [
      'Consult your healthcare provider if pregnant or nursing',
      'Not recommended for children under 12',
      'If you have any medical conditions, consult your doctor before use',
    ],
    rating: 4.8,
    reviews: 124,
  },
  'afro-immune-support': {
    id: 2,
    name: 'Afro Immune Support',
    price: 3499,
    image: '/afro-immune-support.jpg',
    description: 'Powerful immune system booster with traditional African remedies',
    longDescription: 'Our Immune Support blend harnesses the power of traditional African herbs known for their immune-strengthening properties. This carefully balanced formula helps your body maintain its natural defenses while providing essential nutrients.',
    ingredients: [
      { name: 'Echinacea', benefits: 'Immune system support, antiviral properties' },
      { name: 'African potato', benefits: 'Immune modulation, anti-inflammatory' },
      { name: 'Turmeric', benefits: 'Powerful anti-inflammatory, antioxidant' },
      { name: 'Ginger', benefits: 'Immune support, digestive health' },
    ],
    benefits: [
      'Strengthens immune system naturally',
      'Powerful anti-inflammatory effects',
      'Rich in antioxidants',
      'Supports respiratory health',
      'Helps fight infections naturally',
    ],
    brewing: [
      'Boil 2 cups of water',
      'Add 1 tea bag or 1 teaspoon of loose tea',
      'Steep for 7-10 minutes for maximum potency',
      'Strain and drink warm',
      'Add lemon and honey for extra vitamin C',
    ],
    usage: 'Drink 2-3 cups daily during cold season, 1 cup daily for maintenance.',
    warnings: [
      'Consult healthcare provider if taking immunosuppressive medications',
      'Not recommended during pregnancy without medical supervision',
      'May interact with blood thinning medications',
    ],
    rating: 4.9,
    reviews: 89,
  },
  'afro-d-care': {
    id: 3,
    name: 'Afro D-Care',
    price: 3999,
    image: '/afro-d-care.jpg',
    description: 'Diabetic care support tea with blood sugar management herbs',
    longDescription: 'Afro D-Care is specifically formulated to support healthy blood sugar levels using traditional African herbs known for their glucose-regulating properties. This blend works as a natural complement to a healthy diet and lifestyle.',
    ingredients: [
      { name: 'Cinnamon', benefits: 'Blood sugar regulation, insulin sensitivity' },
      { name: 'Fenugreek', benefits: 'Glucose metabolism, fiber content' },
      { name: 'Bitter melon', benefits: 'Natural blood sugar support' },
      { name: 'African bitter herbs', benefits: 'Traditional diabetes support' },
    ],
    benefits: [
      'Supports healthy blood sugar levels',
      'May improve insulin sensitivity',
      'Rich in fiber and nutrients',
      'Supports metabolic health',
      'Traditional diabetes care approach',
    ],
    brewing: [
      'Boil 2 cups of water',
      'Add 1 tea bag or 1 teaspoon of loose tea',
      'Steep for 10-12 minutes',
      'Strain and drink without sweetener',
      'Best consumed 30 minutes before meals',
    ],
    usage: 'Drink 1 cup before each main meal (3 times daily) for best results.',
    warnings: [
      'IMPORTANT: This is a supplement, not a replacement for diabetes medication',
      'Monitor blood sugar levels regularly',
      'Consult your doctor before use, especially if taking diabetes medications',
      'May interact with blood sugar medications',
    ],
    rating: 4.7,
    reviews: 156,
  },
};

const ProductDetail = () => {
  const { slug } = useParams();
  const { addItem } = useCart();
  const { toast } = useToast();
  const product = slug ? products[slug as keyof typeof products] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-playfair font-bold text-primary mb-4">Product Not Found</h1>
          <Button asChild variant="hero">
            <Link href="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return `₦${(price / 100).toLocaleString()}`;
  };

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        slug: slug! as string,
      });
      toast({
        title: "Added to cart!",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/shop" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <Card className="shadow-medium">
              <CardContent className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-current text-accent'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-primary mb-4">
                {formatPrice(product.price)}
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                {product.longDescription}
              </p>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link href="/consultation">
                  Get Expert Advice
                </Link>
              </Button>
            </div>

            {/* Key Benefits */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-primary mb-4 flex items-center">
                  <Leaf className="mr-2 h-5 w-5" />
                  Key Benefits
                </h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-16 space-y-8">
          {/* Ingredients */}
          <Card className="shadow-soft">
            <CardContent className="p-8">
              <h2 className="text-2xl font-playfair font-bold text-primary mb-6 flex items-center">
                <Shield className="mr-3 h-6 w-6" />
                Ingredients & Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.ingredients.map((ingredient, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-2">{ingredient.name}</h4>
                    <p className="text-muted-foreground text-sm">{ingredient.benefits}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Brewing Instructions */}
          <Card className="shadow-soft">
            <CardContent className="p-8">
              <h2 className="text-2xl font-playfair font-bold text-primary mb-6 flex items-center">
                <Clock className="mr-3 h-6 w-6" />
                Brewing Instructions
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-primary mb-4">How to Brew</h4>
                  <ol className="space-y-2">
                    {product.brewing.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <Badge variant="secondary" className="mr-3 mt-0.5 text-xs">
                          {index + 1}
                        </Badge>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-4">Usage Guidelines</h4>
                  <p className="text-muted-foreground">{product.usage}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Warnings */}
          <Card className="shadow-soft border-destructive/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-playfair font-bold text-destructive mb-6 flex items-center">
                <AlertTriangle className="mr-3 h-6 w-6" />
                Important Warnings
              </h2>
              <ul className="space-y-3">
                {product.warnings.map((warning, index) => (
                  <li key={index} className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{warning}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Related Products CTA */}
        <div className="mt-16">
          <Card className="shadow-medium gradient-subtle">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-playfair font-bold text-primary mb-4">
                Explore Our Other Herbal Remedies
              </h2>
              <p className="text-muted-foreground mb-6">
                Discover more traditional African herbal teas for your wellness journey.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link href="/shop">
                  View All Products
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;