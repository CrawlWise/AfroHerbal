"use client";
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

const articles = [
  {
    id: 1,
    title: 'How Afro B-Tonic Can Boost Your Energy Naturally',
    excerpt: 'Discover the powerful combination of African herbs that make Afro B-Tonic a natural energy booster without the crash.',
    content: `
      <h2>The Power of Traditional African Medicine</h2>
      <p>Traditional African medicine has long relied on specific herbs to boost energy and vitality. Afro B-Tonic combines centuries-old wisdom with modern understanding to create a natural energy solution that works with your body, not against it.</p>
      
      <h3>Key Ingredients and Their Benefits</h3>
      <p><strong>Bitter Leaf (Vernonia amygdalina):</strong> Known for its ability to improve blood circulation and boost natural energy levels without the jitters associated with caffeine.</p>
      
      <p><strong>Hibiscus:</strong> Rich in antioxidants and vitamin C, hibiscus helps maintain healthy blood pressure while providing natural energy.</p>
      
      <p><strong>Moringa:</strong> Often called the "miracle tree," moringa is packed with nutrients that support sustained energy throughout the day.</p>
      
      <h3>How to Use Afro B-Tonic</h3>
      <p>For best results, steep one tea bag in hot water for 5-7 minutes. Drink 30 minutes before meals, twice daily. Start with one cup per day and gradually increase as your body adjusts.</p>
      
      <h3>Scientific Backing</h3>
      <p>Recent studies have shown that the combination of these African herbs can significantly improve energy levels while supporting overall health. Unlike synthetic energy drinks, Afro B-Tonic provides sustained energy without the crash.</p>
    `,
    category: 'Energy',
    readTime: '5 min read',
    publishedAt: '2024-01-15',
    slug: 'afro-b-tonic-natural-energy-boost',
    author: 'Dr. Amara Okafor',
  },
  {
    id: 2,
    title: 'Top 5 Herbal Remedies for Immune Support',
    excerpt: 'Learn about the most effective herbal remedies that have been used for centuries to strengthen the immune system.',
    content: `
      <h2>Strengthening Your Natural Defenses</h2>
      <p>The immune system is our body's natural defense mechanism against illness and disease. Traditional African herbs have been used for centuries to support and strengthen this vital system.</p>
      
      <h3>1. Echinacea (Purple Coneflower)</h3>
      <p>While not native to Africa, echinacea has been adopted into traditional healing practices for its powerful immune-boosting properties. It stimulates white blood cell production and enhances the body's natural defense mechanisms.</p>
      
      <h3>2. African Potato (Hypoxis hemerocallidea)</h3>
      <p>This indigenous African herb contains powerful compounds that support immune function and help the body resist infections naturally.</p>
      
      <h3>3. Sutherlandia (Cancer Bush)</h3>
      <p>Known as the "miracle herb," Sutherlandia has been used traditionally to boost immunity and support overall health and vitality.</p>
      
      <h3>4. Baobab Fruit</h3>
      <p>Rich in vitamin C and antioxidants, baobab fruit powder is an excellent natural immune booster that can be easily incorporated into daily routines.</p>
      
      <h3>5. Rooibos (Red Bush Tea)</h3>
      <p>Packed with antioxidants and minerals, rooibos tea helps support immune function while providing a delicious, caffeine-free beverage option.</p>
      
      <h3>How Our Afro Immune Support Works</h3>
      <p>Our Afro Immune Support blend combines several of these powerful herbs in optimal proportions to provide comprehensive immune system support. Regular use can help maintain your body's natural defenses year-round.</p>
    `,
    category: 'Immunity',
    readTime: '7 min read',
    publishedAt: '2024-01-10',
    slug: 'top-herbal-remedies-immune-support',
    author: 'Dr. Kwame Asante',
  },
  {
    id: 3,
    title: 'When to Use Herbal Tea vs Modern Medicine',
    excerpt: 'Understanding the role of herbal remedies in modern healthcare and when to consult healthcare professionals.',
    content: `
      <h2>Integrating Traditional and Modern Medicine</h2>
      <p>The relationship between traditional herbal medicine and modern healthcare doesn't have to be an either-or choice. Understanding when to use each approach can help you make the best decisions for your health.</p>
      
      <h3>When Herbal Teas Are Most Effective</h3>
      <p><strong>Preventive Care:</strong> Herbal teas excel at supporting overall wellness and preventing illness through daily use.</p>
      
      <p><strong>Mild Symptoms:</strong> For minor digestive issues, stress, or mild fatigue, herbal remedies can provide gentle, effective relief.</p>
      
      <p><strong>Chronic Conditions:</strong> Some chronic conditions may benefit from herbal support alongside conventional treatment.</p>
      
      <h3>When to Choose Modern Medicine</h3>
      <p><strong>Acute Illness:</strong> Serious infections, severe pain, or life-threatening conditions require immediate medical attention.</p>
      
      <p><strong>Emergency Situations:</strong> Any medical emergency should be treated with conventional medicine first.</p>
      
      <p><strong>Diagnosed Conditions:</strong> If you have a diagnosed medical condition, work with your healthcare provider to integrate herbal remedies safely.</p>
      
      <h3>The Best of Both Worlds</h3>
      <p>Many healthcare providers now recognize the value of integrative medicine, which combines the best of traditional and modern approaches. Always inform your doctor about any herbal remedies you're taking.</p>
      
      <h3>Safety First</h3>
      <p>While herbal teas are generally safe, they can interact with medications. Always consult with a healthcare professional if you're taking prescription medications or have underlying health conditions.</p>
    `,
    category: 'Wellness',
    readTime: '6 min read',
    publishedAt: '2024-01-05',
    slug: 'herbal-tea-vs-modern-medicine',
    author: 'Dr. Fatima Musa',
  },
  {
    id: 4,
    title: 'Managing Diabetes with Natural Herbal Support',
    excerpt: 'Explore how certain herbs can complement your diabetes management plan alongside medical treatment.',
    content: `
      <h2>Natural Support for Diabetes Management</h2>
      <p>Diabetes management requires a comprehensive approach that includes proper medical care, diet, exercise, and lifestyle modifications. Certain herbs can provide additional support when used alongside conventional treatment.</p>
      
      <h3>Understanding Blood Sugar Regulation</h3>
      <p>Traditional African herbs have been used for generations to help maintain healthy blood sugar levels. While these should never replace prescribed medications, they can provide valuable support.</p>
      
      <h3>Key Herbs in Afro D-Care</h3>
      <p><strong>Bitter Melon:</strong> Contains compounds that may help improve glucose tolerance and insulin sensitivity.</p>
      
      <p><strong>Cinnamon Bark:</strong> Studies suggest that cinnamon may help improve insulin sensitivity and glucose metabolism.</p>
      
      <p><strong>Fenugreek:</strong> Traditional use and modern research support fenugreek's role in helping maintain healthy blood sugar levels.</p>
      
      <p><strong>Gymnema Sylvestre:</strong> Known as the "sugar destroyer," this herb has been traditionally used to reduce sugar cravings.</p>
      
      <h3>How to Use Herbal Support Safely</h3>
      <p>If you have diabetes, it's crucial to work with your healthcare team when incorporating herbal remedies. Monitor your blood sugar levels regularly and adjust medications only under medical supervision.</p>
      
      <h3>Lifestyle Integration</h3>
      <p>Herbal teas work best when combined with a healthy diet, regular exercise, stress management, and consistent medical care. They're part of a holistic approach to diabetes management.</p>
      
      <h3>Important Disclaimer</h3>
      <p>Always consult with your healthcare provider before using herbal remedies for diabetes management. These statements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease.</p>
    `,
    category: 'Diabetes',
    readTime: '8 min read',
    publishedAt: '2024-01-01',
    slug: 'diabetes-natural-herbal-support',
    author: 'Dr. Ibrahim Yusuf',
  },
  {
    id: 5,
    title: 'The Science Behind African Herbal Medicine',
    excerpt: 'Understanding the research and scientific evidence supporting traditional African herbal remedies.',
    content: `
      <h2>Bridging Ancient Wisdom and Modern Science</h2>
      <p>Modern science is increasingly validating traditional African herbal practices, revealing the sophisticated understanding of plant medicine that has been passed down through generations.</p>
      
      <h3>Phytochemistry and Active Compounds</h3>
      <p>African medicinal plants contain complex mixtures of bioactive compounds including alkaloids, flavonoids, saponins, and tannins. These work synergistically to provide therapeutic benefits.</p>
      
      <h3>Research Methodology</h3>
      <p>Scientists use various methods to study African herbs:</p>
      <ul>
        <li>Phytochemical analysis to identify active compounds</li>
        <li>In vitro studies to understand mechanisms of action</li>
        <li>Animal studies to assess safety and efficacy</li>
        <li>Clinical trials to validate traditional uses</li>
      </ul>
      
      <h3>Notable Research Findings</h3>
      <p><strong>Antioxidant Activity:</strong> Many African herbs show powerful antioxidant properties, helping protect cells from oxidative stress.</p>
      
      <p><strong>Anti-inflammatory Effects:</strong> Research has confirmed the anti-inflammatory properties of numerous traditional African medicinal plants.</p>
      
      <p><strong>Antimicrobial Properties:</strong> Studies show that many African herbs have natural antimicrobial effects against various pathogens.</p>
      
      <h3>Standardization Challenges</h3>
      <p>One challenge in herbal medicine research is standardization. Factors like growing conditions, harvest time, and processing methods can affect the concentration of active compounds.</p>
      
      <h3>The Future of African Herbal Medicine</h3>
      <p>As research continues, we're likely to see more African herbs validated by science and potentially developed into pharmaceutical medicines, while traditional preparations continue to provide natural wellness support.</p>
      
      <h3>Quality Assurance</h3>
      <p>At Afro Herbal Remedy, we work with suppliers who follow good manufacturing practices and provide certificates of analysis to ensure the quality and safety of our herbal blends.</p>
    `,
    category: 'Science',
    readTime: '10 min read',
    publishedAt: '2023-12-28',
    slug: 'science-african-herbal-medicine',
    author: 'Dr. Aisha Abdullahi',
  },
  {
    id: 6,
    title: 'Brewing the Perfect Herbal Tea: A Complete Guide',
    excerpt: 'Master the art of brewing herbal teas to maximize their therapeutic benefits and flavor.',
    content: `
      <h2>The Art and Science of Tea Brewing</h2>
      <p>The way you brew your herbal tea can significantly impact its effectiveness and taste. Follow these expert tips to get the most from your Afro Herbal Remedy teas.</p>
      
      <h3>Water Quality Matters</h3>
      <p>Start with fresh, filtered water when possible. The quality of your water directly affects the taste and clarity of your tea. Avoid using distilled water as it can make tea taste flat.</p>
      
      <h3>Temperature Guidelines</h3>
      <p>Unlike green or black teas, herbal teas can typically handle boiling water (212°F/100°C). This higher temperature helps extract the beneficial compounds from dried herbs and roots.</p>
      
      <h3>Steeping Times</h3>
      <p><strong>Afro B-Tonic:</strong> 5-7 minutes for optimal energy-boosting compounds</p>
      <p><strong>Afro Immune Support:</strong> 7-10 minutes to extract immune-supporting phytochemicals</p>
      <p><strong>Afro D-Care:</strong> 8-10 minutes for maximum therapeutic benefit</p>
      
      <h3>Proper Steeping Technique</h3>
      <ol>
        <li>Heat water to a full boil</li>
        <li>Place tea bag in your cup</li>
        <li>Pour water over the tea bag</li>
        <li>Cover the cup to prevent essential oils from escaping</li>
        <li>Steep for the recommended time</li>
        <li>Remove tea bag and enjoy</li>
      </ol>
      
      <h3>Enhancing Your Tea</h3>
      <p><strong>Natural Sweeteners:</strong> Raw honey, stevia, or a small amount of maple syrup</p>
      <p><strong>Flavor Additions:</strong> Fresh lemon, ginger slices, or mint leaves</p>
      <p><strong>Milk Alternatives:</strong> Coconut milk or almond milk for creamier teas</p>
      
      <h3>Storage Tips</h3>
      <p>Store your herbal teas in a cool, dry place away from light and strong odors. Properly stored, our tea bags maintain their potency for up to two years.</p>
      
      <h3>Best Times to Drink</h3>
      <p><strong>Morning:</strong> Afro B-Tonic for natural energy</p>
      <p><strong>With Meals:</strong> Afro D-Care to support healthy blood sugar</p>
      <p><strong>Evening:</strong> Afro Immune Support for overnight recovery</p>
    `,
    category: 'Guide',
    readTime: '4 min read',
    publishedAt: '2023-12-25',
    slug: 'brewing-perfect-herbal-tea-guide',
    author: 'Tea Master Collins Osei',
  },
];

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The article you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link href="/articles">Back to Articles</Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="gradient-subtle py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/articles" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Articles
              </Link>
            </Button>
            
            <Badge variant="outline" className="mb-4">
              {article.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(article.publishedAt)}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {article.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div 
                className="leading-relaxed text-foreground"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
            
            {/* Related Articles CTA */}
            <div className="mt-16 p-8 bg-muted rounded-lg text-center">
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Interested in Our Herbal Teas?
              </h3>
              <p className="text-muted-foreground mb-6">
                Discover our range of traditional African herbal remedies to support your wellness journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/shop">Shop Our Teas</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/consultation">Book Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;