
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatCard from '@/components/StatCard';
import PerformanceChart from '@/components/PerformanceChart';
import { playerStats, performanceData } from '@/data/playerData';

const Analytics = () => {
  return (
    <div className="min-h-screen flex flex-col bg-esports-black text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8 flex-grow">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Performance Analytics</h1>
          <p className="text-gray-400">In-depth statistics and performance metrics</p>
        </div>
        
        {/* Key Metrics */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Performance Metrics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <StatCard title="Rating" value={playerStats.rating} className="bg-gradient-to-br from-esports-darkGray to-esports-gray border border-esports-red" />
            <StatCard title="K/D Ratio" value={playerStats.kd} className="bg-gradient-to-br from-esports-darkGray to-esports-gray" />
            <StatCard title="DPR" value={playerStats.dpr} className="bg-gradient-to-br from-esports-darkGray to-esports-gray" />
            <StatCard title="KPR" value={playerStats.kpr} className="bg-gradient-to-br from-esports-darkGray to-esports-gray" />
            <StatCard title="Impact" value={playerStats.impact} className="bg-gradient-to-br from-esports-darkGray to-esports-gray" />
            <StatCard title="Headshot %" value={playerStats.headshots} className="bg-gradient-to-br from-esports-darkGray to-esports-gray" />
          </div>
        </div>
        
        {/* Performance Chart */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Performance Trends (2023-2024)</h2>
          <PerformanceChart data={performanceData} />
        </div>
        
        {/* Detailed Stats */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Detailed Statistics</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* First Column */}
            <div className="bg-esports-darkGray rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Weapon Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">AK-47</span>
                    <span className="text-esports-red font-bold">86%</span>
                  </div>
                  <div className="w-full bg-esports-gray rounded-full h-2">
                    <div className="bg-esports-red h-2 rounded-full" style={{ width: '86%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">AWP</span>
                    <span className="text-esports-red font-bold">78%</span>
                  </div>
                  <div className="w-full bg-esports-gray rounded-full h-2">
                    <div className="bg-esports-red h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">M4A4</span>
                    <span className="text-esports-red font-bold">82%</span>
                  </div>
                  <div className="w-full bg-esports-gray rounded-full h-2">
                    <div className="bg-esports-red h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">Desert Eagle</span>
                    <span className="text-esports-red font-bold">74%</span>
                  </div>
                  <div className="w-full bg-esports-gray rounded-full h-2">
                    <div className="bg-esports-red h-2 rounded-full" style={{ width: '74%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">USP-S</span>
                    <span className="text-esports-red font-bold">68%</span>
                  </div>
                  <div className="w-full bg-esports-gray rounded-full h-2">
                    <div className="bg-esports-red h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Second Column */}
            <div className="bg-esports-darkGray rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Map Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">Inferno</span>
                    <span className="text-esports-red font-bold">92%</span>
                  </div>
                  <div className="w-full bg-esports-gray rounded-full h-2">
                    <div className="bg-esports-red h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">Mirage</span>
                    <span className="text-esports-red font-bold">88%</span>
                  </div>
                  <div className="w-full bg-esports-gray rounded-full h-2">
                    <div className="bg-esports-red h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">Dust2</span>
                    <span className="text-esports-red font-bold">85%</span>
                  </div>
                  <div className="w-full bg-esports-gray rounded-full h-2">
                    <div className="bg-esports-red h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">Overpass</span>
                    <span className="text-esports-red font-bold">76%</span>
                  </div>
                  <div className="w-full bg-esports-gray rounded-full h-2">
                    <div className="bg-esports-red h-2 rounded-full" style={{ width: '76%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">Nuke</span>
                    <span className="text-esports-red font-bold">72%</span>
                  </div>
                  <div className="w-full bg-esports-gray rounded-full h-2">
                    <div className="bg-esports-red h-2 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Round Statistics */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Round Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-esports-darkGray rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-esports-red">Clutches</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">1v1</span>
                  <span className="text-white font-bold">78% (124/159)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">1v2</span>
                  <span className="text-white font-bold">42% (47/112)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">1v3</span>
                  <span className="text-white font-bold">24% (12/50)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">1v4</span>
                  <span className="text-white font-bold">15% (3/20)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">1v5</span>
                  <span className="text-white font-bold">0% (0/3)</span>
                </div>
              </div>
            </div>
            
            <div className="bg-esports-darkGray rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-esports-red">Entry Success</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">T Side Entry Kills</span>
                  <span className="text-white font-bold">62%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">CT Side Entry Kills</span>
                  <span className="text-white font-bold">57%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Opening Duel Win %</span>
                  <span className="text-white font-bold">64%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Entry Attempts</span>
                  <span className="text-white font-bold">842</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Successful Entries</span>
                  <span className="text-white font-bold">521</span>
                </div>
              </div>
            </div>
            
            <div className="bg-esports-darkGray rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-esports-red">Side Performance</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">T Side Rating</span>
                  <span className="text-white font-bold">1.18</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">CT Side Rating</span>
                  <span className="text-white font-bold">1.24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">T Side Win %</span>
                  <span className="text-white font-bold">58%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">CT Side Win %</span>
                  <span className="text-white font-bold">66%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Preferred Side</span>
                  <span className="text-white font-bold">CT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Compare with Teammates */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Team Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-esports-darkGray rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-esports-gray">
                  <th className="py-3 px-4 text-left">Player</th>
                  <th className="py-3 px-4 text-center">Rating</th>
                  <th className="py-3 px-4 text-center">K/D</th>
                  <th className="py-3 px-4 text-center">HS%</th>
                  <th className="py-3 px-4 text-center">Impact</th>
                  <th className="py-3 px-4 text-center">ADR</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-esports-gray bg-esports-red bg-opacity-20">
                  <td className="py-3 px-4 flex items-center">
                    <span className="font-bold text-white">Parzival</span>
                    <span className="ml-2 px-2 py-0.5 bg-esports-red rounded-full text-xs text-white">You</span>
                  </td>
                  <td className="py-3 px-4 text-center text-white">1.21</td>
                  <td className="py-3 px-4 text-center text-white">1.29</td>
                  <td className="py-3 px-4 text-center text-white">48.2%</td>
                  <td className="py-3 px-4 text-center text-white">1.18</td>
                  <td className="py-3 px-4 text-center text-white">85.6</td>
                </tr>
                <tr className="border-b border-esports-gray">
                  <td className="py-3 px-4 text-white">Lunax</td>
                  <td className="py-3 px-4 text-center text-white">1.18</td>
                  <td className="py-3 px-4 text-center text-white">1.25</td>
                  <td className="py-3 px-4 text-center text-white">46.8%</td>
                  <td className="py-3 px-4 text-center text-white">1.15</td>
                  <td className="py-3 px-4 text-center text-white">83.2</td>
                </tr>
                <tr className="border-b border-esports-gray">
                  <td className="py-3 px-4 text-white">GentlemaN</td>
                  <td className="py-3 px-4 text-center text-white">1.15</td>
                  <td className="py-3 px-4 text-center text-white">1.22</td>
                  <td className="py-3 px-4 text-center text-white">45.1%</td>
                  <td className="py-3 px-4 text-center text-white">1.14</td>
                  <td className="py-3 px-4 text-center text-white">82.7</td>
                </tr>
                <tr className="border-b border-esports-gray">
                  <td className="py-3 px-4 text-white">PorcelaiN</td>
                  <td className="py-3 px-4 text-center text-white">1.12</td>
                  <td className="py-3 px-4 text-center text-white">1.19</td>
                  <td className="py-3 px-4 text-center text-white">43.5%</td>
                  <td className="py-3 px-4 text-center text-white">1.08</td>
                  <td className="py-3 px-4 text-center text-white">78.4</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white">Rendyy</td>
                  <td className="py-3 px-4 text-center text-white">1.08</td>
                  <td className="py-3 px-4 text-center text-white">1.14</td>
                  <td className="py-3 px-4 text-center text-white">42.3%</td>
                  <td className="py-3 px-4 text-center text-white">1.05</td>
                  <td className="py-3 px-4 text-center text-white">76.9</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Analytics;
