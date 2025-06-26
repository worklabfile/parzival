import React from 'react';
import { X, Plus, Minus, ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const SERVICE_ID = 'service_xgzmohr'; // Заменить на свой
const TEMPLATE_ID = 'template_yhkvkd1'; // Заменить на свой
const PUBLIC_KEY = 'Pu344IAyOzx0mTsxL'; // Заменить на свой

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const cart = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalPrice = useCartStore((state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0));
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToast();

  if (!isOpen) return null;

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      toast({
        title: 'Ошибка',
        description: 'Корзина пуста. Добавьте товары перед оформлением заказа.',
        variant: 'destructive',
      });
      return;
    }
    if (!name || !email) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все поля.',
        variant: 'destructive',
      });
      return;
    }
    setIsSubmitting(true);
    try {
      // Формируем строку с заказом для письма
      const orderDetails = cart.map(item => `${item.name} x${item.quantity} — ${item.price * item.quantity} ₽`).join('\n');
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_name: name,
          to_email: email,
          order: orderDetails,
          total: totalPrice.toLocaleString() + ' ₽',
        },
        PUBLIC_KEY
      );
      toast({
        title: 'Заказ оформлен!',
        description: 'Подтверждение отправлено на ваш email.',
      });
      clearCart();
      setName('');
      setEmail('');
      onClose();
    } catch (error) {
      console.error('Ошибка при оформлении заказа:', error);
      toast({
        title: 'Ошибка',
        description: 'Произошла ошибка при оформлении заказа. Пожалуйста, повторите попытку позже.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-esports-darkGray max-w-3xl w-full rounded-lg shadow-lg overflow-hidden max-h-[90vh] flex flex-col">
        <div className="p-4 border-b border-esports-lightGray flex justify-between items-center">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ShoppingCart className="text-esports-red" />
            Корзина
          </h2>
          <button 
            onClick={onClose} 
            className="hover:bg-esports-gray p-1 rounded-full transition-all"
          >
            <X className="text-white" />
          </button>
        </div>
        
        <div className="overflow-y-auto flex-grow">
          {cart.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              <div className="mx-auto w-16 h-16 rounded-full bg-esports-gray flex items-center justify-center mb-4">
                <ShoppingCart className="w-8 h-8 text-gray-500" />
              </div>
              <p className="text-lg">Ваша корзина пуста</p>
              <p className="mt-2">Добавьте товары, чтобы оформить заказ</p>
            </div>
          ) : (
            <div className="p-4">
              {cart.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center gap-4 py-4 border-b border-esports-lightGray last:border-0"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-bold text-white">{item.name}</h3>
                    <p className="text-esports-red">{item.price.toLocaleString()} ₽</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button 
                      size="icon" 
                      variant="ghost"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="h-8 w-8 rounded-full"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    
                    <span className="w-8 text-center">{item.quantity}</span>
                    
                    <Button 
                      size="icon" 
                      variant="ghost"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-8 w-8 rounded-full"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="w-24 text-right font-bold text-white">
                    {(item.price * item.quantity).toLocaleString()} ₽
                  </div>
                  
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 hover:bg-transparent"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              
              <div className="mt-4 pt-4 border-t border-esports-lightGray">
                <div className="flex justify-between text-lg font-bold">
                  <span>Итого:</span>
                  <span className="text-esports-red">{totalPrice.toLocaleString()} ₽</span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-esports-lightGray">
          {cart.length > 0 && (
            <form onSubmit={handleOrder} className="mb-4 space-y-4">
              <div>
                <label className="block text-gray-400 mb-1">Ваше имя</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-esports-gray border border-esports-lightGray text-white px-4 py-2 rounded focus:outline-none focus:border-esports-red"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-esports-gray border border-esports-lightGray text-white px-4 py-2 rounded focus:outline-none focus:border-esports-red"
                  required
                />
              </div>
            </form>
          )}
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Продолжить покупки
            </Button>
            
            {cart.length > 0 && (
              <>
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="border-red-500 text-red-500 hover:bg-red-500/10"
                >
                  Очистить корзину
                </Button>
                
                <Button
                  onClick={handleOrder}
                  disabled={isSubmitting || !name || !email}
                  className="flex-1 bg-esports-red hover:bg-esports-darkRed"
                >
                  {isSubmitting ? 'Оформляем...' : 'Оформить заказ'}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
