import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Playfair_Display, Inter } from 'next/font/google';
import {
  Shield,
  Award,
  Leaf,
  Package,
  ExternalLink,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

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
  title: 'Our Story — Tandoori Nook',
  description:
    'Learn about the mission, values, and story behind Tandoori Nook. Discover our commitment to fresh, 100% Halal-certified street food.',
  openGraph: {
    title: 'Our Story — Tandoori Nook',
    description: 'We started with a simple craving and a big idea. Learn more about our fresh, Halal, flavor-engineered food.',
    images: [{ url: '/tandoori-nook-hero-square-og.jpg', width: 1200, height: 1200, alt: 'The Tandoori Nook Team' }], // You'll need to create a general OG image
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
export default function AboutPage() {
  return (
    <main className={`${sans.className} bg-[#f5f0e4] min-h-screen`}>
      <div className="container mx-auto px-6 py-8 md:py-12">
        
        {/* ---------------------------------- */}
        {/* HERO */}
        {/* ---------------------------------- */}
        <header className="mb-12 md:mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`${display.className} text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900`}>
              Where Spice Routes & City Streets Meet.
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mt-6">
              We started Tandoori Nook because we believed flavorful, fresh, 100% Halal food shouldn&apos;t be a compromise. It should be a celebration. We&apos;re a chef-driven kitchen obsessed with quality, serving the street food you crave, engineered for maximum flavor.
            </p>
          </div>
          <div className="relative aspect-[16/7] rounded-3xl overflow-hidden shadow-2xl border-4 border-white mt-12 max-w-6xl mx-auto">
            <Image
              src="/tandoori-nook-kitchen-pano.jpg" // REPLACE with a wide photo of your kitchen, team, or storefront
              alt="The Tandoori Nook kitchen staff"
              fill
              priority
              sizes="(min-width: 1280px) 1152px, 100vw"
              placeholder="blur"
              blurDataURL={BLUR}
              className="object-cover"
            />
          </div>
        </header>

        {/* ---------------------------------- */}
        {/* OUR STORY */}
        {/* ---------------------------------- */}
        <section className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/our-story-image.jpg" // REPLACE with a photo of founders or early days
                alt="Tandoori Nook founders"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                placeholder="blur"
                blurDataURL={BLUR}
                className="object-cover"
              />
            </div>
            <div className="lg:-order-1">
              <h2 className={`${display.className} text-4xl font-bold text-gray-900 mb-6`}>
                It Started With a Midnight Craving.
              </h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  Like all good stories, ours began late at night in a kitchen. We were tired of the same old options. Tired of choosing between &quot;fast&quot; and &quot;flavorful,&quot; or &quot;convenient&quot; and &quot;quality.&quot;
                </p>
                <p className="font-semibold text-slate-900">
                  We asked a simple question: &quot;What if?&quot;
                </p>
                <p>
                  What if we took the bold techniques of our tandoori heritage and applied them to the street food we loved? What if a burger had the crispy crust of a smashed patty but the spice-soul of a seekh kebab? What if nachos had the creamy, tangy, complex layers of chaat?
                </p>
                <p>
                  Tandoori Nook isn&apos;t just a restaurant; it&apos;s the answer to that question. It’s the flavor of that late-night dare, the precision of a chef-driven kitchen, and the comfort of your favorite craving, all engineered to travel.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ---------------------------------- */}
        {/* OUR PHILOSOPHY (Trust Signals) */}
        {/* ---------------------------------- */}
        <section className="mb-16 md:mb-20">
          <h2 className={`${display.className} text-4xl font-bold text-gray-900 mb-8 text-center`}>
            Our Kitchen Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">100% Halal, Always</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                This is our promise. Every ingredient, every protein, every time. We provide the peace of mind so you can focus on the flavor.
              </p>
              <a href="#" className="mt-4 text-sm text-green-700 font-semibold flex items-center gap-1">
                View Halal Certificate <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Flavor, Engineered</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We are chefs, not just cooks. We double-fry our fries, grind our beef daily, and make our sauces from scratch. Flavor isn&apos;t an accident; it&apos;s our design.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-emerald-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">A Kitchen You Can Trust</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We run an A+ Hygiene Rated, completely Nut-Free kitchen. We use separate prep stations and fryers to protect our guests.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------- */}
        {/* MEET THE TEAM */}
        {/* ---------------------------------- */}
        <section className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/our-chefs.jpg" // REPLACE with a photo of your chefs/team
                alt="The chefs of Tandoori Nook"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                placeholder="blur"
                blurDataURL={BLUR}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className={`${display.className} text-4xl font-bold text-gray-900 mb-6`}>
                The Flavor Architects
              </h2>
              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  Tandoori Nook is the brainchild of chefs and lifelong friends, including Chef Ravi and Chef Nikos. They grew up loving the sizzle of the tandoor and the satisfying crunch of a perfect fry.
                </p>
                <p>
                  They share a simple belief: food should be fun, fresh, and packed with flavor, right down to the last bite. They bring decades of culinary experience to a menu that’s both nostalgic and brand new, proving that fast food can still have a soul.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ---------------------------------- */}
        {/* FOOTER ORDER CTA */}
        {/* ---------------------------------- */}
        <section aria-label="Order now" className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl p-8 md:p-10 text-center text-white shadow-2xl mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-sm mb-4">
              <Sparkles className="w-4 h-4" aria-hidden />
              Ready to Taste the Story?
            </div>
            <h2 className={`${display.className} text-3xl md:text-4xl font-bold mb-3`}>Place Your Order for Delivery or Pickup</h2>
            <p className="text-amber-50 mb-6">
              Choose your favorite platform. We’ll get cooking.
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
          </div>
        </section>

        {/* ---------------------------------- */}
        {/* Footer Notes */}
        {/* ---------------------------------- */}
        <footer className="text-center text-sm text-slate-600">
          <p>Tandoori Nook — Flavor Engineered. 100% Halal.</p>
        </footer>
      </div>
    </main>
  );
}