

import { EggFried, Drumstick, ShoppingBasket, GlassWater } from 'lucide-react'; // Make sure to install lucide-react

// --- Menu Data Object ---
const menuData = {
  mainEvent: [
    { name: 'Chicken Shawarma', description: 'Spiced, slow-cooked chicken, garlic sauce, crisp veggies, all wrapped in a soft pita.', price: 12, options: { text: 'Sauces: White / Spicy', style: 'yellow' }, slug: 'chicken-shawarma' },
    { name: 'Lamb Gyro', description: 'Tender gyro slices, fresh tabbouleh, creamy tzatziki, tucked into a warm pita.', price: 13, options: { text: 'Authentic Flavor', style: 'blue' }, slug: 'lamb-gyro' },
    { name: 'Chicken Burger', description: 'Juicy chicken patty, fresh lettuce, and tomato on a soft bun. Served with crinkle-cut fries.', price: 11, options: { text: 'Served with Fries', style: 'yellow' }, slug: 'chicken-burger' },
    { name: 'Hot Dog', description: 'A classic all-beef frank, grilled to perfection.', price: 8, options: { text: 'Style: Regular / Spicy', style: 'red' }, slug: 'hot-dog' },
  ],
  wingBar: [
    { name: 'Crispy Wings', description: 'Fried to perfection and tossed in your choice of our signature sauces.', price: 14, options: { text: '10+ Sauce Options', style: 'blue' }, slug: 'crispy-wings', details: ['Sauces: Korean BBQ, Garlic Parmesan, Mango Habanero, Boom Boom, Nashville Hot, Buffalo, Hot Honey, Spicy Peach.', 'Combos: Korean BBQ & Parm, Buffalo & Parm, Hot Honey & Parm.'] },
  ],
  sharablesAndSides: [
    { name: 'Loaded Fries', description: 'A mountain of our crispy golden fries piled high with creamy mac & cheese, chopped chicken tenders, tangy pickles, spicy jalapeños, and a generous drizzle of our signature sauce.', price: 14, options: { text: 'Size: Half / Full', style: 'blue' }, slug: 'loaded-fries' },
    { name: 'Garlic Fries', description: 'Warning: highly addictive. Our crispy fries get a serious flavor punch from fresh minced garlic and chopped parsley.', price: 7, options: { text: 'Fan Favorite', style: 'yellow' }, slug: 'garlic-fries' },
    { name: 'Onion Rings', description: 'Thick-cut sweet onions, fried to a satisfying golden-brown crunch. Perfect for dipping.', price: 6, options: { text: 'Perfectly Crispy', style: 'yellow' }, slug: 'onion-rings' },
    { name: 'Mac n Cheese', description: 'The ultimate comfort food. Ultra-creamy macaroni bathed in a rich, velvety cheese sauce.', price: 6, options: { text: 'Ultra Creamy', style: 'blue' }, slug: 'mac-and-cheese' },
    { name: 'Cheese Sticks', description: 'Crispy on the outside, with a satisfyingly gooey, cheesy pull on the inside. Served with tangy marinara for dipping.', price: 8, options: { text: 'Gooey & Crispy', style: 'yellow' }, slug: 'cheese-sticks' },
    { name: 'Turkish Salad', description: 'A super fresh and vibrant chop of parsley, tomatoes, and onions, tossed with herbs and a zesty lemon dressing. The perfect light bite.', price: 7, options: { text: 'Light & Zesty', style: 'blue' }, slug: 'turkish-salad' },
    { name: 'Tandoori Nook Nachos', description: 'No shortcuts, all flavor. A massive pile of crispy tortilla chips loaded with savory toppings for an instant snack attack.', price: 10, options: { text: 'Made for Sharing', style: 'red' }, slug: 'tandoori-nook-nachos' },
  ],
  coldDrinks: [
      { name: 'Pepsi', price: 2.20, slug: 'pepsi' },
      { name: 'Diet Pepsi', price: 2.20, slug: 'diet-pepsi' },
      { name: 'Coca-Cola', price: 2.20, slug: 'coca-cola' },
      { name: 'Diet Coke', price: 2.20, slug: 'diet-coke' },
      { name: 'Sprite', price: 2.20, slug: 'sprite' },
      { name: 'Sunkist Orange', price: 2.20, slug: 'sunkist-orange' },
      { name: 'Brisk Iced Tea', price: 2.20, slug: 'brisk-iced-tea' },
  ]
};

