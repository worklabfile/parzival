
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MerchCard from '@/components/MerchCard';
import { merchItems } from '@/data/playerData';

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col bg-esports-black text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8 flex-grow">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Official Merchandise</h1>
          <p className="text-gray-400">Get the latest Parzival and team gear</p>
        </div>
        
        {/* Featured Product */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-esports-black to-transparent z-10"></div>
            <img src="/placeholder.svg" alt="Featured Jersey" className="w-full h-64 md:h-96 object-cover" />
            <div className="absolute top-0 left-0 p-6 md:p-12 z-20 max-w-lg">
              <div className="mb-2 inline-block px-3 py-1 bg-esports-red text-white text-sm font-bold rounded-full">NEW ARRIVAL</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">2024 Pro Player Jersey</h2>
              <p className="text-gray-200 mb-6">Official team jersey featuring Parzival's signature design. Made with premium materials for maximum comfort and performance.</p>
              <button className="bg-esports-red hover:bg-esports-darkRed text-white font-bold py-3 px-8 rounded">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        
        {/* All Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {merchItems.map((item, index) => (
              <MerchCard 
                key={index}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
        
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg h-48 group cursor-pointer">
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 z-10"></div>
              <img src="/placeholder.svg" alt="Apparel" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h3 className="text-white text-2xl font-bold">Apparel</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg h-48 group cursor-pointer">
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 z-10"></div>
              <img src="/placeholder.svg" alt="Accessories" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h3 className="text-white text-2xl font-bold">Accessories</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg h-48 group cursor-pointer">
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 z-10"></div>
              <img src="/placeholder.svg" alt="Gaming Gear" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h3 className="text-white text-2xl font-bold">Gaming Gear</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="bg-esports-darkGray rounded-lg p-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-400 mb-6 md:mb-0">
                Subscribe to get updates on new merchandise, exclusive offers, and limited edition drops.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-esports-gray border border-esports-lightGray text-white px-4 py-2 rounded-l w-full focus:outline-none focus:border-esports-red"
                />
                <button className="bg-esports-red hover:bg-esports-darkRed text-white font-bold py-2 px-4 rounded-r">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shop;
