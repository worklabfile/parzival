import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-esports-darkGray border-t border-esports-red border-opacity-30">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Parzival</h3>
            <p className="text-gray-400">
              Профессиональный киберспортсмен, специализирующийся на соревновательной игре на высшем уровне.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-esports-red">Профиль</Link>
              </li>
              <li>
                <Link to="/achievements" className="text-gray-400 hover:text-esports-red">Достижения</Link>
              </li>
              <li>
                <Link to="/analytics" className="text-gray-400 hover:text-esports-red">Аналитика</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-esports-red">Магазин</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-esports-red">Контакты</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Социальные сети</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://twitter.com/parzival" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-esports-red">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com/parzival" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-esports-red">Instagram</a>
              </li>
              <li>
                <a href="https://twitch.tv/parzival" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-esports-red">Twitch</a>
              </li>
              <li>
                <a href="https://youtube.com/parzival" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-esports-red">YouTube</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-esports-gray">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Parzival. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