// --- Helper Component for the colored "pills" ---
const OptionPill = ({ text, style }: { text: string; style: 'yellow' | 'red' | 'blue' }) => {
  const styles = {
    yellow: 'bg-yellow-100 text-yellow-800 ring-1 ring-inset ring-yellow-200',
    red: 'bg-red-100 text-red-800 ring-1 ring-inset ring-red-200',
    blue: 'bg-blue-100 text-blue-800 ring-1 ring-inset ring-blue-200',
  };
  return <div className="mt-2 pl-10"><span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${styles[style]}`}>{text}</span></div>;
};

// --- Main Menu Section Component ---
export default function MenuSection() {
  return (
    <section id="menu" className="py-20 md:py-32 bg-[#f5f0e4]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <div className="text-center mb-16 md:mb-20">
          <p className="font-inter text-yellow-700 font-semibold tracking-widest">OUR MENU</p>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-gray-800 tracking-tight mt-2">The <span className="text-[#c8282d]">Art of Flavor</span> </h2>
          <p className="font-inter max-w-2xl mx-auto mt-4 text-lg text-gray-600">Hand-crafted, 100% Halal, and unapologetically bold. This is our canvas.</p>
        </div>

        {/* CHANGE: The grid is now lg:grid-cols-3 for better balance on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-12">
          
          {/* --- Column 1: Mains --- */}
          <div>
            <h3 className="font-playfair text-4xl font-bold text-gray-800 mb-8">The Main Event</h3>
            <div className="space-y-4">
              {menuData.mainEvent.map((item) => (
                <a href={`/menu/${item.slug}`} key={item.name} className="group block p-4 -m-4 rounded-lg transition-colors duration-300 hover:bg-white/60 hover:shadow-lg">
                  <div className="flex justify-between items-baseline">
                    <div className="flex items-center gap-4">
                      <EggFried className="h-6 w-6 text-gray-400 transition-colors duration-300 group-hover:text-yellow-700" />
                      <h4 className="font-playfair text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-yellow-700">{item.name}</h4>
                    </div>
                    <div className="flex-grow mx-4 border-b border-dashed border-gray-400"></div>
                    <span className="font-inter font-bold text-lg text-gray-800">${item.price.toFixed(2)}</span>
                  </div>
                  {item.description && <p className="font-inter mt-1 text-gray-600 pl-10">{item.description}</p>}
                  {item.options && <OptionPill text={item.options.text} style={item.options.style as 'yellow' | 'red' | 'blue'} />}
                </a>
              ))}
            </div>
          </div>
          
          {/* --- Column 2: Wings & Sharables --- */}
          <div>
            <h3 className="font-playfair text-4xl font-bold text-gray-800 mb-8">Wing Bar</h3>
            <div className="space-y-4">
              {menuData.wingBar.map((item) => (
                <a href={`/menu/${item.slug}`} key={item.name} className="group block p-4 -m-4 rounded-lg transition-colors duration-300 hover:bg-white/60 hover:shadow-lg">
                  <div className="flex justify-between items-baseline">
                    <div className="flex items-center gap-4">
                      <Drumstick className="h-6 w-6 text-gray-400 transition-colors duration-300 group-hover:text-yellow-700" />
                      <h4 className="font-playfair text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-yellow-700">{item.name}</h4>
                    </div>
                    <div className="flex-grow mx-4 border-b border-dashed border-gray-400"></div>
                    <span className="font-inter font-bold text-lg text-gray-800">${item.price.toFixed(2)}</span>
                  </div>
                  {item.description && <p className="font-inter mt-1 text-gray-600 pl-10">{item.description}</p>}
                  {item.options && <OptionPill text={item.options.text} style={item.options.style as 'yellow' | 'red' | 'blue'} />}
                  {item.details && item.details.map((detail, index) => (
                    <p key={index} className="font-inter mt-2 text-sm text-gray-700 pl-10"><strong>{detail.split(':')[0]}:</strong>{detail.split(':')[1]}</p>
                  ))}
                </a>
              ))}
            </div>

            <h3 className="font-playfair text-4xl font-bold text-gray-800 mt-12 mb-8">Sharables</h3>
            <div className="space-y-4">
              {menuData.sharablesAndSides.slice(0, 3).map((item) => ( // Display first 3 sharables here
                 <a href={`/menu/${item.slug}`} key={item.name} className="group block p-4 -m-4 rounded-lg transition-colors duration-300 hover:bg-white/60 hover:shadow-lg">
                  <div className="flex justify-between items-baseline">
                    <div className="flex items-center gap-4">
                      <ShoppingBasket className="h-6 w-6 text-gray-400 transition-colors duration-300 group-hover:text-yellow-700" />
                      <h4 className="font-playfair text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-yellow-700">{item.name}</h4>
                    </div>
                    <div className="flex-grow mx-4 border-b border-dashed border-gray-400"></div>
                    <span className="font-inter font-bold text-lg text-gray-800">${item.price.toFixed(2)}</span>
                  </div>

                  {item.description && <p className="font-inter mt-1 text-gray-600 pl-10">{item.description}</p>}
                  {item.options && <OptionPill text={item.options.text} style={item.options.style as 'yellow' | 'red' | 'blue'} />}
                </a>
              ))}
            </div>
          </div>

          {/* --- Column 3: More Sides & Drinks --- */}
          <div>
            <h3 className="font-playfair text-4xl font-bold text-gray-800 mb-8">More Sides</h3>
            <div className="space-y-4">
              {menuData.sharablesAndSides.slice(3).map((item) => ( // Display the rest of the sides here
                 <a href={`/menu/${item.slug}`} key={item.name} className="group block p-4 -m-4 rounded-lg transition-colors duration-300 hover:bg-white/60 hover:shadow-lg">
                  <div className="flex justify-between items-baseline">
                    <div className="flex items-center gap-4">
                      <ShoppingBasket className="h-6 w-6 text-gray-400 transition-colors duration-300 group-hover:text-yellow-700" />
                      <h4 className="font-playfair text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-yellow-700">{item.name}</h4>
                    </div>
                    <div className="flex-grow mx-4 border-b border-dashed border-gray-400"></div>
                    <span className="font-inter font-bold text-lg text-gray-800">${item.price.toFixed(2)}</span>
                  </div>

                  {item.description && <p className="font-inter mt-1 text-gray-600 pl-10">{item.description}</p>}
                  {item.options && <OptionPill text={item.options.text} style={item.options.style as 'yellow' | 'red' | 'blue'} />}
                </a>
              ))}
            </div>

            <h3 className="font-playfair text-4xl font-bold text-gray-800 mt-12 mb-8">Cold Drinks</h3>
            <div className="space-y-4">
              {menuData.coldDrinks.map((item) => (
                 <div key={item.name} className="p-4 -m-4 rounded-lg">
                  <div className="flex justify-between items-baseline">
                    <div className="flex items-center gap-4">
                      <GlassWater className="h-6 w-6 text-gray-400" />
                      <h4 className="font-playfair text-xl font-bold text-gray-900">{item.name}</h4>
                    </div>
                    <div className="flex-grow mx-4 border-b border-dashed border-gray-400"></div>
                    <span className="font-inter font-bold text-lg text-gray-800">${item.price.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}