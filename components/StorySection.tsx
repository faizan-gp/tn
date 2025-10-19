import Image from 'next/image';

export default function OurStorySection() {
  return (
    <section id="story" className="py-16 md:py-24 bg-[#ede6d4]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Image */}
          <div className="lg:col-span-1">
            <Image
              src="/our-story.webp"
              alt="The passionate waiter at Tandoori Nook holding a platter of food"
              width={800}
              height={900}
              className="w-full h-auto rounded-xl shadow-xl aspect-[4/5] object-cover"
            />
          </div>

          {/* RIGHT: Editorial Text Content */}
          <div className="lg:col-span-2">
            <div className="flex flex-col h-full">
              <p className="font-inter text-sm font-semibold uppercase tracking-[0.15em] text-yellow-600">
                Our Story
              </p>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-3">
                Born in Webster, Inspired by the World.
              </h2>
              
              {/* Decorative divider */}
              <hr className="w-24 mt-6 border-t-2 border-yellow-500/50" />

              {/* Text styled with a drop cap and columns for a magazine feel */}
              <div className="mt-6 font-inter text-slate-700 text-base sm:text-lg leading-relaxed space-y-5 md:columns-2 md:gap-10">
                <p className="
                  first-letter:text-6xl first-letter:font-bold first-letter:font-playfair 
                  first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left
                ">
                  Tandoori Nook isn't just a restaurant; it's the answer to a question we kept asking ourselves: "Where can we get amazing, Halal fast food that actually tastes exciting?" We were tired of the same old options.
                </p>
                <p>
                  So, we decided to build it ourselves. We took the flavors we loved from street carts and late-night spots around the world, brought them back home to Webster, and gave them our own American spin.
                </p>
                <p>
                  We're a family-run spot, dedicated to serving our community food that’s made with passion and integrity. Whether you're feeding your family or grabbing a late-night bite, we're here for you.
                </p>
              </div>

              {/* Signature */}
              <p className="font-playfair italic text-xl text-slate-800 mt-8 pt-6 border-t border-slate-200">
                — The Tandoori Nook Family
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}