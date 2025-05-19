
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля формы",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setLoading(true);
      
      const { error } = await supabase
        .from('messages')
        .insert({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        });
      
      if (error) throw error;
      
      toast({
        title: "Сообщение отправлено",
        description: "Мы свяжемся с вами в ближайшее время!",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Ошибка при отправке сообщения:', error);
      toast({
        title: "Не удалось отправить сообщение",
        description: "Пожалуйста, попробуйте еще раз позже",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-esports-black text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8 flex-grow">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Контакты</h1>
          <p className="text-gray-400">Свяжитесь с Parzival и командой</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Контактная информация */}
          <div className="lg:col-span-1">
            <div className="bg-esports-darkGray rounded-lg p-6 h-full">
              <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2 text-esports-red">Деловые запросы</h3>
                <p className="text-gray-300 mb-1">Email: business@parzival.gg</p>
                <p className="text-gray-300">Телефон: +7 (XXX) XXX-XX-XX</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2 text-esports-red">Для фанатов</h3>
                <p className="text-gray-300 mb-1">Email: fans@parzival.gg</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2 text-esports-red">Для СМИ</h3>
                <p className="text-gray-300 mb-1">Email: press@parzival.gg</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2 text-esports-red">Социальные сети</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-esports-red">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-esports-red">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-esports-red">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-esports-red">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.13 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.66 2.473c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2 text-esports-red">Локация команды</h3>
                <p className="text-gray-300">
                  Штаб-квартира Virtus.pro<br />
                  Москва, Россия
                </p>
              </div>
            </div>
          </div>
          
          {/* Форма обратной связи */}
          <div className="lg:col-span-2">
            <div className="bg-esports-darkGray rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Отправить сообщение</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Ваше имя</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-esports-gray border border-esports-lightGray text-white px-4 py-2 rounded focus:outline-none focus:border-esports-red"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Ваш Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-esports-gray border border-esports-lightGray text-white px-4 py-2 rounded focus:outline-none focus:border-esports-red"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-white mb-2">Тема</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-esports-gray border border-esports-lightGray text-white px-4 py-2 rounded focus:outline-none focus:border-esports-red"
                    required
                  >
                    <option value="">Выберите тему</option>
                    <option value="Фанатская почта">Фанатская почта</option>
                    <option value="Деловой запрос">Деловой запрос</option>
                    <option value="Запрос СМИ">Запрос СМИ</option>
                    <option value="Другое">Другое</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white mb-2">Ваше сообщение</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-esports-gray border border-esports-lightGray text-white px-4 py-2 rounded focus:outline-none focus:border-esports-red"
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-esports-red hover:bg-esports-darkRed text-white font-bold py-3"
                  disabled={loading}
                >
                  {loading ? "Отправка..." : "Отправить сообщение"}
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Раздел FAQ */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h2>
          
          <div className="space-y-6">
            <div className="bg-esports-darkGray rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Как запросить автограф?</h3>
              <p className="text-gray-300">
                Мы предлагаем товары с автографами через наш официальный магазин. Для личных запросов на автограф, пожалуйста, напишите на fans@parzival.gg с деталями вашего запроса.
              </p>
            </div>
            
            <div className="bg-esports-darkGray rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Предлагает ли Parzival услуги тренировок?</h3>
              <p className="text-gray-300">
                Да, Parzival иногда предлагает ограниченные тренировочные сессии. Подпишитесь на нашу рассылку, чтобы получать уведомления, когда места станут доступны.
              </p>
            </div>
            
            <div className="bg-esports-darkGray rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Как стать спонсором Parzival?</h3>
              <p className="text-gray-300">
                Для возможностей спонсорства, пожалуйста, свяжитесь с нашей бизнес-командой по адресу business@parzival.gg с информацией о вашей компании и предложением.
              </p>
            </div>
            
            <div className="bg-esports-darkGray rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Когда следующий стрим Parzival?</h3>
              <p className="text-gray-300">
                Следите за страницами Parzival в социальных сетях для получения самого актуального расписания стримов и объявлений.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
