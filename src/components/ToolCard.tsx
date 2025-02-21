import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { Star, Info } from 'lucide-react';
import type { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
  isDark: boolean;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  isAuthenticated?: boolean;
  onShowDetails: (tool: Tool) => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  tool,
  isDark,
  isFavorite = false,
  onToggleFavorite,
  isAuthenticated = false,
  onShowDetails,
}) => {
  const Icon = tool.icon;

  return (
    <div 
      className={`block rounded-lg p-4 transition-all duration-200 border hover:scale-105 ${
        isDark 
          ? 'bg-gray-800/80 hover:bg-gray-700/80 border-gray-700'
          : 'bg-white/90 hover:bg-white border-white/20'
      }`}
      onClick={() => onShowDetails(tool)}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-2 rounded-lg bg-gradient-to-br ${getGradient()}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className={isDark ? 'text-white' : 'text-gray-900'}>{tool.title}</h3>
              <p className={`text-sm mt-1 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>{tool.description}</p>
            </div>
            <div className="flex space-x-2">
              {isAuthenticated && onToggleFavorite && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite();
                  }}
                  className={`p-1 rounded-full ${
                    isDark ? 'hover:bg-white/10' : 'hover:bg-gray-200'
                  } transition-colors`}
                  title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                >
                  <Star
                    className={`w-5 h-5 ${
                      isFavorite ? 'text-yellow-400 fill-current' : 'text-gray-400'
                    }`}
                  />
                </button>
              )}
            </div>
          </div>
          <div className="flex space-x-2 mt-2">
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`inline-block text-sm ${
                isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
              }`}
            >
              Open Tool →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const gradients = [
  'from-pink-500 to-rose-500',
  'from-purple-500 to-indigo-500',
  'from-blue-500 to-cyan-500',
  'from-green-500 to-emerald-500',
  'from-yellow-500 to-orange-500',
];

const getGradient = () => {
  return gradients[Math.floor(Math.random() * gradients.length)];
};