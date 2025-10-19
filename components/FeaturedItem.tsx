'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Item = {
  id: string;
  supertitle: string;
  title: string;
  description: string;
  image: string;
};

const items: Item[] = [
  {
    id: 'loaded-fries',
    supertitle: 'Heavy Hitter',
    title: 'Loaded Fries',
    description:
      'Crisp fries, molten mac, chicken tenders, pickles, jalapeños, finished with signature sauce.',
    image: '/loaded-fries-front.webp',
  },
  {
    id: 'beef-smash-burger',
    supertitle: 'Signature',
    title: 'Beef Smash Burger',
    description:
      'Juicy beef patty, smashed and seared to perfection, topped with cheese, lettuce, and our special sauce.',
    image: '/beef-smash-burger-front.webp',
  },
  {
    id: 'lamb-gyro',
    supertitle: 'Crowd Favorite',
    title: 'Lamb Gyro',
    description:
      'Tender lamb, fresh veggies, and our signature sauce, all wrapped in warm pita.',
    image: '/lamb-gyro-front.webp',
  },
  {
    id: 'crispy-wings',
    supertitle: 'Crowd Favorite',
    title: 'Next-Level Wings',
    description:
      'Ultra-crisp, juicy wings—choose from 10+ sauces, from Korean BBQ to Nashville Hot.',
    image: '/wings-front.webp',
  },
];

export default function FeaturedItemsSection() {
  const [activeId, setActiveId] = useState(items[0].id);
  const activeIndex = useMemo(
    () => Math.max(0, items.findIndex((i) => i.id === activeId)),
    [activeId]
  );
  const activeItem = items[activeIndex] ?? items[0];

  const onKeyDown = (e: React.KeyboardEvent) => {
    const idx = activeIndex;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setActiveId(items[(idx + 1) % items.length].id);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setActiveId(items[(idx - 1 + items.length) % items.length].id);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActiveId(items[0].id);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActiveId(items[items.length - 1].id);
    }
  };

  return (
    <section
      id="featured"
      className="relative bg-[#f5f0e4] text-slate-900 py-16 md:py-24"
      aria-labelledby="featured-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 md:mb-14 text-center max-w-3xl mx-auto">
          <h2
            id="featured-heading"
            className="font-playfair text-[#c8282d] text-4xl md:text-5xl font-bold tracking-tight"
          >
            Editor's Picks
          </h2>
          <p className="font-inter mt-3 text-slate-600">
            Three dishes that define the menu—tap a tab to view.
          </p>
        </div>

        {/* Tabs + description */}
        <div className="flex flex-col gap-6">
          <div
            role="tablist"
            aria-orientation="horizontal"
            onKeyDown={onKeyDown}
            className="flex justify-center gap-4 sm:gap-6 border-b border-slate-300/80"
          >
            {items.map((it) => {
              const isActive = it.id === activeId;
              return (
                <button
                  key={it.id}
                  id={`tab-${it.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${it.id}`}
                  onClick={() => setActiveId(it.id)}
                  className={[
                    'font-playfair font-bold text-lg md:text-xl relative px-2 py-3 transition-colors outline-none',
                    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900',
                    isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-800',
                  ].join(' ')}
                >
                  {it.title}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active description */}
          <div className="text-center max-w-xl mx-auto">
            <div className="flex justify-center items-center gap-2">
              <span className="font-inter text-[11px] uppercase tracking-[0.16em] text-slate-600">
                {activeItem.supertitle}
              </span>
              <span className="h-0.5 w-6 bg-slate-400/50" />
            </div>
            <p className="font-inter text-sm md:text-base text-slate-700 mt-2">
              {activeItem.description}
            </p>
            <Link
              href={`/menu/${activeItem.id}`}
              className="inline-flex items-center gap-2 mt-4 font-inter text-sm font-semibold px-4 py-2 rounded-lg border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
            >
              View Dish
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Single-stage image (only selected item is rendered) */}
          <div
            id={`panel-${activeItem.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeItem.id}`}
            className="mx-auto w-full sm:w-5/6 md:w-4/6 lg:w-1/2"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-300/60 shadow-sm bg-white">
              {/* key forces remount to ensure fresh load/transition per change */}
              <div key={activeItem.id} className="h-full w-full">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, (min-width: 768px) 60vw, (min-width: 640px) 70vw, 88vw"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
