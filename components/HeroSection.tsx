

import Image from 'next/image';
import { ArrowRight, Leaf, MoonStar, Users } from 'lucide-react';

export default function HeroSection() {


  return (
    <section id="home" className="bg-[#f5f0e4] overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-x-12 lg:gap-x-16 items-center min-h-[90svh] py-24 md:py-16">

        {/* --- Left Column: The Story & Actions --- */}
        <div className="relative z-10 text-center md:text-left">
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 [text-wrap:balance]">
            The <span className="text-[#c8282d]">Nook</span> Where <span className="text-[#c8282d]">Cravings</span> Win.
          </h1>
          <p className="font-inter mt-6 max-w-xl mx-auto md:mx-0 text-lg text-gray-700 leading-relaxed">
            This is your new flavor frontier. We&apos;re slinging seriously delicious food that mash up world fast food with the classics you crave. Shareable, stackable, and seriously addictive food cooked for your crew.
          </p>

          {/* --- Feature Tags --- */}
          <div className="mt-8 flex items-center justify-center md:justify-start gap-4 flex-wrap">
            <div className="flex items-center gap-2 bg-green-100 text-green-800 text-sm font-semibold px-3 py-1.5 rounded-full">
              <Leaf size={16} />
              <span>100% Halal Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1.5 rounded-full">
              <MoonStar size={16} />
              <span>Late-Night Eats</span>
            </div>
            <div className="flex items-center gap-2 bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1.5 rounded-full">
              <Users size={16} />
              <span>Family Friendly</span>
            </div>
          </div>

          {/* --- Primary Action Buttons --- */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a href="#delivery" className="font-inter font-bold bg-gray-900 text-white px-8 py-4 rounded-full shadow-lg hover:bg-black transition-transform duration-300 hover:scale-105 w-full sm:w-auto text-center">
              Order Pickup
            </a>
            <a href="#delivery" className="font-inter font-bold bg-yellow-500 text-gray-900 px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition-transform duration-300 hover:scale-105 w-full sm:w-auto text-center">
              Order Delivery
            </a>
          </div>

          <div className="mt-6 text-center md:text-left">
            <a href="#menu" className="font-inter group font-semibold text-gray-600 hover:text-gray-900 inline-flex items-center transition-colors">
              <span>Or, see the full menu</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

        </div>

        {/* --- Right Column: The "Mini-Gallery" --- */}
        <div className="relative grid grid-cols-2 gap-4 w-full mt-16 md:mt-0">
          {/* Image 1: Shawarma */}
          <a href="/menu/chicken-shawarma" className="group relative block overflow-hidden rounded-2xl shadow-lg aspect-square">
            <Image
              src="/chicken-shawarma.webp" // ACTION: Replace with a high-quality photo
              alt="A delicious Chicken Shawarma wrap"
              fill sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h3 className="absolute bottom-4 left-4 font-playfair text-xl font-bold text-white">Shawarma</h3>
          </a>

          {/* Image 2: Loaded Fries */}
          <a href="/menu/loaded-fries" className="group relative block overflow-hidden rounded-2xl shadow-lg aspect-square mt-8">
            <Image
              src="/loaded-fries.webp" // ACTION: Replace with a high-quality photo
              alt="A platter of Loaded Fries"
              fill sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h3 className="absolute bottom-4 left-4 font-playfair text-xl font-bold text-white">Loaded Fries</h3>
          </a>

          {/* Image 3: Wings */}
          <a href="/menu/beef-smashed-burger" className="group relative block overflow-hidden rounded-2xl shadow-lg aspect-square">
            <Image
              src="/beef-smashed-burger.webp" // ACTION: Replace with a high-quality photo
              alt="A delicious Beef Smashed Burger"
              fill sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h3 className="absolute bottom-4 left-4 font-playfair text-xl font-bold text-white">Beef Smashed Burger</h3>
          </a>

          {/* Image 4: Gyro */}
          <a href="/menu/lamb-gyro" className="group relative block overflow-hidden rounded-2xl shadow-lg aspect-square mt-8">
            <Image
              src="/lamb-gyro.webp" // ACTION: Replace with a high-quality photo
              alt="A fresh Lamb Gyro"
              fill sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h3 className="absolute bottom-4 left-4 font-playfair text-xl font-bold text-white">Gyro</h3>
          </a>
        </div>
      </div>
    </section>
  );
}