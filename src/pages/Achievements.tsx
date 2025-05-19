import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AchievementCard from '@/components/AchievementCard';
import { achievements } from '@/data/playerData';

const Achievements = () => {
  return (
    <div className="min-h-screen flex flex-col bg-esports-black text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8 flex-grow">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Достижения</h1>
          <p className="text-gray-400">Победы на турнирах, награды и признания</p>
        </div>
        
        {/* Major Trophies Display */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-esports-red mr-2">★</span> Главные достижения
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.slice(0, 3).map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-esports-gray to-esports-darkGray p-6 rounded-lg border border-esports-red">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-esports-red flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                    <p className="text-esports-red">{achievement.tournament}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{achievement.date}</span>
                  {achievement.prize && <span className="text-yellow-400 font-bold">{achievement.prize}</span>}
                </div>
                <p className="mt-4 text-gray-400">{achievement.place}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* All Achievements */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Все достижения</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard 
                key={index}
                title={achievement.title}
                tournament={achievement.tournament}
                date={achievement.date}
                place={achievement.place}
                prize={achievement.prize}
              />
            ))}
          </div>
        </div>
        
        {/* Awards Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Награды по категориям</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-esports-red">Победы на турнирах</h3>
            <div className="trophy-grid">
              {achievements
                .filter(a => a.title.includes("1st"))
                .map((achievement, index) => (
                  <div key={index} className="bg-esports-darkGray rounded-md p-3 text-center">
                    <div className="text-yellow-500 mb-2">🏆</div>
                    <p className="text-sm text-white font-bold">{achievement.tournament}</p>
                    <p className="text-xs text-gray-400">{achievement.date}</p>
                  </div>
                ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-esports-red">Личные награды</h3>
            <div className="trophy-grid">
              {/* MVP Awards */}
              <div className="bg-esports-darkGray rounded-md p-3 text-center">
                <div className="text-yellow-500 mb-2">🏅</div>
                <p className="text-sm text-white font-bold">MVP</p>
                <p className="text-xs text-gray-400">IEM Cologne 2023</p>
              </div>
              <div className="bg-esports-darkGray rounded-md p-3 text-center">
                <div className="text-yellow-500 mb-2">🏅</div>
                <p className="text-sm text-white font-bold">HLTV Топ-5</p>
                <p className="text-xs text-gray-400">Рейтинг игроков 2023</p>
              </div>
              <div className="bg-esports-darkGray rounded-md p-3 text-center">
                <div className="text-yellow-500 mb-2">🏅</div>
                <p className="text-sm text-white font-bold">Мастер клатчей</p>
                <p className="text-xs text-gray-400">BLAST Premier 2023</p>
              </div>
              <div className="bg-esports-darkGray rounded-md p-3 text-center">
                <div className="text-yellow-500 mb-2">🏅</div>
                <p className="text-sm text-white font-bold">Любимец фанатов</p>
                <p className="text-xs text-gray-400">Выбор сообщества 2023</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Achievement Statistics */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Статистика достижений</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-esports-darkGray p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-esports-red mb-2">5</p>
              <p className="text-gray-300">Побед на турнирах</p>
            </div>
            <div className="bg-esports-darkGray p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-esports-red mb-2">2</p>
              <p className="text-gray-300">Серебряных медалей</p>
            </div>
            <div className="bg-esports-darkGray p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-esports-red mb-2">1</p>
              <p className="text-gray-300">Бронзовая медаль</p>
            </div>
            <div className="bg-esports-darkGray p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-esports-red mb-2">4</p>
              <p className="text-gray-300">Личных наград</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Achievements;
