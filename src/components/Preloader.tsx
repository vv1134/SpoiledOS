import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

export const Preloader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const [showIntro, setShowIntro] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);

  useEffect(() => {
    if (!showIntro && isLoading) {
      const interval = setInterval(() => {
        setBootProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [showIntro, isLoading]);

  if (!isLoading && !showIntro) return null;

  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center z-50">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-4xl font-bold text-white mb-4 animate-pulse">SpoiledOS</h1>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Developer: VV1134</h2>
            <p className="text-gray-300 mb-6">
              Welcome to AI Tools OS - Your comprehensive platform for discovering and accessing
              the latest AI tools and technologies. This operating system-style interface
              provides an intuitive way to explore and utilize various AI resources.
            </p>
            <div className="flex flex-col space-y-2 text-gray-300 mb-6">
              <span>• 100+ Curated AI Tools</span>
              <span>• Categorized Access</span>
              <span>• Real-time Search</span>
              <span>• Modern OS Interface</span>
            </div>
          </div>
          <button
            onClick={() => {
              const clickSound = new Audio('https://www.soundjay.com/button/sounds/button-14.mp3');
              clickSound.play().catch(() => {});
              setShowIntro(false);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center mx-auto space-x-2 transition-colors"
          >
            <Play className="w-5 h-5" />
            <span>Boot SpoiledOS</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center z-50">
      <div className="text-center max-w-md w-full px-4">
        <div className="w-24 h-24 border-4 border-white border-t-transparent rounded-full animate-spin mb-8 mx-auto"></div>
        <div className="text-white text-xl font-medium mb-4">Loading AI Tools OS...</div>
        <div className="w-full bg-white/20 rounded-full h-2 mb-2">
          <div 
            className="bg-white h-full rounded-full transition-all duration-300"
            style={{ width: `${bootProgress}%` }}
          />
        </div>
        <div className="text-white/80 text-sm">
          {bootProgress < 30 && "Initializing system components..."}
          {bootProgress >= 30 && bootProgress < 60 && "Loading AI tools database..."}
          {bootProgress >= 60 && bootProgress < 90 && "Preparing user interface..."}
          {bootProgress >= 90 && "Starting AI Tools OS..."}
        </div>
      </div>
    </div>
  );
};