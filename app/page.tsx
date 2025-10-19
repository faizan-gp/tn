
import type { Metadata } from 'next';
import MenuSection from '@/components/MenuSection';
import PhilosophySection from '@/components/PhilosophySection';
import FeaturedItemsSection from '@/components/FeaturedItem';
import DeliverySection from '@/components/DeliverySection';
import OurStorySection from '@/components/StorySection';
import HeroSection from '@/components/HeroSection';


export const metadata: Metadata = {
  title: 'Authentic Halal Fast Food in Webster, TX',
  description: 'Shawarma, smashed burgers, fries and more. 100% Halal. Order for pickup or delivery.',
  alternates: { canonical: '/' }
};

export default function HomePage() {

  return (
    <main className="overflow-x-hidden">
      {/* ======================= Hero Section ======================= */}
      <HeroSection />

      {/* ======================= Philosophy Section ======================= */}
      <PhilosophySection />



      {/* ======================= Full Menu Section ======================= */}
      {/* CHANGE: A highly artistic and interactive "Culinary Showcase" design */}
      <section id="menu" className="py-20 md:py-32 bg-gray-900 text-white">
        <MenuSection />

      </section>

      {/* ======================= Featured Items Section ======================= */}
      <FeaturedItemsSection />

      {/* ======================= Our Story Section ======================= */}
      <OurStorySection />

      {/* ======================= Delivery & Services Section ======================= */}
      {/* CHANGE: Added bg-white for contrast */}
      <DeliverySection />

      {/* ======================= Social Section ======================= */}
      {/* <section className="py-16 md:py-24 bg-[#ede6d5]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center reveal-on-scroll">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Follow The Flavor</h2>
          <a href="#" className="font-playfair mt-4 inline-block text-xl sm:text-2xl text-yellow-600 hover:text-yellow-700 break-words">@TandooriNookTX</a>
          <div className="mt-10 md:mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <Image src="/social-1.jpg" alt="Instagram photo of Tandoori Nook food" width={400} height={400} className="rounded-lg shadow-md aspect-square object-cover w-full h-auto" />
            <Image src="/social-2.jpg" alt="Instagram photo from Tandoori Nook" width={400} height={400} className="rounded-lg shadow-md aspect-square object-cover w-full h-auto" />
            <Image src="/social-3.jpg" alt="Instagram photo of a happy customer" width={400} height={400} className="rounded-lg shadow-md aspect-square object-cover w-full h-auto" />
            <Image src="/social-4.jpg" alt="Instagram post about a special offer" width={400} height={400} className="rounded-lg shadow-md aspect-square object-cover w-full h-auto" />
          </div>
        </div>
      </section> */}

      {/* ======================= Contact & Hours Section ======================= */}
      {/* CHANGE: Added bg-[#f5f0e4] to return to the primary brand color */}
      <section id="contact" className="py-16 md:py-24 bg-[#f5f0e4]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="reveal-on-scroll">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">Come Hang Out.</h2>
            <p className="font-inter mt-4 text-base sm:text-lg text-gray-700">We're located in the heart of Webster. Stop by for dine-in or pickup.</p>
            <div className="font-inter mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700">
              <p>
                <strong>Address:</strong><br />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=BayWay+Village+Shopping+Center%2C+20801+Gulf+Fwy+suite+5%2C+Webster%2C+TX+77598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-700 transition-colors"
                >
                  BayWay Village Shopping Center, 20801 Gulf Fwy suite 5, Webster, TX 77598, United States
                </a>
              </p>
              <p><strong>Hours:</strong><br />Open Daily: 2:00 PM – 9:40 PM</p>
              <p>
                <strong>Phone:</strong><br />
                <a href="tel:+14694049149" className="hover:text-yellow-700 transition-colors">
                  (469) 404-9149
                </a>
              </p>
            </div>
          </div>
          <div className="reveal-on-scroll h-64 sm:h-80 md:h-96 w-full rounded-lg shadow-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.625119694655!2d-95.13089362441947!3d29.527284442888288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86409c95f8654231%3A0xdbad08b775831d73!2sBayway%20Village!5e0!3m2!1sen!2smy!4v1760631302723!5m2!1sen!2smy"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </div>
      </section>
    </main>
  );
}