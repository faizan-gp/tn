import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Wheat, Milk, Leaf, Info, Flame, Star, Clock, Shield, Package, Sparkles, CheckCircle, ExternalLink,
  Droplet, // For Fat
  Drumstick, // For Protein
  AlertTriangle, // For Soy allergen
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
  title: 'Crispy Wings Preview — Tandoori Nook',
  description:
    'Colorful, detailed preview of our Crispy Wings for delivery apps. See nutrition, allergens, sizes, sauce options (10+ flavors!), heat levels, and how we build them.',
  openGraph: {
    title: 'Crispy Wings Preview — Tandoori Nook',
    description:
      'Preview our Crispy Wings, including nutrition, allergens, sizes, sauce options, and more. Order on Uber Eats or DoorDash.',
    type: 'website',
    images: [{ url: '/crispy-wings-hero-square-og.jpg', width: 1200, height: 1200, alt: 'Crispy Wings square hero' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crispy Wings Preview — Tandoori Nook',
    description:
      'Preview our Crispy Wings, including nutrition, allergens, sizes, sauce options, and more. Order on Uber Eats or DoorDash.',
    images: ['/crispy-wings-hero-square-og.jpg'],
  },
};

// Tiny blur placeholder (keeps layout stable while images load)
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
// Content data (from Crispy Wings component)
// ----------
const SIZES = [
  {
    key: 'regular',
    name: '10 Wings',
    price: 14,
    pcs: 10,
    kcal: 980,
    protein: 78,
    carbs: 18,
    fat: 62,
    serves: 'Feeds 1–2',
    blurb: 'Perfect shareable size or a hearty meal for one.',
    img: '/wings-regular.webp', // Image path retained but not used in this section
    alt: 'Regular size (10 pieces) of crispy wings',
  },
  {
    key: 'party',
    name: '20 Wings',
    price: 26,
    pcs: 20,
    kcal: 1960,
    protein: 156,
    carbs: 36,
    fat: 124,
    serves: 'Feeds 2–3',
    blurb: 'Double the wings, double the fun. Great for small groups.',
    img: '/wings-party.webp', // Image path retained but not used in this section
    alt: 'Party size (20 pieces) of crispy wings',
  },
  {
    key: 'family',
    name: '40 Wings',
    price: 50,
    pcs: 40,
    kcal: 3920,
    protein: 312,
    carbs: 72,
    fat: 248,
    serves: 'Feeds 4–6',
    blurb: 'The ultimate party pack. Enough wings for the whole crew.',
    img: '/wings-family.webp', // Image path retained but not used in this section
    alt: 'Family size (40 pieces) of crispy wings',
  },
] as const;

const SAUCES = [
    { id: 'korean-bbq',    name: 'Korean BBQ',       heat: 2, notes: 'Sweet, soy, sesame' },
    { id: 'garlic-parm',   name: 'Garlic Parmesan',  heat: 1, notes: 'Buttery, cheesy' },
    { id: 'mango-hab',     name: 'Mango Habanero',   heat: 4, notes: 'Fruity fire' },
    { id: 'boom-boom',     name: 'Boom Boom',        heat: 3, notes: 'Creamy chili kick' },
    { id: 'nashville-hot', name: 'Nashville Hot',    heat: 5, notes: 'Spicy oil rub' },
    { id: 'buffalo',       name: 'Buffalo',          heat: 3, notes: 'Classic tangy heat' },
    { id: 'hot-honey',     name: 'Hot Honey',        heat: 2, notes: 'Sweet heat glaze' },
    { id: 'spicy-peach',   name: 'Spicy Peach',      heat: 3, notes: 'Stone fruit zing' },
    { id: 'lemon-pepper',  name: 'Lemon Pepper', heat: 1, notes: 'Citrusy dry rub' }, // Marked as dry
    { id: 'teriyaki',      name: 'Teriyaki',         heat: 1, notes: 'Sweet soy glaze' },
    { id: 'sweet-chili',   name: 'Sweet Chili',      heat: 2, notes: 'Sticky, mild spice' },
] as const;


const CHAPTERS = [
  {
    title: 'The Brine',
    subtitle: 'Buttermilk + spice bath',
    description: 'We soak fresh wings overnight in buttermilk, garlic, and paprika for deep seasoning and tenderness.',
    why: 'Buttermilk tenderizes while salt diffuses for juicy, evenly seasoned meat.',
    img: '/chicken-wings-marinade.webp',
    alt: 'Chicken wings marinating in buttermilk',
  },
  {
    title: 'The Dry',
    subtitle: 'Rest + fan-dry',
    description: 'A chilled rack rest dries the skin so it blisters into glassy crispness when fried.',
    why: 'Drier skin = less surface steam = louder crunch.',
    img: '/chicken-wings-dry.webp',
    alt: 'Raw chicken wings drying on a rack',
  },
  {
    title: 'The Fry',
    subtitle: 'Double fry = double crunch',
    description: 'First at lower temp to cook through, then a second hot plunge to shatter the skin.',
    why: 'Two-stage frying creates micro-bubbles that harden into a crackly crust.',
    img: '/chicken-wings-fry.webp',
    alt: 'Chicken wings being deep fried',
  },
  {
    title: 'The Toss',
    subtitle: 'Sauce or dry rub — your call',
    description: 'We toss to glossy perfection or pack sauces on the side to keep the crunch intact.',
    why: 'Controlling moisture preserves texture and lets you dial the intensity bite-by-bite.',
    img: '/chicken-wings-toss.webp',
    alt: 'Cooked chicken wings being tossed in sauce',
  },
] as const;

const REVIEWS = [
  { name: 'Khalid A.', rating: 5, text: 'Crispy even after delivery. Mango Habanero is 🔥.' },
  { name: 'Sofia T.', rating: 5, text: 'Half Buffalo, half Parm is my forever order.' },
  { name: 'Ray P.', rating: 5, text: 'Best Nashville Hot around. Legit crunch.' },
] as const;

const OTHER_ITEMS = [
  {
    name: 'Loaded Fries',
    href: '/menu/loaded-fries',
    img: '/loaded-fries.webp',
    alt: 'Loaded fries with toppings',
    from: 14,
  },
  {
    name: 'Chicken Burger',
    href: '/menu/chicken-burger',
    img: '/chicken-burger.webp',
    alt: 'Crispy chicken burger',
    from: 12,
  },
  {
    name: 'Lamb Gyro',
    href: '/menu/lamb-gyro',
    img: '/lamb-gyro.webp',
    alt: 'Sliced lamb gyro wrap',
    from: 13,
  },
] as const;

// Helper to render heat level icons
const HeatBadge = ({ heat }: { heat: number }) => (
  <div className="flex items-center gap-0.5" aria-label={`Heat level ${heat} out of 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Flame
        key={i}
        className={`w-3.5 h-3.5 ${i < heat ? 'text-red-600 fill-red-600' : 'text-slate-300'}`}
        strokeWidth={1.5}
      />
    ))}
  </div>
);


// ----------
// Page
// ----------
export default function CrispyWingsPreviewPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MenuItem',
    name: 'Crispy Wings',
    description:
      'Double-fried Halal chicken wings, tossed in your choice of sauce or served on the side. Over 10 flavors available, from mild to extra hot.',
    image: '/wings-front.webp',
    offers: SIZES.map((s) => ({
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: s.price,
      itemOffered: { '@type': 'MenuItem', name: s.name },
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
            Crispy <span className="text-amber-600">Wings</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mt-4">
            Double-fried crunch, endless sauce possibilities. This preview shows exactly what you’ll get when you order on your favorite delivery app.
          </p>

          <figure className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 items-center">
            {/* Square hero */}
            <div className="relative aspect-[1/1] rounded-3xl overflow-hidden shadow-2xl border border-amber-200">
              <Image
                src="/wings-front.webp"
                alt="Crispy Wings square hero image with sauce"
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
                    <IconBadge tone="amber" size="sm"><Drumstick className="w-4 h-4" /></IconBadge>
                    <p className="font-semibold text-gray-900">Protein</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">78–312g depending on size</p>
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
                  <p className="text-sm text-gray-600 mt-1">Mild → Nashville Hot</p>
                </div>
                <div className="bg-white rounded-2xl p-4 ring-1 ring-violet-200 shadow-md">
                  <div className="flex items-center gap-2">
                    <IconBadge tone="violet" size="sm"><Info className="w-4 h-4" /></IconBadge>
                    <p className="font-semibold text-gray-900">Sauces</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">10+ Flavors Available</p>
                </div>
                <div className="bg-white rounded-2xl p-4 ring-1 ring-emerald-200 shadow-md">
                  <div className="flex items-center gap-2">
                    <IconBadge tone="emerald" size="sm"><Package className="w-4 h-4" /></IconBadge>
                    <p className="font-semibold text-gray-900">Placement</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Tossed or On Side</p>
                </div>
                <div className="bg-white rounded-2xl p-4 ring-1 ring-slate-200 shadow-md">
                  <div className="flex items-center gap-2">
                    <IconBadge tone="slate" size="sm"><Star className="w-4 h-4" /></IconBadge>
                    <p className="font-semibold text-gray-900">Rating</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">4.9/5 (1,012 reviews)</p>
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
                Featured: 10 Wings, tossed in Korean BBQ • Photos for illustration — actual packaging may vary.
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
                  This page is a visual guide to sizes, sauces, and heat levels so you can pick your perfect wings before
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
                  <p className="text-2xl font-extrabold text-amber-600">${s.price.toFixed(2)}</p>
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
          <p className="mt-3 text-sm text-gray-600">Prices shown before add-ons and platform fees on Uber Eats or DoorDash.</p>
        </section>

        {/* ---------------------------------- */}
        {/* Sauce Options (NO IMAGES) */}
        {/* ---------------------------------- */}
        <section aria-labelledby="sauces" className="mb-12">
           <div className="flex items-center gap-3 mb-6">
            <IconBadge tone="violet" size="md"><Sparkles className="w-5 h-5" aria-hidden /></IconBadge>
            <h2 id="sauces" className={`${display.className} text-3xl md:text-4xl font-bold text-gray-900`}>Sauce Options (10+ Flavors)</h2>
          </div>

           <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">
                <Info className="w-4 h-4" /> Choose <strong>one</strong> sauce, or go <strong>Half & Half</strong> (pick two).
              </span>
            </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SAUCES.map((s) => (
              <article key={s.id} className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-5">
                 {/* Image Removed */}
                 <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-gray-900">{s.name}</h3>
                      <p className="text-xs text-slate-600">{s.notes}</p>
                    </div>
                    <HeatBadge heat={s.heat} />
                  </div>
              </article>
            ))}
          </div>
           <p className="mt-3 text-sm text-gray-600">Sauce can be tossed or served on the side. Specify your choice on the delivery app.</p>
        </section>

        {/* ---------------------------------- */}
        {/* How We Build It */}
        {/* ---------------------------------- */}
        <section aria-labelledby="build" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <IconBadge tone="amber" size="md"><Sparkles className="w-5 h-5" aria-hidden /></IconBadge>
            <h2 id="build" className={`${display.className} text-3xl md:text-4xl font-bold text-gray-900`}>How We Build It</h2>
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
              <span className="text-gray-500">(1,012 reviews)</span>
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

         {/* 8. SOURCING & QUALITY */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-200">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4"><CheckCircle className="w-6 h-6 text-green-600" /></div>
            <h3 className={`${display.className} text-xl font-bold text-slate-900 mb-2`}>Quality Ingredients</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Fresh halal chicken wings. Spices ground daily. No artificial colors.</p>
            <a href="#" className="mt-4 text-sm text-green-700 font-semibold flex items-center gap-1">View Halal Certificate <ExternalLink className="w-4 h-4" /></a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-200">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"><Shield className="w-6 h-6 text-blue-600" /></div>
            <h3 className={`${display.className} text-xl font-bold text-slate-900 mb-2`}>Safety First</h3>
            <p className="text-sm text-slate-600 leading-relaxed">A+ hygiene rating. Separate boards for cooked vs. raw. Oil filtered every 4 hours.</p>
            <a href="#" className="mt-4 text-sm text-blue-700 font-semibold flex items-center gap-1">See Our Kitchen <ExternalLink className="w-4 h-4" /></a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-emerald-200">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4"><Leaf className="w-6 h-6 text-emerald-600" /></div>
            <h3 className={`${display.className} text-xl font-bold text-slate-900 mb-2`}>Sustainable</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Recyclable boxes. Local honey for Hot Honey. Food waste composted.</p>
            <a href="#" className="mt-4 text-sm text-emerald-700 font-semibold flex items-center gap-1">Our Impact <ExternalLink className="w-4 h-4" /></a>
          </div>
        </section>

        {/* 9. DELIVERY & HONESTY */}
        <section className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mb-8 border-2 border-amber-200">
          <h2 className={`${display.className} text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3`}><Package className="w-8 h-8 text-amber-600" /> The Delivery Truth</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Travel Test Results</h3>
              <p className="text-slate-700 mb-4">20-minute ride simulation. Here's what we learned:</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /><span>Vented lid keeps wings ~80% crispy</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /><span>Sauces travel separately if you choose "on side"</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /><span>Paper liner absorbs excess oil to preserve crunch</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-200">
              <h3 className="font-semibold text-slate-900 mb-4">Reheat Like a Pro</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3"><div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">1</div><div><div className="font-semibold text-slate-900">Air Fryer</div><div className="text-sm text-slate-600">4–5 mins at 375°F / 190°C — skin re-crisps fast</div></div></div>
                <div className="flex items-start gap-3"><div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">2</div><div><div className="font-semibold text-slate-900">Oven</div><div className="text-sm text-slate-600">8–10 mins at 400°F / 205°C on a rack</div></div></div>
                <div className="flex items-start gap-3"><div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">3</div><div><div className="font-semibold text-slate-900">Pro Tip</div><div className="text-sm text-slate-600">Sauce after reheating; glaze in last 60 seconds for shine</div></div></div>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Macros */}
            <article className="p-0 md:p-6 border-0 md:border-2 md:border-gray-200 rounded-none md:rounded-2xl">
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <IconBadge tone="amber" size="sm"><Star className="w-4 h-4" aria-hidden /></IconBadge>
                <h3 className="text-xl font-bold text-gray-900">Typical Macros (Naked Wings)</h3>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden space-y-3">
                {SIZES.map((s) => (
                  <div key={s.key} className="rounded-xl bg-white p-4 ring-1 ring-amber-100 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-slate-900">{s.name}</div>
                      <div className="text-amber-600 font-bold">${s.price.toFixed(2)}</div>
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
                      <th className="py-2 pr-3">Pieces</th>
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
                        <td className="py-2 pr-3">{s.pcs}pc</td>
                        <td className="py-2 pr-3">{s.kcal}</td>
                        <td className="py-2 pr-3">{s.protein}g</td>
                        <td className="py-2 pr-3">{s.carbs}g</td>
                        <td className="py-2">{s.fat}g</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-3 text-xs text-gray-500">Values are estimates for naked wings; sauces add calories, carbs, and fat (avg. 50-150 kcal per serving).</p>
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
                  Brine contains <strong>Dairy</strong>. Garlic Parm sauce contains <strong>Dairy</strong>.
                </li>
                 <li className="flex items-center gap-3">
                  <IconBadge tone="emerald" size="sm"><Leaf className="w-4 h-4" aria-hidden /></IconBadge>
                  Korean BBQ, Boom Boom, Teriyaki sauces contain <strong>Soy</strong>.
                </li>
                <li className="flex items-center gap-3">
                  <IconBadge tone="amber" size="sm"><Wheat className="w-4 h-4" aria-hidden /></IconBadge>
                  Wings share fryer with items containing <strong>Gluten</strong> (cross-contact risk).
                </li>
                <li className="flex items-center gap-3">
                  <IconBadge tone="green" size="sm"><CheckCircle className="w-4 h-4" aria-hidden /></IconBadge>
                  Our kitchen is <strong>Nut-Free</strong>.
                </li>
              </ul>
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
            <h2 className={`${display.className} text-3xl md:text-4xl font-bold mb-3`}>Place Your Order on a Delivery App</h2>
            <p className="text-amber-50 mb-6">
              Choose Uber Eats or DoorDash to complete checkout. We’ll start frying your wings as soon as your order comes in.
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
          <p>Nutrition values are estimates for naked wings; sauces and add-ons will alter final nutrition content.</p>
        </footer>
      </div>
    </main>
  );
}