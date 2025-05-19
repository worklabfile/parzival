import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatCard from '@/components/StatCard';
import { playerInfo, playerStats } from '@/data/playerData';

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-esports-black text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8 flex-grow">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Профиль игрока</h1>
          <p className="text-gray-400">Полная информация о Parzival</p>
        </div>
        
        {/* Player Info Card */}
        <div className="bg-esports-darkGray rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3 p-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-esports-red opacity-10 blur-lg rounded-full"></div>
                <img 
                  src={playerInfo.avatar} 
                  alt={playerInfo.name} 
                  className="w-full h-80 object-cover rounded-md border-2 border-esports-red"
                />
              </div>
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold">{playerInfo.name}</h2>
                <div className="ml-3 px-3 py-1 bg-esports-red rounded-full text-white text-xs font-bold">
                  PRO PLAYER
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-gray-400 text-sm">Настоящее имя</p>
                  <p className="text-white">{playerInfo.realName}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Национальность</p>
                  <p className="text-white">{playerInfo.nationality}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Возраст</p>
                  <p className="text-white">{playerInfo.age}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Команда</p>
                  <p className="text-white">{playerInfo.team}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Роль</p>
                  <p className="text-white">{playerInfo.role}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Лет в игре</p>
                  <p className="text-white">{playerInfo.yearsActive}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Биография</h3>
                <p className="text-gray-300 whitespace-pre-line">
                  Parzival начал свою карьеру в киберспорте в возрасте 17 лет, быстро поднявшись по карьерной лестнице соревновательной игры. Известный своими необычайными рефлексами и стратегическим мышлением, он стал одним из самых грозных игроков в профессиональной сцене.

                  После присоединения к Virtus.pro в 2023 году, Parzival привел свою команду к множеству чемпионских побед. Его фирменный агрессивный стиль игры и выдающиеся выступления в ситуациях высокого давления заслужили ему репутацию одного из самых надежных игроков в критических моментах.

                  Помимо технических навыков, Parzival известен своей преданностью игре, часто проводя более 10 часов в день, совершенствуя свое мастерство. Его рабочая этика и страсть к соревнованиям сделали его образцом для подражания для начинающих киберспортсменов по всему миру.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Статистика игрока</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <StatCard title="Рейтинг" value={playerStats.rating} className="bg-esports-gray" />
            <StatCard title="K/D" value={playerStats.kd} className="bg-esports-gray" />
            <StatCard title="DPR" value={playerStats.dpr} className="bg-esports-gray" />
            <StatCard title="KPR" value={playerStats.kpr} className="bg-esports-gray" />
            <StatCard title="Влияние" value={playerStats.impact} className="bg-esports-gray" />
            <StatCard title="Разница K/D" value={playerStats.kdDiff} className="bg-esports-gray" />
          </div>
          
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <StatCard title="Всего убийств" value={playerStats.totalKills} />
            <StatCard title="Всего смертей" value={playerStats.totalDeaths} />
            <StatCard title="Хедшоты %" value={playerStats.headshots} />
            <StatCard title="Сыграно карт" value={playerStats.mapsPlayed} />
            <StatCard title="Сыграно раундов" value={playerStats.roundsPlayed} />
            <StatCard title="Процент побед" value={playerStats.winRate} />
          </div>
        </div>
        
        {/* Gaming Setup */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Игровая настройка</h2>
          <div className="bg-esports-darkGray rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-2 text-esports-red">Периферия</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Мышь</span>
                    <span className="text-white">SteelSeries Prime Pro</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Клавиатура</span>
                    <span className="text-white">HyperX Alloy Origins</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Наушники</span>
                    <span className="text-white">SteelSeries Arctis Pro</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Монитор</span>
                    <span className="text-white">BenQ ZOWIE XL2546</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Кресло</span>
                    <span className="text-white">Secretlab TITAN Evo</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-esports-red">Характеристики ПК</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Процессор</span>
                    <span className="text-white">Intel Core i9-13900K</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Видеокарта</span>
                    <span className="text-white">NVIDIA RTX 4090</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Оперативная память</span>
                    <span className="text-white">32GB DDR5 6000MHz</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Накопитель</span>
                    <span className="text-white">2TB NVMe SSD</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Материнская плата</span>
                    <span className="text-white">ASUS ROG Maximus Z790</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-esports-red">Игровые настройки</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Разрешение</span>
                    <span className="text-white">1920x1080</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Частота обновления</span>
                    <span className="text-white">240Гц</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">DPI</span>
                    <span className="text-white">400</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Чувствительность</span>
                    <span className="text-white">1.8</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">eDPI</span>
                    <span className="text-white">720</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Career Timeline */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Карьерный путь</h2>
          <div className="relative border-l-2 border-esports-red pl-6 ml-4">
            <div className="mb-8 relative">
              <div className="absolute -left-8 w-4 h-4 rounded-full bg-esports-red"></div>
              <div className="bg-esports-darkGray p-4 rounded-md">
                <h3 className="text-white font-bold mb-1">2024 - Настоящее время</h3>
                <p className="text-esports-red mb-2">Virtus.pro</p>
                <p className="text-gray-300">Привел команду к победам на нескольких международных турнирах, включая IEM Katowice 2024 и BLAST Premier: World Final 2023.</p>
              </div>
            </div>
            <div className="mb-8 relative">
              <div className="absolute -left-8 w-4 h-4 rounded-full bg-esports-red"></div>
              <div className="bg-esports-darkGray p-4 rounded-md">
                <h3 className="text-white font-bold mb-1">2022 - 2023</h3>
                <p className="text-esports-red mb-2">Team Spirit</p>
                <p className="text-gray-300">Развился в звездного игрока, стабильно показывая высокий уровень игры и получив международное признание.</p>
              </div>
            </div>
            <div className="mb-8 relative">
              <div className="absolute -left-8 w-4 h-4 rounded-full bg-esports-red"></div>
              <div className="bg-esports-darkGray p-4 rounded-md">
                <h3 className="text-white font-bold mb-1">2020 - 2022</h3>
                <p className="text-esports-red mb-2">forZe</p>
                <p className="text-gray-300">Начал профессиональную карьеру, быстро проявив потенциал и помог команде завоевать несколько региональных побед.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Profile;
