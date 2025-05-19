
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Trophy, BarChart3, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { playerInfo, playerStats, achievements } from '@/data/playerData';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-esports-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-esports-black">
        <div className="absolute inset-0 bg-gradient-to-r from-esports-black via-esports-black to-esports-red/20 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">Parzival</span>
              <span className="text-esports-red">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">Professional Esports Player</p>
            <p className="text-gray-400 mb-8 max-w-xl">
              One of the most decorated players in the competitive scene with multiple
              championships and MVP awards across major tournaments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-esports-red hover:bg-esports-darkRed text-white font-bold px-8 py-6"
                asChild
              >
                <Link to="/profile">View Profile</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-esports-red text-white hover:bg-esports-red/10"
                asChild
              >
                <Link to="/achievements">Achievements</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-2 bg-esports-red opacity-10 blur-xl rounded-full animate-pulse-red"></div>
              <div className="bg-esports-darkGray p-2 rounded-full relative">
                <img 
                  src={playerInfo.avatar} 
                  alt="Parzival" 
                  className="w-72 h-72 rounded-full object-cover border-2 border-esports-red"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Highlight */}
      <div className="bg-esports-darkGray py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Player Statistics</h2>
          <div className="stats-grid">
            <div className="bg-esports-gray rounded-md p-4 text-center">
              <p className="text-gray-400 text-sm">Rating</p>
              <p className="text-white text-2xl font-bold">{playerStats.rating}</p>
            </div>
            <div className="bg-esports-gray rounded-md p-4 text-center">
              <p className="text-gray-400 text-sm">K/D</p>
              <p className="text-white text-2xl font-bold">{playerStats.kd}</p>
            </div>
            <div className="bg-esports-gray rounded-md p-4 text-center">
              <p className="text-gray-400 text-sm">Impact</p>
              <p className="text-white text-2xl font-bold">{playerStats.impact}</p>
            </div>
            <div className="bg-esports-gray rounded-md p-4 text-center">
              <p className="text-gray-400 text-sm">Maps</p>
              <p className="text-white text-2xl font-bold">{playerStats.mapsPlayed}</p>
            </div>
            <div className="bg-esports-gray rounded-md p-4 text-center">
              <p className="text-gray-400 text-sm">Win Rate</p>
              <p className="text-white text-2xl font-bold">{playerStats.winRate}</p>
            </div>
            <div className="bg-esports-gray rounded-md p-4 text-center">
              <p className="text-gray-400 text-sm">HS%</p>
              <p className="text-white text-2xl font-bold">{playerStats.headshots}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Achievements */}
      <div className="py-12 bg-esports-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Recent Achievements</h2>
            <Link to="/achievements" className="text-esports-red hover:text-red-400 flex items-center">
              View All
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.slice(0, 3).map((achievement, index) => (
              <div key={index} className="reward-badge p-4">
                <div className="flex items-center mb-2">
                  <Trophy className="w-5 h-5 text-esports-red mr-2" />
                  <h3 className="text-white font-bold">{achievement.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{achievement.tournament}</p>
                <p className="text-gray-400 text-xs">{achievement.date}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-esports-red font-bold">{achievement.place}</span>
                  {achievement.prize && <span className="text-yellow-400 text-sm">{achievement.prize}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Feature Highlights */}
      <div className="py-12 bg-esports-darkGray">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Explore More</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-esports-gray rounded-md p-6 hover:border-esports-red border-2 border-transparent transition-all duration-300">
              <User className="w-10 h-10 text-esports-red mb-4" />
              <h3 className="text-xl font-bold mb-2">Player Profile</h3>
              <p className="text-gray-400 mb-4">
                Learn more about Parzival's career, gaming setup, and professional journey.
              </p>
              <Button 
                className="bg-esports-red hover:bg-esports-darkRed text-white w-full"
                asChild
              >
                <Link to="/profile">View Profile</Link>
              </Button>
            </div>
            <div className="bg-esports-gray rounded-md p-6 hover:border-esports-red border-2 border-transparent transition-all duration-300">
              <Trophy className="w-10 h-10 text-esports-red mb-4" />
              <h3 className="text-xl font-bold mb-2">Achievements</h3>
              <p className="text-gray-400 mb-4">
                Browse through all championship wins, medals, and personal awards.
              </p>
              <Button 
                className="bg-esports-red hover:bg-esports-darkRed text-white w-full"
                asChild
              >
                <Link to="/achievements">View Achievements</Link>
              </Button>
            </div>
            <div className="bg-esports-gray rounded-md p-6 hover:border-esports-red border-2 border-transparent transition-all duration-300">
              <BarChart3 className="w-10 h-10 text-esports-red mb-4" />
              <h3 className="text-xl font-bold mb-2">Performance Analytics</h3>
              <p className="text-gray-400 mb-4">
                Dive into detailed statistics and performance trends over time.
              </p>
              <Button 
                className="bg-esports-red hover:bg-esports-darkRed text-white w-full"
                asChild
              >
                <Link to="/analytics">View Analytics</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
