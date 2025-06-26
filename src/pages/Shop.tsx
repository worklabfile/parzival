import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MerchCard from '@/components/MerchCard';
import CartModal from '@/components/CartModal';
import { merchItems } from '@/data/playerData';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Shop = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCartStore();
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase.from('subscribers').insert({ email });
      
      if (error) {
        if (error.code === '23505') {
          toast({
            title: 'Уже подписаны',
            description: 'Вы уже подписаны на нашу рассылку.',
            variant: 'destructive',
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: 'Подписка оформлена',
          description: 'Спасибо за подписку на нашу рассылку!',
        });
        setEmail('');
      }
    } catch (error) {
      console.error('Ошибка при оформлении подписки:', error);
      toast({
        title: 'Ошибка',
        description: 'Произошла ошибка при оформлении подписки. Пожалуйста, повторите попытку позже.',
        variant: 'destructive',
      });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-esports-black text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8 flex-grow">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Официальный Мерч</h1>
            <p className="text-gray-400">Приобретите последние новинки Parzival и командного снаряжения</p>
          </div>
          
          <Button 
            onClick={() => setIsCartOpen(true)}
            className="bg-esports-red hover:bg-esports-darkRed relative"
          >
            <ShoppingCart className="mr-2" />
            Корзина
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-esports-red rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
        
        {/* Популярный Товар */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-esports-black to-transparent z-10"></div>
            <img src="/placeholder.svg" alt="Популярный Джерси" className="w-full h-64 md:h-96 object-cover" />
            <div className="absolute top-0 left-0 p-6 md:p-12 z-20 max-w-lg">
              <div className="mb-2 inline-block px-3 py-1 bg-esports-red text-white text-sm font-bold rounded-full">НОВИНКА</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Джерси Игрока 2024</h2>
              <p className="text-gray-200 mb-6">Официальный командный джерси с дизайном от Parzival. Изготовлен из премиальных материалов для максимального комфорта и производительности.</p>
              <button className="bg-esports-red hover:bg-esports-darkRed text-white font-bold py-3 px-8 rounded">
                Купить Сейчас
              </button>
            </div>
          </div>
        </div>
        
        {/* Все Товары */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Все Товары</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {merchItems.map((item, index) => (
              <MerchCard 
                key={index}
                id={`product-${index}`}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
        
        {/* Категории */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Категории</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg h-48 group cursor-pointer">
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 z-10"></div>
              <img src="https://cdn.sportmaster.ru/upload/mdm/media_content/resize/ab2/768_1024_3a25/141974680299.jpg" alt="Одежда" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h3 className="text-white text-2xl font-bold">Одежда</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg h-48 group cursor-pointer">
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 z-10"></div>
              <img src="https://cdn1.ozone.ru/s3/multimedia-h/6711581933.jpg" alt="Аксессуары" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h3 className="text-white text-2xl font-bold">Аксессуары</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Подписка на рассылку */}
        <div className="bg-esports-gray rounded-lg p-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-2">Подпишитесь на рассылку</h2>
              <p className="text-gray-400">Получайте уведомления о новых товарах и специальных предложениях</p>
            </div>
            
            <div className="md:w-1/3">
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-esports-gray border border-esports-lightGray text-white px-4 py-2 rounded-l w-full focus:outline-none focus:border-esports-red"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-esports-red hover:bg-esports-darkRed text-white font-bold py-2 px-4 rounded-r"
                >
                  Подписаться
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      <Footer />
    </div>
  );
};

export default Shop;
