import { Leaf, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Separator } from './ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: 'Afro B-Tonic', href: '/product/afro-b-tonic' },
    { name: 'Afro Immune Support', href: '/product/afro-immune-support' },
    { name: 'Afro D-Care', href: '/product/afro-d-care' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Articles', href: '/articles' },
    { name: 'Consultation', href: '/consultation' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              {/* <Leaf className="h-8 w-8 text-accent" /> */}
              <img src="/favicon golden amber.png"  width='25px' alt="afro-herbal-remedy" />
              <span className="text-xl font-playfair font-bold">
                Afro Herbal Remedy
              </span>
            </Link>
            <p className="text-primary-foreground/80 text-sm">
              Natural healing through traditional African herbal wisdom. 
              Discover the power of authentic herbal remedies for modern wellness.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="bg-primary-foreground/10 hover:bg-accent transition-smooth rounded-full p-2"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Our Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/shop"
                  className="text-accent hover:text-accent/80 transition-smooth text-sm font-medium"
                >
                  View All Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent" />
                <div className="text-primary-foreground/80 text-sm">
                  <p>123 Example Street</p>
                  <p>Example City</p>
                  <p>Country</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  +123456789
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  info@afroherbalremedy.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/80 text-sm">
            © {currentYear} Afro Herbal Remedy. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">
              Privacy Policy
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">
              Terms of Service
            </Link>
            <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">
              Shipping Policy
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        {/* <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/60 text-xs text-center">
            <strong>Disclaimer:</strong> These statements have not been evaluated by regulatory authorities. 
            Our products are not intended to diagnose, treat, cure, or prevent any disease. 
            Please consult with a healthcare professional before using herbal remedies, 
            especially if you have existing medical conditions or are taking medications.
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;