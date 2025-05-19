
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Player Profile</h1>
          <p className="text-gray-400">Complete information about Parzival</p>
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
                  <p className="text-gray-400 text-sm">Real Name</p>
                  <p className="text-white">{playerInfo.realName}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Nationality</p>
                  <p className="text-white">{playerInfo.nationality}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Age</p>
                  <p className="text-white">{playerInfo.age}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Team</p>
                  <p className="text-white">{playerInfo.team}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Role</p>
                  <p className="text-white">{playerInfo.role}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Years Active</p>
                  <p className="text-white">{playerInfo.yearsActive}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Biography</h3>
                <p className="text-gray-300 whitespace-pre-line">{playerInfo.biography}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Player Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <StatCard title="Rating" value={playerStats.rating} className="bg-esports-gray" />
            <StatCard title="K/D Ratio" value={playerStats.kd} className="bg-esports-gray" />
            <StatCard title="DPR" value={playerStats.dpr} className="bg-esports-gray" />
            <StatCard title="KPR" value={playerStats.kpr} className="bg-esports-gray" />
            <StatCard title="Impact" value={playerStats.impact} className="bg-esports-gray" />
            <StatCard title="K/D Diff" value={playerStats.kdDiff} className="bg-esports-gray" />
          </div>
          
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <StatCard title="Total Kills" value={playerStats.totalKills} />
            <StatCard title="Total Deaths" value={playerStats.totalDeaths} />
            <StatCard title="Headshot %" value={playerStats.headshots} />
            <StatCard title="Maps Played" value={playerStats.mapsPlayed} />
            <StatCard title="Rounds Played" value={playerStats.roundsPlayed} />
            <StatCard title="Win Rate" value={playerStats.winRate} />
          </div>
        </div>
        
        {/* Gaming Setup */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Gaming Setup</h2>
          <div className="bg-esports-darkGray rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-2 text-esports-red">Hardware</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Mouse</span>
                    <span className="text-white">SteelSeries Prime Pro</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Keyboard</span>
                    <span className="text-white">HyperX Alloy Origins</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Headset</span>
                    <span className="text-white">SteelSeries Arctis Pro</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Monitor</span>
                    <span className="text-white">BenQ ZOWIE XL2546</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Chair</span>
                    <span className="text-white">Secretlab TITAN Evo</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-esports-red">PC Specs</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-400">CPU</span>
                    <span className="text-white">Intel Core i9-13900K</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">GPU</span>
                    <span className="text-white">NVIDIA RTX 4090</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">RAM</span>
                    <span className="text-white">32GB DDR5 6000MHz</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Storage</span>
                    <span className="text-white">2TB NVMe SSD</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Motherboard</span>
                    <span className="text-white">ASUS ROG Maximus Z790</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-esports-red">Game Settings</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Resolution</span>
                    <span className="text-white">1920x1080</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Refresh Rate</span>
                    <span className="text-white">240Hz</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">DPI</span>
                    <span className="text-white">400</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Sensitivity</span>
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
          <h2 className="text-2xl font-bold mb-4">Career Timeline</h2>
          <div className="relative border-l-2 border-esports-red pl-6 ml-4">
            <div className="mb-8 relative">
              <div className="absolute -left-8 w-4 h-4 rounded-full bg-esports-red"></div>
              <div className="bg-esports-darkGray p-4 rounded-md">
                <h3 className="text-white font-bold mb-1">2024 - Present</h3>
                <p className="text-esports-red mb-2">Virtus.pro</p>
                <p className="text-gray-300">Led the team to multiple international tournament victories, including IEM Katowice 2024 and BLAST Premier: World Final 2023.</p>
              </div>
            </div>
            <div className="mb-8 relative">
              <div className="absolute -left-8 w-4 h-4 rounded-full bg-esports-red"></div>
              <div className="bg-esports-darkGray p-4 rounded-md">
                <h3 className="text-white font-bold mb-1">2022 - 2023</h3>
                <p className="text-esports-red mb-2">Team Spirit</p>
                <p className="text-gray-300">Developed into a star player, consistently performing at the top level and gaining international recognition.</p>
              </div>
            </div>
            <div className="mb-8 relative">
              <div className="absolute -left-8 w-4 h-4 rounded-full bg-esports-red"></div>
              <div className="bg-esports-darkGray p-4 rounded-md">
                <h3 className="text-white font-bold mb-1">2020 - 2022</h3>
                <p className="text-esports-red mb-2">forZe</p>
                <p className="text-gray-300">Started professional career, quickly showing promise and helping the team secure several regional victories.</p>
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
