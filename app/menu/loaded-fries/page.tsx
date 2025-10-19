import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Wheat, Milk, Leaf, Info, Flame, Star, Clock, Shield, Package, Sparkles, CheckCircle, ExternalLink,
  Zap, // Using Zap for "Customize" or "Protein"
} from 'lucide-react';
import { Playfair_Display, Inter } from 'next/font/google';

// Typography
const display = Playfair_Display({ subsets: ['latin'], weight: ['700', '800', '900'] });
const sans = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

// Replace with your actual storefront links
const UBER_EATS_URL = 'https://www.ubereats.com/your-storefront';
const DOORDASH_URL = 'https://www.doordash.com/store/your-storefront';

// ----------
// SEO (App Router)
// ----------
export const metadata: Metadata = {
  title: 'Loaded Fries Preview — Tandoori Nook',
  description:
    'Colorful, detailed preview of our Loaded Fries for delivery apps. See nutrition, allergens, sizes, protein options, heat levels, sourcing, and how we build it.',
  openGraph: {
    title: 'Loaded Fries Preview — Tandoori Nook',
    description:
      'Preview our Loaded Fries, including nutrition, allergens, sizes, protein add-ons, and more. Order on Uber Eats or DoorDash.',
    type: 'website',
    images: [{ url: '/loaded-fries-hero-square-og.jpg', width: 1200, height: 1200, alt: 'Loaded Fries square hero' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loaded Fries Preview — Tandoori Nook',
    description:
      'Preview our Loaded Fries, including nutrition, allergens, sizes, protein add-ons, and more. Order on Uber Eats or DoorDash.',
    images: ['/loaded-fries-hero-square-og.jpg'],
  },
};

// Tiny blur placeholder
const BLUR =
  'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

// ----------
// Compact, mobile-first IconBadge
// ----------
function IconBadge({
  children,
  tone = 'slate',
  size = 'md',
  className = '',
}: {
  children: React.ReactNode;
  tone?: 'slate' | 'amber' | 'green' | 'blue' | 'rose' | 'emerald' | 'violet';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const tokens: Record<string, { ring: string; grad: string; vars: string }> = {
    slate:   { ring: 'ring-slate-200',   grad: 'from-white to-slate-50',   vars: '[--accent:theme(colors.slate.700)] [--glow:rgba(15,23,42,.15)]' },
    amber:   { ring: 'ring-amber-200',   grad: 'from-amber-50 to-amber-100', vars: '[--accent:theme(colors.amber.700)] [--glow:rgba(245,158,11,.18)]' },
    green:   { ring: 'ring-emerald-200', grad: 'from-emerald-50 to-green-100', vars: '[--accent:theme(colors.emerald.700)] [--glow:rgba(16,185,129,.18)]' },
    blue:    { ring: 'ring-blue-200',    grad: 'from-sky-50 to-blue-100',  vars: '[--accent:theme(colors.sky.700)] [--glow:rgba(2,132,199,.18)]' },
    rose:    { ring: 'ring-rose-200',    grad: 'from-rose-50 to-rose-100', vars: '[--accent:theme(colors.rose.700)] [--glow:rgba(244,63,94,.18)]' },
    emerald: { ring: 'ring-emerald-200', grad: 'from-emerald-50 to-emerald-100', vars: '[--accent:theme(colors.emerald.700)] [--glow:rgba(16,185,129,.18)]' },
    violet:  { ring: 'ring-violet-200',  grad: 'from-violet-50 to-indigo-100', vars: '[--accent:theme(colors.violet.700)] [--glow:rgba(139,92,246,.18)]' },
  };
  const sizes: Record<string, string> = {
    sm: 'w-7 h-7 md:w-8 md:h-8 text-[16px] md:text-[18px]',
    md: 'w-8 h-8 md:w-10 md:h-10 text-[18px] md:text-[20px]',
    lg: 'w-10 h-10 md:w-12 md:h-12 text-[20px] md:text-[24px]',
  };
  const t = tokens[tone] ?? tokens.slate;
  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl md:rounded-2xl ${sizes[size]} ${t.vars}
        bg-white ring-1 ${t.ring} shadow-sm
        md:bg-gradient-to-b md:${t.grad} md:shadow-[inset_0_1px_0_rgba(255,255,255,.6),0_6px_24px_var(--glow)]
        ${className}`}
    >
      <span className="[&>*]:stroke-[1.6] text-[var(--accent)]">{children}</span>
    </span>
  );
}

// ----------
// Content data (from original Loaded Fries component)
// ----------
const SIZES = [
  {
    key: 'regular',
    name: 'Regular',
    price: 14,
    kcal: 780,
    protein: 18,
    carbs: 89,
    fat: 42,
    serves: 'Feeds 1',
    blurb: 'Our classic stack. Perfect for a satisfying meal.',
    img: '/loaded-fries-regular.webp', // Image path retained but not used in this section
    alt: 'Regular size loaded fries with cheese and toppings',
  },
  {
    key: 'large',
    name: 'Large',
    price: 32,
    kcal: 1050,
    protein: 24,
    carbs: 118,
    fat: 56,
    serves: 'Hungry 1',
    blurb: 'More to share... or not. A serious portion.',
    img: '/loaded-fries-large.webp', // Image path retained but not used in this section
    alt: 'Large size loaded fries in a bigger box',
  },
  {
    key: 'party',
    name: 'Party Box',
    price: 65,
    kcal: 2100,
    protein: 48,
    carbs: 236,
    fat: 112,
    serves: 'Serves 3–4',
    blurb: 'The ultimate centerpiece for any gathering. Feeds a crew.',
    img: '/loaded-fries-party-box.webp', // Image path retained but not used in this section
    alt: 'Party Box of loaded fries for sharing',
  },
] as const;

const PROTEINS = [
  {
    id: 'chicken',
    name: 'Chicken Tikka',
    note: '+$8 • Halal',
    bestFor: 'Smoky, spiced, classic',
    allergenTip: 'Contains dairy (marinade)',
    hotTip: 'Pairs great with medium spice',
    img: '/protein-chicken-tikka.webp', // Image path retained but not used in this section
    alt: 'Grilled chicken tikka pieces',
  },
  {
    id: 'paneer',
    name: 'Paneer',
    note: '+$7 • Vegetarian',
    bestFor: 'Hearty, savory, vegetarian',
    allergenTip: 'Contains dairy',
    hotTip: 'Amazing with mint chutney',
    img: '/protein-paneer.webp', // Image path retained but not used in this section
    alt: 'Seared paneer cubes',
  },
  {
    id: 'beef',
    name: 'Beef Gyro',
    note: '+$9 • Halal',
    bestFor: 'Rich, savory, robust',
    allergenTip: 'Contains soy',
    hotTip: 'Try it with extra garlic sauce',
    img: '/protein-beef-gyro.webp', // Image path retained but not used in this section
    alt: 'Shaved beef gyro meat',
  },
  {
    id: 'falafel',
    name: 'Falafel',
    note: '+$6 • Vegetarian',
    bestFor: 'Crispy, herby, classic',
    allergenTip: 'Vegan-friendly',
    hotTip: 'Ask for tahini drizzle',
    img: '/protein-falafel.webp', // Image path retained but not used in this section
    alt: 'Crispy falafel balls',
  },
] as const;

const HEAT_LEVELS = [
  { id: 'mild', label: 'Mild', flames: 1, notes: 'Just a whisper of heat', shu: '0–500 SHU' },
  { id: 'medium', label: 'Medium', flames: 2, notes: 'Our balanced house blend', shu: '1,000–2,500 SHU' },
  { id: 'hot', label: 'Hot', flames: 3, notes: 'A solid, pleasant kick', shu: '5,000–10,000 SHU' },
  { id: 'send-help', label: 'Send Help', flames: 4, notes: 'Fiery, use with caution', shu: '30,000+ SHU' },
] as const;

const CHAPTERS = [
  {
    title: 'The Foundation',
    subtitle: 'Hand-cut Idaho russets',
    description: 'Twice-fried for an exterior that shatters and an interior that melts. The crinkle-cut creates valleys for maximum topping grip.',
    why: 'Double frying removes moisture between rounds, creating microscopic air pockets that crisp up beautifully.',
    img: '/loaded-fries-cut.webp',
    alt: 'Crispy golden crinkle-cut fries',
  },
  {
    title: 'The Melt',
    subtitle: 'Three-cheese blend',
    description: 'Sharp cheddar for bite, Monterey Jack for stretch, and a secret third cheese for silky emulsification. It blankets, never clumps.',
    why: 'The blend melts at different temperatures, creating a velvety texture that stays smooth as it cools.',
    img: '/loaded-fries-melt.webp',
    alt: 'Melted cheese sauce being poured over fries',
  },
  {
    title: 'The Heat',
    subtitle: 'Tandoori spice dust',
    description: 'Fresh-ground cumin, coriander, and Kashmiri chili. Aromatic not nuclear—warmth that builds, never burns.',
    why: 'Blooming spices in oil releases essential oils; our blend is calibrated for flavor depth over pure heat.',
    img: '/loaded-fries-spice.webp',
    alt: 'Spices being sprinkled on loaded fries',
  },
  {
    title: 'The Crown',
    subtitle: 'Pickled onions, jalapeños, cilantro',
    description: 'Quick-pickled for snap and acid. The brightness cuts through richness, jalapeños add gentle heat, cilantro brings freshness.',
    why: 'Acid resets your palate between bites, preventing flavor fatigue from the cheese and fries.',
    img: '/loaded-fries-final.webp',
    alt: 'Loaded fries being topped with pickled onions and cilantro',
  },
] as const;

const REVIEWS = [
  { name: 'Sarah L.', rating: 5, text: 'That cheese pull is REAL. Best loaded fries in town!' },
  { name: 'Ahmad K.', rating: 5, text: 'Halal, delicious, and arrives hot. What more could you want?' },
  { name: 'Priya M.', rating: 5, text: 'The spice level is perfect. Not too mild, not too crazy.' },
] as const;

const OTHER_ITEMS = [
  {
    name: 'Chicken Shawarma',
    href: '/menu/chicken-shawarma',
    img: '/chicken-shawarma.webp',
    alt: 'Chicken shawarma wrap',
    from: 11,
  },
  {
    name: 'Lamb Gyro',
    href: '/menu/lamb-gyro',
    img: '/lamb-gyro.webp',
    alt: 'Sliced lamb gyro wrap',
    from: 13,
  },
  {
    name: 'Beef Smashed Burger',
    href: '/menu/beef-smashed-burger',
    img: '/beef-smashed-burger.webp',
    alt: 'Beef smashed burger with toppings',
    from: 12,
  },
] as const;

// ----------
// Page
// ----------
export default function LoadedFriesPreviewPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MenuItem',
    name: 'Loaded Fries',
    description:
      'Crinkle-cut fries with three-cheese blend, tandoori spice, pickled onions, jalapeños, and cilantro. Multiple sizes and protein add-ons available.',
    image: '/loaded-fries.webp',
    offers: SIZES.map((s) => ({
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: s.price,
      itemOffered: { '@type': 'MenuItem', name: `${s.name} Loaded Fries` },
      availability: 'https://schema.org/InStock',
    })),
    nutrition: {
        '@type': 'NutritionInformation',
        calories: `${SIZES[0].kcal} kcal`, // Base size
        proteinContent: `${SIZES[0].protein} g`,
        carbohydrateContent: `${SIZES[0].carbs} g`,
        fatContent: `${SIZES[0].fat} g`
    },
    suitableForDiet: 'https://schema.org/HalalDiet'
  };

  return (
    <main className={`${sans.className} bg-[#f5f0e4] min-h-screen`}>
      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container mx-auto px-6 py-8 md:py-12">

        {/* ---------------------------------- */}
        {/* HERO (Square image, quick facts) */}
        {/* ---------------------------------- */}
        <header className="mb-10 md:mb-12">
          <div className="inline-flex items-center gap-3">
            <IconBadge tone="green" size="md">
              <CheckCircle className="w-5 h-5" aria-hidden />
            </IconBadge>
            <span className="text-green-800 font-semibold text-sm">100% Halal Certified</span>
          </div>

          <h1 className={`${display.className} text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mt-4`}>
            Loaded <span className="text-amber-600">Fries</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mt-4">
            The Edifice of Flavor. This preview shows exactly what you’ll get when you order on your favorite delivery app.
          </p>

          <figure className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 items-center">
            {/* Square hero */}
            <div className="relative aspect-[1/1] rounded-3xl overflow-hidden shadow-2xl border border-amber-200">
              <Image
                src="/loaded-fries.webp"
                alt="Loaded Fries square hero with cheese, sauce, and toppings"
                fill
                priority
                sizes="(min-width: 1024px) 600px, 100vw"
                placeholder="blur"
                blurDataURL={BLUR}
                className="object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-2 bg-amber-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                  <Clock className="w-4 h-4" /> Ready in ~8 min
                </span>
              </div>
            </div>

            {/* At a glance (read-only chips) */}
            <figcaption className="lg:pl-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-white rounded-2xl p-4 ring-1 ring-amber-200 shadow-md">
                  <div className="flex items-center gap-2">
                    <IconBadge tone="amber" size="sm"><Info className="w-4 h-4" /></IconBadge>
                    <p className="font-semibold text-gray-900">Protein</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">18–48g depending on size</p>
                </div>
                <div className="bg-white rounded-2xl p-4 ring-1 ring-blue-200 shadow-md">
                  <div className="flex items-center gap-2">
                    <IconBadge tone="blue" size="sm"><Shield className="w-4 h-4" /></IconBadge>
                    <p className="font-semibold text-gray-900">A+ Hygiene</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Nut-Free Kitchen</p>
                </div>
                <div className="bg-white rounded-2xl p-4 ring-1 ring-rose-200 shadow-md">
                  <div className="flex items-center gap-2">
                    <IconBadge tone="rose" size="sm"><Flame className="w-4 h-4" /></IconBadge>
                    <p className="font-semibold text-gray-900">Heat Levels</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Mild → Send Help</p>
                </div>
                <div className="bg-white rounded-2xl p-4 ring-1 ring-violet-200 shadow-md">
                  <div className="flex items-center gap-2">
                    <IconBadge tone="violet" size="sm"><Zap className="w-4 h-4" /></IconBadge>
                    <p className="font-semibold text-gray-900">Proteins</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Chicken, Paneer, Beef, Falafel</p>
                </div>
                <div className="bg-white rounded-2xl p-4 ring-1 ring-emerald-200 shadow-md">
                  <div className="flex items-center gap-2">
                    <IconBadge tone="emerald" size="sm"><Leaf className="w-4 h-4" /></IconBadge>
                    <p className="font-semibold text-gray-900">Vegetarian</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Base is veg; add Paneer/Falafel</p>
                </div>
                <div className="bg-white rounded-2xl p-4 ring-1 ring-slate-200 shadow-md">
                  <div className="flex items-center gap-2">
                    <IconBadge tone="slate" size="sm"><Star className="w-4 h-4" /></IconBadge>
                    <p className="font-semibold text-gray-900">Rating</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">4.9/5 (847 reviews)</p>
                </div>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a
                  href={UBER_EATS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-black text-white font-bold shadow hover:scale-[1.02] active:scale-[.98] transition"
                >
                  Order on Uber Eats
                  <ExternalLink className="w-4 h-4" aria-hidden />
                </a>
                <a
                  href={DOORDASH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#EB1700] text-white font-bold shadow hover:scale-[1.02] active:scale-[.98] transition"
                >
                  Order on DoorDash
                  <ExternalLink className="w-4 h-4" aria-hidden />
                </a>
              </div>

              <p className="mt-3 text-xs text-gray-500">
                Featured: Regular size with Chicken Tikka • Photos for illustration — actual packaging may vary.
              </p>
            </figcaption>
          </figure>
        </header>

        {/* ---------------------------------- */}
        {/* PREVIEW NOTICE (no buttons) */}
        {/* ---------------------------------- */}
        <section aria-label="Preview notice" className={`mb-8 ${sans.className}`}>
          <div className="rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 p-5 md:p-7 shadow-md">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white ring-1 ring-amber-200 shadow-sm">
                <Info className="w-5 h-5 text-amber-700" aria-hidden />
              </span>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-600/10 text-amber-800 text-[11px] font-semibold tracking-wide ring-1 ring-amber-200">
                  PREVIEW
                  <span className="inline-block h-1 w-1 rounded-full bg-amber-600" />
                  READ-ONLY
                </span>

                <h1 className={`${display.className} text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 leading-snug`}>
                  Explore the dish here — then place your order on
                  {' '}
                  <a
                    href={UBER_EATS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-amber-500 underline-offset-4 hover:decoration-amber-700 transition-colors"
                  >
                    Uber Eats
                  </a>
                  {' '}or{' '}
                  <a
                    href={DOORDASH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-amber-500 underline-offset-4 hover:decoration-amber-700 transition-colors"
                  >
                    DoorDash
                  </a>
                  .
                </h1>

                <p className="text-slate-700 text-sm md:text-base">
                  This page is a visual guide to sizes, proteins, and heat levels so you can build your favorite stack before
                  checking out on a delivery app. No purchases are made on this page.
                </p>

              </div>
            </div>
          </div>
        </section>


        {/* ---------------------------------- */}
        {/* Sizes & Pricing (NO IMAGES) */}
        {/* ---------------------------------- */}
        <section aria-labelledby="sizes" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <IconBadge tone="amber" size="md"><Package className="w-5 h-5" aria-hidden /></IconBadge>
            <h2 id="sizes" className={`${display.className} text-3xl md:text-4xl font-bold text-gray-900`}>Sizes & Pricing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SIZES.map((s) => (
              <article key={s.key} className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-6">
                 {/* Image Removed */}
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">{s.name}</h3>
                  <p className="text-2xl font-extrabold text-amber-700">${s.price}</p>
                </div>
                <p className="mt-1 text-xs font-semibold text-emerald-700">{s.serves}</p>
                <p className="mt-2 text-gray-700">{s.blurb}</p>
                <dl className="mt-4 grid grid-cols-4 gap-2 text-center">
                  <div><dt className="text-xs text-gray-500">Calories</dt><dd className="text-lg font-bold text-gray-900">{s.kcal}</dd></div>
                  <div><dt className="text-xs text-gray-500">Protein</dt><dd className="text-lg font-bold text-gray-900">{s.protein}g</dd></div>
                  <div><dt className="text-xs text-gray-500">Carbs</dt><dd className="text-lg font-bold text-gray-900">{s.carbs}g</dd></div>
                  <div><dt className="text-xs text-gray-500">Fat</dt><dd className="text-lg font-bold text-gray-900">{s.fat}g</dd></div>
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-3 text-sm text-gray-600">Base prices shown before add-ons and platform fees on Uber Eats or DoorDash.</p>
        </section>

        {/* ---------------------------------- */}
        {/* Protein Options (NO IMAGES) */}
        {/* ---------------------------------- */}
        <section aria-labelledby="proteins" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <IconBadge tone="violet" size="md"><Zap className="w-5 h-5" aria-hidden /></IconBadge>
            <h2 id="proteins" className={`${display.className} text-3xl md:text-4xl font-bold text-gray-900`}>Protein Add-Ons</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PROTEINS.map((p) => (
              <article key={p.id} className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-6">
                {/* Image Removed */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  {p.note.includes('Vegetarian') ? (
                    <span className="inline-flex items-center gap-2 text-green-700 text-sm font-semibold">
                      <IconBadge tone="green" size="sm"><Leaf className="w-4 h-4" aria-hidden /></IconBadge>
                      Veg
                    </span>
                  ) : (
                     <span className="inline-flex items-center gap-2 text-green-700 text-sm font-semibold">
                      <IconBadge tone="green" size="sm"><CheckCircle className="w-4 h-4" aria-hidden /></IconBadge>
                      Halal
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-amber-700 font-semibold">{p.note}</p>
                <div className="mt-3 grid grid-cols-1 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <IconBadge tone="slate" size="sm"><Info className="w-3.5 h-3.5" aria-hidden /></IconBadge>
                    <span className="text-slate-800"><span className="font-semibold">Profile:</span> {p.bestFor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconBadge tone="rose" size="sm"><Shield className="w-3.5 h-3.5" aria-hidden /></IconBadge>
                    <span className="text-slate-800"><span className="font-semibold">Allergen:</span> {p.allergenTip}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconBadge tone="amber" size="sm"><Sparkles className="w-3.5 h-3.5" aria-hidden /></IconBadge>
                    <span className="text-slate-800"><span className="font-semibold">Pro tip:</span> {p.hotTip}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------------------------- */}
        {/* Heat Level (read-only, no images) */}
        {/* ---------------------------------- */}
        <section aria-labelledby="heat" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <IconBadge tone="rose" size="md"><Flame className="w-5 h-5" aria-hidden /></IconBadge>
            <h2 id="heat" className={`${display.className} text-3xl md:text-4xl font-bold text-gray-900`}>Spice Level</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {HEAT_LEVELS.map((h) => (
              <article 
                key={h.id} 
                className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-5 md:p-6"
              >
                <div className="flex" aria-hidden>
                  {Array.from({ length: h.flames }).map((_, i) => (
                    <IconBadge key={i} tone="rose" size="md" className="-mr-2 last:mr-0">
                      <Flame className="w-5 h-5" />
                    </IconBadge>
                  ))}
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-900">{h.label}</h3>
                  <p className="mt-2 text-gray-700">{h.notes}</p>
                  <p className="text-sm text-gray-500 mt-1">Approx. {h.shu}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------------------------- */}
        {/* How We Build It ("The Build") */}
        {/* ---------------------------------- */}
        <section aria-labelledby="build" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <IconBadge tone="amber" size="md"><Sparkles className="w-5 h-5" aria-hidden /></IconBadge>
            <h2 id="build" className={`${display.className} text-3xl md:text-4xl font-bold text-gray-900`}>The Build</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {CHAPTERS.map((c, i) => (
              <article key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={c.img}
                    alt={c.alt}
                    fill
                    sizes="(min-width:1024px) 50vw, 100vw"
                    placeholder="blur"
                    blurDataURL={BLUR}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-bold mb-3">
                    Chapter {i + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">{c.title}</h3>
                  <p className="text-gray-700 italic">{c.subtitle}</p>
                  <p className="text-gray-700 mt-3">{c.description}</p>
                  <div className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-600 mt-4">
                    <p className="text-sm font-semibold text-gray-900 mb-1">💡 Why it matters</p>
                    <p className="text-gray-700">{c.why}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------------------------- */}
        {/* Social Proof */}
        {/* ---------------------------------- */}
        <section aria-labelledby="reviews" className="bg-white rounded-3xl shadow-xl p-8 mb-12 border-2 border-gray-200">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <IconBadge tone="amber" size="md"><Star className="w-5 h-5" aria-hidden /></IconBadge>
              <h2 id="reviews" className={`${display.className} text-3xl font-bold text-gray-900`}>What People Say</h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconBadge key={i} tone="amber" size="sm" className="-mr-1 last:mr-0">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  </IconBadge>
                ))}
              </div>
              <span className="text-lg font-bold text-gray-700">4.9/5</span>
              <span className="text-gray-500">(847 reviews)</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r, idx) => (
              <article key={idx} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{r.name}</div>
                    <div className="flex" aria-hidden>
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">“{r.text}”</p>
              </article>
            ))}
          </div>
        </section>

         {/* 8. SOURCING & QUALITY (from original) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-200">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4"><CheckCircle className="w-6 h-6 text-green-600" /></div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Quality Ingredients</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Idaho russets sourced weekly. Spices ground fresh daily. Zero artificial colors or flavors.
            </p>
            <a href="#" className="mt-4 text-sm text-green-700 font-semibold flex items-center gap-1">
              View Halal Certificate <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-200">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"><Shield className="w-6 h-6 text-blue-600" /></div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Safety First</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A+ hygiene rating. Nut-free kitchen. Oil filtered after every 4-hour shift.
            </p>
            <a href="#" className="mt-4 text-sm text-blue-700 font-semibold flex items-center gap-1">
              See Our Kitchen <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-emerald-200">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4"><Leaf className="w-6 h-6 text-emerald-600" /></div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Sustainable</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              100% recyclable packaging. Composting program for veggie scraps. Local suppliers first.
            </p>
            <a href="#" className="mt-4 text-sm text-emerald-700 font-semibold flex items-center gap-1">
              Our Impact <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* 9. DELIVERY & HONESTY (from original) */}
        <section className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mb-8 border-2 border-amber-200">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3"><Package className="w-8 h-8 text-amber-600" /> The Delivery Truth</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Travel Test Results</h3>
              <p className="text-slate-700 mb-4">
                We tested our packaging for 20 minutes in a delivery bag. Here&apos;s what happens:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Fries stay 85% crispy thanks to vented lid design</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Cheese stays melty (not congealed) with foil lining</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Sauce container sealed separately to prevent sogginess</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-200">
              <h3 className="font-semibold text-slate-900 mb-4">Reheat Like a Pro</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3"><div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div><div><div className="font-semibold text-slate-900">Air Fryer Method</div><div className="text-sm text-slate-600">4 mins at 180°C = back to crispy heaven</div></div></div>
                <div className="flex items-start gap-3"><div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div><div><div className="font-semibold text-slate-900">Oven Method</div><div className="text-sm text-slate-600">8 mins at 200°C on a wire rack</div></div></div>
                <div className="flex items-start gap-3"><div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div><div><div className="font-semibold text-slate-900">Pro Tip</div><div className="text-sm text-slate-600">Never microwave! Steam = enemy of crunch</div></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------- */}
        {/* Nutrition & Allergens (MOVED HERE) */}
        {/* ---------------------------------- */}
        <section aria-labelledby="nutrition" className="mb-12 md:bg-white md:rounded-3xl md:shadow-xl md:p-8 md:border-2 md:border-amber-200">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <IconBadge tone="slate" size="md"><Info className="w-5 h-5" aria-hidden /></IconBadge>
            <h2 id="nutrition" className={`${display.className} text-3xl md:text-4xl font-bold text-gray-900`}>Nutrition & Allergens</h2>
          </div>

          {/* Mobile: stacked cards (no box), Desktop: table */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Macros */}
            <article className="p-0 md:p-6 border-0 md:border-2 md:border-gray-200 rounded-none md:rounded-2xl">
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <IconBadge tone="amber" size="sm"><Star className="w-4 h-4" aria-hidden /></IconBadge>
                <h3 className="text-xl font-bold text-gray-900">Base Macros (by size)</h3>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden space-y-3">
                {SIZES.map((s) => (
                  <div key={s.key} className="rounded-xl bg-white p-4 ring-1 ring-amber-100 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-slate-900">{s.name}</div>
                      <div className="text-amber-700 font-bold">${s.price}</div>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">{s.serves} • {s.blurb}</p>
                    <div className="mt-3 grid grid-cols-4 gap-2 text-center">
                      <div><div className="text-[11px] text-slate-500">kcal</div><div className="font-bold">{s.kcal}</div></div>
                      <div><div className="text-[11px] text-slate-500">protein</div><div className="font-bold">{s.protein}g</div></div>
                      <div><div className="text-[11px] text-slate-500">carbs</div><div className="font-bold">{s.carbs}g</div></div>
                      <div><div className="text-[11px] text-slate-500">fat</div><div className="font-bold">{s.fat}g</div></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop table */}
              <div className="hidden md:block overflow-x-auto rounded-xl">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="text-gray-500">
                      <th className="py-2 pr-3">Size</th>
                      <th className="py-2 pr-3">Serves</th>
                      <th className="py-2 pr-3">Calories</th>
                      <th className="py-2 pr-3">Protein</th>
                      <th className="py-2 pr-3">Carbs</th>
                      <th className="py-2 pr-0">Fat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SIZES.map((s, i) => (
                      <tr key={s.key} className={i % 2 ? 'bg-gray-50' : ''}>
                        <td className="py-2 pr-3 font-semibold">{s.name}</td>
                        <td className="py-2 pr-3">{s.serves}</td>
                        <td className="py-2 pr-3">{s.kcal}</td>
                        <td className="py-2 pr-3">{s.protein}g</td>
                        <td className="py-2 pr-3">{s.carbs}g</td>
                        <td className="py-2">{s.fat}g</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-3 text-xs text-gray-500">Values are for base fries, cheese, and toppings. Protein add-ons will increase values.</p>
            </article>

            {/* Allergens */}
            <article className="p-0 md:p-6 border-0 md:border-2 md:border-gray-200 rounded-none md:rounded-2xl">
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <IconBadge tone="rose" size="sm"><Shield className="w-4 h-4" aria-hidden /></IconBadge>
                <h3 className="text-xl font-bold text-gray-900">Allergen Guide</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-3">
                  <IconBadge tone="slate" size="sm"><Milk className="w-4 h-4" aria-hidden /></IconBadge>
                  Base contains <strong>Dairy</strong> (cheese blend, garlic sauce).
                </li>
                <li className="flex items-center gap-3">
                  <IconBadge tone="amber" size="sm"><Wheat className="w-4 h-4" aria-hidden /></IconBadge>
                  Base contains <strong>Gluten</strong> (fries share fryer with breaded items).
                </li>
                <li className="flex items-center gap-3">
                  <IconBadge tone="emerald" size="sm"><Leaf className="w-4 h-4" aria-hidden /></IconBadge>
                  Base contains <strong>Soy</strong> (in garlic sauce).
                </li>
                <li className="flex items-center gap-3">
                  <IconBadge tone="green" size="sm"><CheckCircle className="w-4 h-4" aria-hidden /></IconBadge>
                  Our kitchen is <strong>Nut-Free</strong>.
                </li>
              </ul>
              <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200 text-sm text-slate-700">
                <strong>Disclaimer:</strong> Made in a kitchen that handles nuts, shellfish, and eggs. We take precautions but cannot guarantee zero cross-contact.
              </div>
            </article>
          </div>
        </section>


        {/* ---------------------------------- */}
        {/* Other Popular Items (links to pages) */}
        {/* ---------------------------------- */}
        <section aria-labelledby="other-items" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <IconBadge tone="slate" size="md"><Package className="w-5 h-5" aria-hidden /></IconBadge>
            <h2 id="other-items" className={`${display.className} text-3xl md:text-4xl font-bold text-gray-900`}>More to Explore</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OTHER_ITEMS.map((item) => (
              <a key={item.name} href={item.href} className="group block bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(min-width:1024px) 33vw, 100vw"
                    placeholder="blur"
                    blurDataURL={BLUR}
                    className="object-cover transition-transform group-hover:scale-[1.02]"
                  />
                  <div className="absolute right-3 top-3">
                    <IconBadge tone="slate" size="sm">
                      <ExternalLink className="w-4 h-4" aria-hidden />
                    </IconBadge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <p className="text-sm font-semibold text-slate-600">from ${item.from}</p>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Tap to see details</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ---------------------------------- */}
        {/* FOOTER ORDER REMINDER + BUTTONS */}
        {/* ---------------------------------- */}
        <section aria-label="Order reminder" className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl p-8 md:p-10 text-center text-white shadow-2xl mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-sm mb-4">
              <Sparkles className="w-4 h-4" aria-hidden /> Preview complete — Ready to order?
            </div>
            <h2 className={`${display.className} text-3xl md:text-4xl font-bold mb-3`}>Ready to Build Your Stack?</h2>
            <p className="text-amber-50 mb-6">
              Choose Uber Eats or DoorDash to complete checkout. We’ll start building your masterpiece as soon as your order comes in.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={UBER_EATS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-black text-white rounded-xl font-bold hover:scale-[1.02] active:scale-[.98] transition inline-flex items-center gap-2"
              >
                Order on Uber Eats <ExternalLink className="w-4 h-4" aria-hidden />
              </a>
              <a
                href={DOORDASH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-[#EB1700] text-white rounded-xl font-bold hover:scale-[1.02] active:scale-[.98] transition inline-flex items-center gap-2"
              >
                Order on DoorDash <ExternalLink className="w-4 h-4" aria-hidden />
              </a>
            </div>

            <p className="mt-4 text-xs text-amber-100">
              Secure checkout • Real-time tracking • Restaurant-backed quality
            </p>
          </div>
        </section>

        {/* ---------------------------------- */}
        {/* Footer Notes */}
        {/* ---------------------------------- */}
        <footer className="text-center text-sm text-slate-600">
          <p className="mb-1">This page is a visual preview and detailed description. Please place your order on Uber Eats or DoorDash.</p>
          <p>Nutrition values are estimates for base builds; customizations will alter final nutrition content.</p>
        </footer>
      </div>
    </main>
  );
}