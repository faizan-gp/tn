import Image from 'next/image';
import { ShoppingBag, Truck } from 'lucide-react'; // Assuming you have lucide-react installed

export default function DeliverySection() {
  return (
    <section id="delivery" className="py-16 md:py-24 bg-white text-slate-800">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold tracking-tight">
            Get Your Fix, Your Way.
          </h2>
          <p className="font-inter mt-4 text-lg text-slate-600 leading-relaxed">
            Whether you're stopping by or staying in, we've made it easier than ever to enjoy your Tandoori Nook favorites. Hot, fresh, and ready when you are.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-12 items-center">
          {/* IMAGE on the left */}
          <div className="lg:col-span-3">
            <Image
              src="/delivery-photo.webp" // Ensure this path is correct
              width={1000}
              height={750}
              className="w-full h-auto rounded-2xl object-cover shadow-2xl aspect-[4/3]"
              alt="Tandoori Nook food packaged for delivery"
            />
          </div>

          {/* CARDS on the right */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Pickup Card */}
            <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-8 shadow-lg transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-4">
                <div className="grid place-items-center h-12 w-12 rounded-full bg-amber-500 text-white">
                  <ShoppingBag size={24} />
                </div>
                <h3 className="font-playfair font-bold text-3xl">Pickup</h3>
              </div>
              <p className="font-inter text-slate-600 mt-4">
                Order ahead online and grab it to go. Perfect for a quick, delicious meal on the move.
              </p>
              <a
                href="#"
                className="font-inter mt-6 inline-block w-full text-center font-bold bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors shadow-md"
              >
                Order for Pickup
              </a>
            </div>

            {/* Delivery Card */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-lg text-white transition-transform hover:scale-[1.02]">
              <div className="flex items-center gap-4">
                 <div className="grid place-items-center h-12 w-12 rounded-full bg-slate-600 text-white">
                  <Truck size={24} />
                </div>
                <h3 className="font-playfair font-bold text-3xl">Delivery</h3>
              </div>
              <p className="font-inter text-slate-300 mt-4">
                Get your favorites delivered right to your door via our partners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a
                  href="#"
                  className="font-inter w-full text-center font-bold bg-white text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  UberEats
                </a>
                <a
                  href="#"
                  className="font-inter w-full text-center font-bold bg-white text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  DoorDash
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}