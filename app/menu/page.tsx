import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Leaf, Flame, Wheat, CheckCircle, GlassWater, LucideDiameter } from 'lucide-react'; // Import icons for tags

// Typography
const display = Playfair_Display({ subsets: ['latin'], weight: ['700', '800', '900'] });
const sans = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

// ----------
// SEO (App Router)
// ----------
export const metadata: Metadata = {
  title: 'Our Menu — Tandoori Nook',
  description: 'Explore our full menu, from shawarma and burgers to loaded fries, sides, and drinks. See all our Halal-certified options.',
  openGraph: {
    title: 'Our Menu — Tandoori Nook',
    description: 'Browse our complete menu of delicious, Halal-certified street food.',
    images: [{ url: '/menu-page-og.jpg', width: 1200, height: 630, alt: 'Tandoori Nook Menu' }], // A generic OG image for the menu page
  },
};

// Tiny blur placeholder (keeps layout stable while images load)
const BLUR =
  'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

// ----------
// Tag Component
// ----------
function Tag({ text, tone, icon }: { text: string; tone: 'green' | 'orange' | 'blue' | 'rose'; icon: React.ReactNode }) {
  const tones: Record<string, string> = {
    green: 'bg-green-100 text-green-800 border-green-200',
    orange: 'bg-orange-100 text-orange-800 border-orange-200',
    blue: 'bg-blue-100 text-blue-800 border-blue-200',
    rose: 'bg-rose-100 text-rose-800 border-rose-200',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${tones[tone]}`}>
      {icon}
      {text}
    </span>
  );
}

// ----------
// Page Content
// ----------

// Expanded data structure with images and tags for the full menu page
const CATEGORIES = [
  {
    name: 'Main Items',
    items: [
      {
        name: 'Chicken Shawarma',
        href: '/menu/chicken-shawarma',
        from: 11,
        description: 'Fire-kissed, spit-roasted chicken wrapped with our signature garlic toum, tahini, pickles, and fresh herbs.',
        image: '/chicken-shawarma.webp',
        alt: 'Chicken Shawarma wrap',
        tags: [
          { text: 'Halal', tone: 'green' as const, icon: <CheckCircle className="w-3.5 h-3.5" /> },
          { text: 'Spicy Option', tone: 'orange' as const, icon: <Flame className="w-3.5 h-3.5" /> }
        ]
      },
      {
        name: 'Lamb Gyro',
        href: '/menu/lamb-gyro',
        from: 13,
        description: 'Tender lamb, tzatziki, fresh tomato, and onion.',
        image: '/lamb-gyro.webp',
        alt: 'Lamb Gyro wrap',
        tags: [
          { text: 'Halal', tone: 'green' as const, icon: <CheckCircle className="w-3.5 h-3.5" /> },
          { text: 'Spicy Option', tone: 'orange' as const, icon: <Flame className="w-3.5 h-3.5" /> }
        ]
      },
      {
        name: 'Beef Smashed Burger',
        href: '/menu/beef-smashed-burger',
        from: 12,
        description: 'Crispy-edged Halal beef, cheese, and house sauce.',
        image: '/beef-smashed-burger.webp',
        alt: 'Beef Smashed Burger',
        tags: [
          { text: 'Halal', tone: 'green' as const, icon: <CheckCircle className="w-3.5 h-3.5" /> }
        ]
      },
      {
        name: 'Chicken Burger',
        href: '/menu/chicken-burger',
        from: 12,
        description: 'Crispy or grilled chicken, spicy mayo, pickles.',
        image: '/chicken-burger.webp',
        alt: 'Crispy chicken burger',
        tags: [
          { text: 'Halal', tone: 'green' as const, icon: <CheckCircle className="w-3.5 h-3.5" /> },
          { text: 'Spicy', tone: 'orange' as const, icon: <Flame className="w-3.5 h-3.5" /> }
        ]
      },
      {
        name: 'Loaded Fries',
        href: '/menu/loaded-fries',
        from: 14,
        description: 'Crinkle-cuts with tandoori queso and your choice of protein.',
        image: '/loaded-fries.webp',
        alt: 'Loaded fries with toppings',
        tags: [
          { text: 'Vegetarian', tone: 'green' as const, icon: <Leaf className="w-3.5 h-3.5" /> },
          { text: 'Halal Option', tone: 'green' as const, icon: <CheckCircle className="w-3.5 h-3.5" /> },
        ]
      },
      {
        name: 'Tandoori Nook Nachos',
        href: '/menu/tandoori-nachos',
        from: 11,
        description: 'Masala chips, tandoori queso, and fresh toppings.',
        image: '/tandoori-nook-nachos.webp',
        alt: 'Tandoori Nook Nachos',
        tags: [
          { text: 'Vegetarian', tone: 'green' as const, icon: <Leaf className="w-3.5 h-3.5" /> },
          { text: 'Halal Option', tone: 'green' as const, icon: <CheckCircle className="w-3.5 h-3.5" /> },
        ]
      },
    ]
  },
  {
    name: 'Sides',
    items: [
      {
        name: 'Garlic Fries',
        href: '/menu/garlic-fries',
        from: 7,
        description: 'Crispy fries tossed in fresh garlic and parsley.',
        image: '/garlic-fries.webp',
        alt: 'Garlic Fries with parsley',
        tags: [
          { text: 'Vegetarian', tone: 'green' as const, icon: <Leaf className="w-3.5 h-3.5" /> }
        ]
      },
      {
        name: 'Onion Rings',
        href: '/menu/onion-rings',
        from: 6,
        description: 'Thick-cut, sweet onions in a light, crispy batter.',
        image: '/onion-rings.webp',
        alt: 'Crispy onion rings',
        tags: [
          { text: 'Vegetarian', tone: 'green' as const, icon: <Leaf className="w-3.5 h-3.5" /> }
        ]
      },
      {
        name: 'Cheesy Sticks',
        href: '/menu/cheese-sticks',
        from: 8,
        description: 'Golden-fried mozzarella with a legendary cheese pull.',
        image: '/cheese-sticks.webp',
        alt: 'Cheesy mozzarella sticks',
        tags: [
          { text: 'Vegetarian', tone: 'green' as const, icon: <Leaf className="w-3.5 h-3.5" /> }
        ]
      },
      {
        name: 'Mac n Cheese',
        href: '/menu/mac-and-cheese',
        from: 8,
        description: 'Ultra-creamy three-cheese sauce with a baked top.',
        image: '/mac-n-cheese.webp',
        alt: 'Mac n Cheese with baked top',
        tags: [
          { text: 'Vegetarian', tone: 'green' as const, icon: <Leaf className="w-3.5 h-3.5" /> }
        ]
      },
      {
        name: 'Crispy Wings',
        href: '/menu/crispy-wings',
        from: 14,
        description: 'Double-fried wings with your choice of 10+ sauces.',
        image: '/wings-front.webp',
        alt: 'Crispy chicken wings',
        tags: [
          { text: 'Halal', tone: 'green' as const, icon: <CheckCircle className="w-3.5 h-3.5" /> },
          { text: 'Spicy Option', tone: 'orange' as const, icon: <Flame className="w-3.5 h-3.5" /> }
        ]
      },
      {
        name: 'Turkish Salad',
        href: '/menu/turkish-salad',
        from: 9,
        description: 'Crisp cucumbers, tomatoes, peppers, and sumac onions.',
        image: '/turkish-salad.webp',
        alt: 'Fresh Turkish Salad',
        tags: [
          { text: 'Vegan', tone: 'green' as const, icon: <Leaf className="w-3.5 h-3.5" /> },
          { text: 'Gluten-Free', tone: 'blue' as const, icon: <Wheat className="w-3.5 h-3.5" /> }
        ]
      },
    ]
  },
  {
    name: 'Drinks & Dessert',
    items: [
      {
        name: 'Pepsi',
        href: '/menu/drinks',
        from: 3,
        description: 'Classic cola refreshment.',
        image: '/drink-pepsi.webp', // Image path remains but will not be rendered
        alt: 'Pepsi',
        tags: [
          { text: 'Drink', tone: 'green' as const, icon: <GlassWater className="w-3.5 h-3.5" /> }
        ]
      },
      {
        name: 'Diet Pepsi',
        href: '/menu/drinks',
        from: 3,
        description: 'Zero sugar, same great taste.',
        image: '/drink-diet-pepsi.webp', // Image path remains but will not be rendered
        alt: 'Diet Pepsi',
        tags: [
          { text: 'Drink', tone: 'green' as const, icon: <GlassWater className="w-3.5 h-3.5" /> },
          { text: 'Diet', tone: 'blue' as const, icon: <LucideDiameter className="w-3.5 h-3.5" /> }
        ]
      },
      {
        name: 'Coke',
        href: '/menu/drinks',
        from: 3,
        description: 'The original cola.',
        image: '/drink-coke.webp', // Image path remains but will not be rendered
        alt: 'Coke',
        tags: [
          { text: 'Drink', tone: 'green' as const, icon: <GlassWater className="w-3.5 h-3.5" /> }
        ]
      },
      {
        name: 'Diet Coke',
        href: '/menu/drinks',
        from: 3,
        description: 'Crisp, zero-calorie cola.',
        image: '/drink-diet-coke.webp', // Image path remains but will not be rendered
        alt: 'Diet Coke',
        tags: [
          { text: 'Drink', tone: 'green' as const, icon: <GlassWater className="w-3.5 h-3.5" /> },
          { text: 'Diet', tone: 'blue' as const, icon: <LucideDiameter className="w-3.5 h-3.5" /> }
        ]
      },
      {
        name: 'Sprite',
        href: '/menu/drinks',
        from: 3,
        description: 'Lemon-lime soda.',
        image: '/drink-sprite.webp', // Image path remains but will not be rendered
        alt: 'Sprite',
        tags: [
          { text: 'Drink', tone: 'green' as const, icon: <GlassWater className="w-3.5 h-3.5" /> }
        ]
      },
      {
        name: 'Sunkist Orange',
        href: '/menu/drinks',
        from: 3,
        description: 'Bright, bubbly orange soda.',
        image: '/drink-sunkist.webp', // Image path remains but will not be rendered
        alt: 'Sunkist Orange',
        tags: [
          { text: 'Drink', tone: 'green' as const, icon: <GlassWater className="w-3.5 h-3.5" /> }
        ]
      },
      {
        name: 'Brisk Iced Tea',
        href: '/menu/drinks',
        from: 3,
        description: 'Refreshing lemon iced tea.',
        image: '/drink-brisk.webp', // Image path remains but will not be rendered
        alt: 'Brisk Iced Tea',
        tags: [
          { text: 'Drink', tone: 'green' as const, icon: <GlassWater className="w-3.5 h-3.5" /> }
        ]
      },
    ]
  }
];

export default function MenuPage() {
  return (
    <main className={`${sans.className} bg-[#f5f0e4] min-h-screen`}>
      <div className="container mx-auto px-6 py-8 md:py-16">
        
        {/* Header */}
        <header className="mb-12 md:mb-16 text-center">
          <h1 className={`${display.className} text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900`}>
            Our Menu
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mt-4 mx-auto">
            Explore our full selection of Halal-certified street food. Everything is made fresh to order and engineered for maximum flavor.
          </p>
        </header>

        {/* Categories Loop */}
        {CATEGORIES.map((category) => (
          <section key={category.name} className="mb-16">
            
            {/* Category Title */}
            <h2 className={`${display.className} text-4xl font-bold text-gray-900 mb-8 pb-3 border-b-4 border-amber-400 inline-block`}>
              {category.name}
            </h2>
            
            {/* Item Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
              category.name === 'Drinks & Dessert' ? 'lg:grid-cols-4' : 'lg:grid-cols-3' // Use a 4-col layout for drinks
            }`}>
              {category.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group block bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all hover:shadow-2xl hover:-translate-y-1.5"
                >
                  {/* CONDITIONAL IMAGE RENDER: Do not render for 'Drinks & Dessert' */}
                  {category.name !== 'Drinks & Dessert' && (
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        placeholder="blur"
                        blurDataURL={BLUR}
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                      <p className="text-base font-semibold text-amber-700">from ${item.from}</p>
                    </div>
                    {/* New Tags Section */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tags.map(tag => (
                        <Tag key={tag.text} text={tag.text} tone={tag.tone} icon={tag.icon} />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mt-3">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

      </div>
    </main>
  );
}