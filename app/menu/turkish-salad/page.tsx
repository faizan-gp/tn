import Image from 'next/image';
import type { Metadata } from 'next';
import {
  Wheat, Milk, Leaf, Info, Star, Clock, Shield, Package, Sparkles, CheckCircle, ExternalLink,
  Droplet, // For Fat
  Zap,   // For Add-ons
  Drumstick, // For Protein add-on section
} from 'lucide-react';
import { Playfair_Display, Inter } from 'next/font/google';

// Typography
const display = Playfair_Display({ subsets: ['latin'], weight: ['700', '800', '900'] });
const sans = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

// Replace with your actual storefront links
const UBER_EATS_URL = 'https://www.ubereats.com/store/zero-latency-vr-and-cafe-webster-tx/Z_MXwfGGQeSDhCHwMG4ZbQ'
const DOORDASH_URL = 'https://www.doordash.com/store/34914585';

// ----------
// SEO (App Router)
// ----------
export const metadata: Metadata = {
  title: 'Turkish Salad Preview — Tandoori Nook',
  description:
    'Colorful, detailed preview of our Turkish Salad for delivery apps. See nutrition, allergens, sizes, dressing options, protein add-ons, and how we make it.',
  openGraph: {
    title: 'Turkish Salad Preview — Tandoori Nook',
    description:
      'Preview our Turkish Salad, including nutrition, allergens, sizes, dressings, proteins, and more. Order on Uber Eats or DoorDash.',
    type: 'website',
    images: [{ url: '/turkish-salad-hero-square-og.jpg', width: 1200, height: 1200, alt: 'Turkish Salad square hero' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turkish Salad Preview — Tandoori Nook',
    description:
      'Preview our Turkish Salad, including nutrition, allergens, sizes, dressings, proteins, and more. Order on Uber Eats or DoorDash.',
    images: ['/turkish-salad-hero-square-og.jpg'],
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
// Content data (from Turkish Salad component)
// ----------
const SIZES = [
  {
    key: 'regular',
    name: 'Regular',
    price: 9.0,
    kcal: 280,
    protein: 6,
    carbs: 24,
    fat: 18,
    serves: 'Feeds 1',
    blurb: 'Perfect as a light meal or hearty side.',
    img: '/turkish-salad-regular.webp', // Image path retained but not used in this section
    alt: 'Regular size Turkish Salad',
  },
  {
    key: 'large',
    name: 'Large',
    price: 12.5,
    kcal: 420,
    protein: 9,
    carbs: 36,
    fat: 27,
    serves: 'Feeds 1–2',
    blurb: 'Generous portion for a main course salad.',
    img: '/turkish-salad-large.webp', // Image path retained but not used in this section
    alt: 'Large size Turkish Salad',
  },
  {
    key: 'family',
    name: 'Family Bowl',
    price: 24.0,
    kcal: 840,
    protein: 18,
    carbs: 72,
    fat: 54,
    serves: 'Serves 3–4',
    blurb: 'Great for sharing as part of a larger meal.',
    img: '/turkish-salad-family.webp', // Image path retained but not used in this section
    alt: 'Family Bowl of Turkish Salad',
  },
] as const;

const DRESSINGS = [
    { id: 'lemon-olive', name: 'Lemon-Olive Oil', note: 'Vegan • Bright', img: '/dressing-lemon-olive.webp', alt: 'Lemon and olive oil dressing' },
    { id: 'pom-vinaigrette', name: 'Pomegranate Vinaigrette', note: 'Vegan • Tangy', img: '/dressing-pomegranate.webp', alt: 'Pomegranate vinaigrette dressing' },
    { id: 'yogurt-garlic', name: 'Yogurt-Garlic', note: 'Dairy • Creamy', img: '/dressing-yogurt-garlic.webp', alt: 'Yogurt garlic dressing' },
] as const;

const PROTEINS = [
    { id: 'chicken', name: 'Chicken Tikka', price: 3.0, note: 'Halal • Spiced', img: '/protein-chicken-tikka-salad.webp', alt: 'Grilled chicken tikka pieces for salad' },
    { id: 'falafel', name: 'Falafel (3pc)', price: 2.5, note: 'Vegetarian • Crispy', img: '/protein-falafel-salad.webp', alt: 'Falafel balls for salad' },
    { id: 'halloumi', name: 'Grilled Halloumi', price: 3.5, note: 'Vegetarian • Salty', img: '/protein-halloumi-salad.webp', alt: 'Grilled halloumi cheese slices for salad' },
] as const;

const ADD_ON_OPTIONS = [
    { id: 'extra-feta', name: 'Feta Crumble', price: 1.25, note: 'Salty tang', img: '/addon-feta.webp', alt: 'Feta cheese crumbles' },
    { id: 'olives', name: 'Kalamata Olives', price: 0.75, note: 'Briny bite', img: '/addon-olives.webp', alt: 'Kalamata olives' },
    { id: 'pom-seeds', name: 'Pomegranate Seeds', price: 0.75, note: 'Sweet burst', img: '/addon-pomegranate-seeds.webp', alt: 'Pomegranate seeds' },
    { id: 'pita-crunch', name: 'Toasted Pita Crunch', price: 0.75, note: 'Crispy texture', img: '/addon-pita-crunch.webp', alt: 'Toasted pita bread pieces' },
    { id: 'sumac-onion', name: 'Extra Sumac Onions', price: 0.5, note: 'Tangy crunch', img: '/addon-sumac-onions.webp', alt: 'Sumac spiced red onions' },
] as const;

const CHAPTERS = [
  {
    title: 'The Chop',
    subtitle: 'Even dice, big crunch',
    description: 'Tomatoes, cucumbers, peppers, and onions are cut to size for the perfect bite.',
    why: 'Consistent cuts mean consistent flavor delivery and better dressing coverage.',
    img: '/turkish-salad-cut.webp',
    alt: 'Chopped vegetables for Turkish Salad',
  },
  {
    title: 'The Soak',
    subtitle: 'Sumac onion magic',
    description: 'Red onions get a quick toss with sumac and lemon to tame sharpness and add tang.',
    why: 'Acid and sumac bloom aromatics while keeping the crunch.',
    img: '/turkish-salad-soak.webp',
    alt: 'Red onions tossed with sumac spice',
  },
  {
    title: 'The Toss',
    subtitle: 'Lemon‑olive or pom vinaigrette',
    description: 'We emulsify just enough to cling to every vegetable without weighing it down.',
    why: 'A light emulsion coats evenly and prevents sogginess.',
    img: '/turkish-salad-toss.webp',
    alt: 'Salad being tossed with dressing in a bowl',
  },
  {
    title: 'The Finish',
    subtitle: 'Parsley shower & toppings',
    description: 'Fresh parsley, olives, pomegranate seeds—add feta or halloumi if you like.',
    why: 'Fresh herbs lift the palate; salty or sweet toppings create balance.',
    img: '/turkish-salad-finish.webp',
    alt: 'Finished Turkish Salad topped with parsley and feta',
  },
] as const;

const REVIEWS = [
  { name: 'Selin D.', rating: 5, text: 'Bright and authentic—loved the sumac onions.' },
  { name: 'Omar F.', rating: 5, text: 'Falafel add‑on made it a full meal.' },
  { name: 'Hannah P.', rating: 5, text: 'Pom vinaigrette is a game changer.' },
] as const;

const OTHER_ITEMS = [
   {
    name: 'Lamb Gyro',
    href: '/menu/lamb-gyro',
    img: '/lamb-gyro.webp',
    alt: 'Sliced lamb gyro wrap',
    from: 13,
  },
  {
    name: 'Chicken Shawarma',
    href: '/menu/chicken-shawarma',
    img: '/chicken-shawarma.webp',
    alt: 'Chicken shawarma wrap',
    from: 11,
  },
   {
    name: 'Garlic Fries',
    href: '/menu/garlic-fries',
    img: '/garlic-fries.webp',
    alt: 'Garlic fries with parsley',
    from: 7,
  },
] as const;

// ----------
// Page
// ----------
export default function TurkishSaladPreviewPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MenuItem',
    name: 'Turkish Salad',
    description:
      'A vibrant and fresh salad with chopped cucumbers, tomatoes, peppers, parsley, and sumac onions. Choice of dressings and optional protein add-ons available.',
    image: '/turkish-salad.webp',
    offers: SIZES.map((s) => ({
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: s.price,
      itemOffered: { '@type': 'MenuItem', name: `${s.name} Turkish Salad` },
      availability: 'https://schema.org/InStock',
    })),
     nutrition: {
        '@type': 'NutritionInformation',
        calories: `${SIZES[0].kcal} kcal`, // Base size
        proteinContent: `${SIZES[0].protein} g`,
        carbohydrateContent: `${SIZES[0].carbs} g`,
        fatContent: `${SIZES[0].fat} g`
    },
    suitableForDiet: ['https://schema.org/HalalDiet', 'https://schema.org/VegetarianDiet', 'https://schema.org/VeganDiet'] // Base can be vegan
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
             <IconBadge tone="emerald" size="md">
              <Leaf className="w-5 h-5" aria-hidden />
            </IconBadge>
            <span className="text-green-800 font-semibold text-sm">Vegan Base & Halal</span>
          </div>

          <h1 className={`${display.className} text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mt-4`}>
            Turkish <span className="text-emerald-700">Salad</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mt-4">
            Crisp, bright, and refreshing—sunshine in a bowl. This preview shows exactly what you’ll get when you order on your favorite delivery app.
          </p>

          <figure className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 items-center">
            {/* Square hero */}
            <div className="relative aspect-[1/1] rounded-3xl overflow-hidden shadow-2xl border border-amber-200">
              <Image
                src="/turkish-salad.webp"
                alt="Turkish Salad square hero image with fresh vegetables"
                fill
                priority
                sizes="(min-width: 1024px) 600px, 100vw"
                placeholder="blur"
                blurDataURL={BLUR}
                className="object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-2 bg-amber-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                  <Clock className="w-4 h-4" /> Ready in ~6 min
                </span>
              </div>
            </div>

            {/* At a glance (read-only chips) */}
            <figcaption className="lg:pl-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                 <div className="bg-white rounded-2xl p-4 ring-1 ring-emerald-200 shadow-md">
                  <div className="flex items-center gap-2">
                    <IconBadge tone="emerald" size="sm"><Leaf className="w-4 h-4" /></IconBadge>
                    <p className="font-semibold text-gray-900">Flavor</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Bright, tangy, fresh</p>
                </div>
                <div className="bg-white rounded-2xl p-4 ring-1 ring-blue-200 shadow-md">
                  <div className="flex items-center gap-2">
                    <IconBadge tone="blue" size="sm"><Shield className="w-4 h-4" /></IconBadge>
                    <p className="font-semibold text-gray-900">A+ Hygiene</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Nut-Free Kitchen</p>
                </div>
                 <div className="bg-white rounded-2xl p-4 ring-1 ring-violet-200 shadow-md">
                  <div className="flex items-center gap-2">
                    <IconBadge tone="violet" size="sm"><Info className="w-4 h-4" /></IconBadge>
                    <p className="font-semibold text-gray-900">Dressings</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Lemon, Pom, Yogurt</p>
                </div>
                 <div className="bg-white rounded-2xl p-4 ring-1 ring-green-200 shadow-md">
                  <div className="flex items-center gap-2">
                    <IconBadge tone="green" size="sm"><Drumstick className="w-4 h-4" /></IconBadge>
                    <p className="font-semibold text-gray-900">Proteins</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Chicken, Falafel, Halloumi</p>
                </div>
                 <div className="bg-white rounded-2xl p-4 ring-1 ring-green-200 shadow-md">
                  <div className="flex items-center gap-2">
                    <IconBadge tone="green" size="sm"><Leaf className="w-4 h-4" /></IconBadge>
                    <p className="font-semibold text-gray-900">Diet</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Vegan/Veggie Options</p>
                </div>
                <div className="bg-white rounded-2xl p-4 ring-1 ring-slate-200 shadow-md">
                  <div className="flex items-center gap-2">
                    <IconBadge tone="slate" size="sm"><Star className="w-4 h-4" /></IconBadge>
                    <p className="font-semibold text-gray-900">Rating</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">4.9/5 (412 reviews)</p>
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
                Featured: Regular size with Lemon-Olive dressing • Photos for illustration — actual packaging may vary.
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
                  This page is a visual guide to sizes, dressings, proteins, and add-ons so you can build your perfect salad before
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
                  <p className="text-2xl font-extrabold text-emerald-700">${s.price.toFixed(2)}</p>
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
          <p className="mt-3 text-sm text-gray-600">Base prices shown before protein, add-ons, and platform fees on Uber Eats or DoorDash.</p>
        </section>

        {/* ---------------------------------- */}
        {/* Dressing Options (NO IMAGES) */}
        {/* ---------------------------------- */}
        <section aria-labelledby="dressings" className="mb-12">
           <div className="flex items-center gap-3 mb-6">
            <IconBadge tone="blue" size="md"><Droplet className="w-5 h-5" aria-hidden /></IconBadge>
            <h2 id="dressings" className={`${display.className} text-3xl md:text-4xl font-bold text-gray-900`}>Dressing Options</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {DRESSINGS.map((d) => (
              <article key={d.id} className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-6">
                {/* Image Removed */}
                 <h3 className="text-xl font-bold text-gray-900">{d.name}</h3>
                 <p className="mt-1 text-sm text-blue-600 font-semibold">{d.note}</p>
              </article>
            ))}
          </div>
           <p className="mt-3 text-sm text-gray-600">Dressing is always packed on the side for delivery to ensure freshness.</p>
        </section>

         {/* ---------------------------------- */}
        {/* Protein Add-ons (NO IMAGES) */}
        {/* ---------------------------------- */}
        <section aria-labelledby="proteins" className="mb-12">
           <div className="flex items-center gap-3 mb-6">
            <IconBadge tone="green" size="md"><Drumstick className="w-5 h-5" aria-hidden /></IconBadge>
            <h2 id="proteins" className={`${display.className} text-3xl md:text-4xl font-bold text-gray-900`}>Protein Add-Ons (Optional)</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PROTEINS.map((p) => (
              <article key={p.id} className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-6">
                {/* Image Removed */}
                 <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                 <p className="text-lg text-amber-600 font-semibold">+${p.price.toFixed(2)}</p>
                 <p className="mt-1 text-sm text-slate-600">{p.note}</p>
              </article>
            ))}
          </div>
           <p className="mt-3 text-sm text-gray-600">Add extra protein when customizing your order on the delivery app.</p>
        </section>

        {/* ---------------------------------- */}
        {/* Other Add-on Options (NO IMAGES) */}
        {/* ---------------------------------- */}
        <section aria-labelledby="add-ons" className="mb-12">
           <div className="flex items-center gap-3 mb-6">
            <IconBadge tone="violet" size="md"><Zap className="w-5 h-5" aria-hidden /></IconBadge>
            <h2 id="add-ons" className={`${display.className} text-3xl md:text-4xl font-bold text-gray-900`}>Other Add-Ons</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ADD_ON_OPTIONS.map((opt) => (
              <article key={opt.id} className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-6 flex flex-col justify-between">
                {/* Image Removed */}
                <div> {/* Wrap text content */}
                   <h3 className="text-lg font-bold text-gray-900">{opt.name}</h3>
                   <p className="mt-1 text-xs text-slate-600">{opt.note}</p>
                </div>
                   <p className="text-sm text-amber-600 font-semibold mt-2">{opt.price ? `+$${opt.price.toFixed(2)}` : 'Free'}</p>
              </article>
            ))}
          </div>
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
                  <div className="bg-amber-50 p-4 rounded-xl border-l-4 border-emerald-700 mt-4"> {/* Changed border color */}
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
              <span className="text-gray-500">(412 reviews)</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r, idx) => (
              <article key={idx} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-lg"> {/* Changed color */}
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
            <h3 className={`${display.className} text-xl font-bold text-slate-900 mb-2`}>Fresh Ingredients</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Locally sourced vegetables when possible. Fresh herbs chopped daily.</p>
            <a href="#" className="mt-4 text-sm text-green-700 font-semibold flex items-center gap-1">Our Produce Partners <ExternalLink className="w-4 h-4" /></a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-200">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4"><Shield className="w-6 h-6 text-blue-600" /></div>
            <h3 className={`${display.className} text-xl font-bold text-slate-900 mb-2`}>Safety First</h3>
            <p className="text-sm text-slate-600 leading-relaxed">A+ hygiene rating. Separate cutting boards for produce. Nut-free kitchen.</p>
            <a href="#" className="mt-4 text-sm text-blue-700 font-semibold flex items-center gap-1">See our kitchen <ExternalLink className="w-4 h-4" /></a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-emerald-200">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4"><Leaf className="w-6 h-6 text-emerald-600" /></div>
            <h3 className={`${display.className} text-xl font-bold text-slate-900 mb-2`}>Sustainable</h3>
            <p className="text-sm text-slate-600 leading-relaxed">Recyclable containers. Veggie scraps composted. Minimal food waste practices.</p>
            <a href="#" className="mt-4 text-sm text-emerald-700 font-semibold flex items-center gap-1">Our impact <ExternalLink className="w-4 h-4" /></a>
          </div>
        </section>

        {/* 9. DELIVERY & HONESTY */}
        <section className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mb-8 border-2 border-amber-200">
          <h2 className={`${display.className} text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3`}><Package className="w-8 h-8 text-amber-600" /> The Delivery Truth</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Travel Test Results</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                 <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /><span>Dressing always packed separately to prevent wilting</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /><span>Crispy toppings (pita crunch) bagged separately</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /><span>Sturdy bowl maintains salad structure during transit</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-200">
              <h3 className="font-semibold text-slate-900 mb-4">Keep it Fresh</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3"><div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">1</div><div><div className="font-semibold text-slate-900">Dress Just Before Eating</div><div className="text-sm text-slate-600">Pour dressing over, toss gently, add crispy bits last</div></div></div>
                <div className="flex items-start gap-3"><div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">2</div><div><div className="font-semibold text-slate-900">Refrigerate Promptly</div><div className="text-sm text-slate-600">Enjoy within 24 hours for best texture and flavor</div></div></div>
                <div className="flex items-start gap-3"><div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">3</div><div><div className="font-semibold text-slate-900">Revive Leftovers</div><div className="text-sm text-slate-600">A squeeze of fresh lemon can brighten day-old salad</div></div></div>
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
                <h3 className="text-xl font-bold text-gray-900">Typical Macros (Base Salad)</h3>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden space-y-3">
                {SIZES.map((s) => (
                  <div key={s.key} className="rounded-xl bg-white p-4 ring-1 ring-amber-100 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-slate-900">{s.name}</div>
                      <div className="text-emerald-700 font-bold">${s.price.toFixed(2)}</div>
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

              <p className="mt-3 text-xs text-gray-500">Values are estimates for base salad with Lemon-Olive dressing; other dressings, proteins, and add-ons will alter macros.</p>
            </article>

            {/* Allergens */}
            <article className="p-0 md:p-6 border-0 md:border-2 md:border-gray-200 rounded-none md:rounded-2xl">
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <IconBadge tone="rose" size="sm"><Shield className="w-4 h-4" aria-hidden /></IconBadge>
                <h3 className="text-xl font-bold text-gray-900">Allergen Guide</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                 <li className="flex items-center gap-3">
                  <IconBadge tone="amber" size="sm"><Wheat className="w-4 h-4" aria-hidden /></IconBadge>
                   Pita Crunch add-on contains <strong>Gluten</strong>.
                </li>
                 <li className="flex items-center gap-3">
                  <IconBadge tone="slate" size="sm"><Milk className="w-4 h-4" aria-hidden /></IconBadge>
                  Yogurt Dressing, Feta, Halloumi contain <strong>Dairy</strong>.
                </li>
                 <li className="flex items-center gap-3">
                  <IconBadge tone="green" size="sm"><CheckCircle className="w-4 h-4" aria-hidden /></IconBadge>
                  Base salad is <strong>Vegan</strong> (with vegan dressing). Kitchen is <strong>Nut-Free</strong>.
                </li>
                <li className="flex items-center gap-3">
                  <IconBadge tone="slate" size="sm"><Info className="w-4 h-4" aria-hidden /></IconBadge>
                  Prepared in a kitchen that handles soy & egg; cross-contact possible.
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
        <section aria-label="Order reminder" className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 rounded-3xl p-8 md:p-10 text-center text-white shadow-2xl mb-12"> {/* Changed color */}
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-sm mb-4">
              <Sparkles className="w-4 h-4" aria-hidden /> Preview complete — Ready to order?
            </div>
            <h2 className={`${display.className} text-3xl md:text-4xl font-bold mb-3`}>Place Your Order on a Delivery App</h2>
            <p className="text-emerald-50 mb-6"> {/* Changed color */}
              Choose Uber Eats or DoorDash to complete checkout. We’ll start chopping your fresh salad as soon as your order comes in.
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

            <p className="mt-4 text-xs text-emerald-100"> {/* Changed color */}
              Secure checkout • Real-time tracking • Restaurant-backed quality
            </p>
          </div>
        </section>

        {/* ---------------------------------- */}
        {/* Footer Notes */}
        {/* ---------------------------------- */}
        <footer className="text-center text-sm text-slate-600">
          <p className="mb-1">This page is a visual preview and detailed description. Please place your order on Uber Eats or DoorDash.</p>
          <p>Nutrition values are estimates for base salad with Lemon-Olive dressing; add-ons and proteins will alter final nutrition content.</p>
        </footer>
      </div>
    </main>
  );
}