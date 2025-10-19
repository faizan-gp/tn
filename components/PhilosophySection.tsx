import Image from 'next/image';

// NOTE: These are simple, hand-drawn style icons.
const SpiceDoodle = () => <svg className="w-12 h-12 text-yellow-700/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 00-4 4c0 3 4 6 4 6s4-3 4-6a4 4 0 00-4-4z"></path><path d="M10.29 10.29c-1.42 1.42-3.71 1.42-5.12 0s-1.42-3.71 0-5.12"></path><path d="M13.71 10.29c1.42 1.42 3.71 1.42 5.12 0s1.42-3.71 0-5.12"></path></svg>;
const MapDoodle = () => <svg className="w-16 h-16 text-yellow-700/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"></path><path d="M8 2v16"></path><path d="M16 6v16"></path></svg>;


export default function PhilosophySection() {

  return (
    // ======================= Philosophy Section =======================
    // CHANGE: A completely unique, artistic "Founder's Sketchbook" concept.
    <section id="philosophy" className="py-24 md:py-40 bg-[#ede6d4] overflow-hidden">
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 reveal-on-scroll">
    
    <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
      <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
        From Our <span className="text-[#c8282d]">Sketchbook</span> to Your <span className="text-[#c8282d]">Table</span>
      </h2>
      <p className="font-inter mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
        Tandoori Nook wasn&apos;t just built, it was discovered. This is the story of our expedition, straight from the pages where it all began.
      </p>
    </div>

    {/* The Sketchbook Pages */}
    <div className="space-y-24">
        
        {/* --- Chapter I: The Craving --- */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative w-full max-w-md mx-auto h-80 md:h-96">
                <Image src="/face-table.webp" alt="A photo of delicious shawarma on a table" fill className="object-cover rounded-lg shadow-2xl transform -rotate-3" />
                <p className="font-caveat absolute -bottom-4 -right-4 bg-white shadow-lg p-2 text-lg text-gray-800 transform rotate-2">Made to order, every time.</p>
            </div>
            <div className="text-center md:text-left">
                <p className="font-playfair text-2xl text-yellow-700 font-bold">Chapter I</p>
                <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-800 mt-2">The <span className='text-[#c8282d]'>Craving</span></h3>
                <p className="font-inter mt-4 text-gray-700 leading-relaxed">
                  It all started with a hunger, not just for food, but for something *more*. We looked around and saw a world of incredible street food, but the exciting, bold, Halal options we craved felt a world away. So, we asked a dangerous question: &quot;What if we built it ourselves?&quot;
                </p>
            </div>
        </div>
        
        {/* --- Chapter II: The Expedition (Corrected) --- */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center pt-16">
             {/* Decorative Doodle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 opacity-60">
                <MapDoodle />
            </div>
            {/* The image is now first in the source order */}
            <div className="relative w-full max-w-md mx-auto h-80 md:h-96">
                <Image src="/spices-table.webp" alt="A photo of vibrant spices on a table" fill className="object-cover rounded-lg shadow-2xl transform rotate-2" />
                 <p className="font-caveat absolute -bottom-4 -left-4 bg-white shadow-lg p-2 text-lg text-gray-800 transform -rotate-1">The magic ingredients.</p>
            </div>
            {/* The text is now second */}
            <div className="text-center md:text-right">
                <p className="font-playfair text-2xl text-yellow-700 font-bold">Chapter II</p>
                <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-800 mt-2">The <span className='text-[#c8282d]'>Expedition</span></h3>
                <p className="font-inter mt-4 text-gray-700 leading-relaxed">
                  Our compass was simple: follow the flavor. We journeyed through recipes from bustling global markets, deconstructing what made them legendary. We then remixed those spices and techniques with the American classics we couldn&apos;t live without. The one non-negotiable rule on our map? **100% Halal.** It was our true north, guiding every decision.
                </p>
            </div>
        </div>
        
        {/* --- Chapter III: The Craft --- */}
         <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center pt-16">
             {/* Decorative Doodle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 opacity-60">
                <SpiceDoodle />
            </div>
            <div className="relative w-full max-w-md mx-auto h-80 md:h-96">
                <Image src="/best-sellers.webp" alt="A photo of best selling food" fill className="object-cover rounded-lg shadow-2xl transform -rotate-1" />
                 <p className="font-caveat absolute -top-4 -right-4 bg-yellow-400 p-2 text-lg text-gray-900 transform rotate-3">Our Speciality...</p>
            </div>
            <div className="text-center md:text-left">
                <p className="font-playfair text-2xl text-yellow-700 font-bold">Chapter III</p>
                <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-800 mt-2">The <span className='text-[#c8282d]'>Craft</span></h3>
                <p className="font-inter mt-4 text-gray-700 leading-relaxed">
                  The final destination of our expedition is your plate. We believe the treasure we found should never sit under a heat lamp. Every order is a fresh start, a new creation crafted just for you. This isn&apos;t just fast food; it&apos;s food made with passion, served fresh and ridiculously delicious, every single time.
                </p>
            </div>
        </div>

    </div>
  </div>
</section>
  );
}