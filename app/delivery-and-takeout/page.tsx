import Image from 'next/image';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { ExternalLink, Truck, Store, Shield, Award, Clock, Link, Package } from 'lucide-react';

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
  title: 'Order for Delivery or Takeout — Tandoori Nook',
  description:
    'Get Tandoori Nook delivered hot and fresh via Uber Eats or DoorDash. You can also order ahead for easy in-store pickup.',
  openGraph: {
    title: 'Order for Delivery or Takeout — Tandoori Nook',
    description: 'Get your Halal favorites like Shawarma, Gyros, and Loaded Fries delivered.',
    images: [{ url: '/tandoori-nook-hero-square-og.jpg', width: 1200, height: 1200, alt: 'Tandoori Nook food delivery' }], // You'll need to create a general OG image
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
// Page
// ----------
export default function DeliveryAndTakeoutPage() {
  return (
    <main className={`${sans.className} bg-[#f5f0e4] min-h-screen`}>
      <div className="container mx-auto px-6 py-8 md:py-16">
        
        {/* Header */}
        <header className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <h1 className={`${display.className} text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900`}>
            Order for Delivery or Takeout
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Get your Tandoori Nook favorites delivered hot and fresh, or skip the line with easy online ordering for pickup. We&apos;ve partnered with the best to bring our kitchen to you.
          </p>
        </header>

        {/* ---------------------------------- */}
        {/* Provider Links */}
        {/* ---------------------------------- */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Uber Eats Card */}
            <a
              href={UBER_EATS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-3xl shadow-lg border-2 border-gray-200 p-8 text-center transition-all hover:shadow-2xl hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <Image
                src="/uber-eats-logo.svg" // Assumed path, replace with your own
                alt="Uber Eats Logo"
                width={120}
                height={40}
                className="h-10 w-auto mx-auto mb-6"
              />
              <p className="text-lg text-slate-700 mb-6">
                Order for delivery or pickup directly through Uber Eats.
              </p>
              <span
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-black text-white font-bold shadow hover:scale-[1.02] active:scale-[.98] transition"
              >
                Order on Uber Eats
                <ExternalLink className="w-5 h-5" aria-hidden />
              </span>
            </a>

            {/* DoorDash Card */}
            <a
              href={DOORDASH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-3xl shadow-lg border-2 border-gray-200 p-8 text-center transition-all hover:shadow-2xl hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <Image
                src="/doordash-logo.svg" // Assumed path, replace with your own
                alt="DoorDash Logo"
                width={120}
                height={40}
                className="h-10 w-auto mx-auto mb-6"
              />
              <p className="text-lg text-slate-700 mb-6">
                Find us on DoorDash for delivery or easy in-store pickup.
              </p>
              <span
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#EB1700] text-white font-bold shadow hover:scale-[1.02] active:scale-[.98] transition"
              >
                Order on DoorDash
                <ExternalLink className="w-5 h-5" aria-hidden />
              </span>
            </a>
          </div>
        </section>

        {/* ---------------------------------- */}
        {/* Trust Signals */}
        {/* ---------------------------------- */}
        <section className="mb-16">
          <h2 className={`${display.className} text-4xl font-bold text-gray-900 mb-8 text-center`}>
            Our Promise to You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Halal & A+ Hygiene</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Enjoy with confidence. Our entire kitchen is 100% Halal certified and maintains an A+ hygiene rating.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Fresh & Fast</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your order is made fresh and packed immediately. Ready in as little as 7-10 minutes for pickup.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-emerald-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Sealed for Delivery</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every order is carefully sealed to ensure it arrives at your door hot, fresh, and tamper-free.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------- */}
        {/* How it Works */}
        {/* ---------------------------------- */}
         <section className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mb-8 border-2 border-amber-200">
            <h2 className={`${display.className} text-3xl font-bold text-slate-900 mb-6 text-center`}>How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <IconBadge tone="amber" size="lg" className="mb-4">
                  <span className="font-bold text-2xl">1</span>
                </IconBadge>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Choose a Partner</h3>
                <p className="text-slate-600">Tap on Uber Eats or DoorDash above—whichever you prefer.</p>
              </div>
              {/* Step 2 */}
              <div className="text-center">
                <IconBadge tone="amber" size="lg" className="mb-4">
                  <span className="font-bold text-2xl">2</span>
                </IconBadge>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Build Your Order</h3>
                <p className="text-slate-600">Browse our menu on their app and build your perfect meal.</p>
              </div>
              {/* Step 3 */}
              <div className="text-center">
                <IconBadge tone="amber" size="lg" className="mb-4">
                  <span className="font-bold text-2xl">3</span>
                </IconBadge>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Enjoy!</h3>
                <p className="text-slate-600">We&apos;ll get cooking and pack your order for delivery or pickup.</p>
              </div>
            </div>
         </section>

        {/* ---------------------------------- */}
        {/* Visit Us */}
        {/* ---------------------------------- */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-700 rounded-3xl p-8 md:p-10 text-center text-white shadow-2xl">
            <h2 className={`${display.className} text-3xl md:text-4xl font-bold mb-3`}>Prefer to Visit Us?</h2>
            <p className="text-emerald-50 mb-6 max-w-lg mx-auto">
              We&apos;d love to see you! You can also order for pickup and skip the line, or just come say hi.
            </p>
            <Link
              href="/location" // Assuming you have a /location or /contact page
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-emerald-700 font-bold shadow hover:scale-[1.02] active:scale-[.98] transition"
            >
              <Store className="w-5 h-5" aria-hidden />
              Find Our Location & Hours
            </Link>
          </div>
        </section>

        {/* ---------------------------------- */}
        {/* Footer Notes */}
        {/* ---------------------------------- */}
        <footer className="text-center text-sm text-slate-600">
          <p className="mb-1">
            Please note: Menu, pricing, and promotions are managed by our delivery partners and may vary from our in-store prices.
          </p>
          <p>
            For large catering orders, please visit our catering page or contact us directly.
          </p>
        </footer>
      </div>
    </main>
  );
}