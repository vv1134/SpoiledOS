import React, { useState } from 'react';
import { Folder, Search, Settings, PenTool as Tool } from 'lucide-react';
import { ToolGrid } from './ToolGrid';
import { tools } from '../data/tools';

interface StartMenuProps {
  onClose: () => void;
  onOpenCategory: (category: string) => void;
  isDark: boolean;
}

const categories = [
  { id: 'productivity', title: 'Productivity', icon: Tool, count: tools.filter(t => t.category === 'productivity').length },
  { id: 'development', title: 'Development', icon: Folder, count: tools.filter(t => t.category === 'development').length },
  { id: 'design', title: 'Design', icon: Tool, count: tools.filter(t => t.category === 'design').length },
  { id: 'ai', title: 'AI & ML', icon: Settings, count: tools.filter(t => t.category === 'ai').length },
];

export const StartMenu: React.FC<StartMenuProps> = ({ onClose, onOpenCategory, isDark }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryClick = (categoryId: string) => {
    onOpenCategory(categoryId);
    onClose();
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim()) {
      onOpenCategory('search');
      onClose();
    }
  };

  return (
    <div className={`fixed bottom-12 left-0 w-80 ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-lg rounded-t-lg shadow-xl border border-white/20 overflow-hidden z-50`}>
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={handleSearchChange}
            className={`w-full ${
              isDark 
                ? 'bg-white/10 text-white placeholder-white/60' 
                : 'bg-gray-100 text-gray-900 placeholder-gray-500'
            } rounded px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <Search className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-gray-500'} absolute left-3 top-3`} />
        </div>
      </div>

      <div className="px-2 pb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`w-full flex items-center space-x-3 p-2 ${
              isDark 
                ? 'text-white hover:bg-white/10' 
                : 'text-gray-900 hover:bg-gray-100'
            } rounded-lg transition-colors`}
          >
            <category.icon className="w-6 h-6" />
            <span className="flex-1 text-left">{category.title}</span>
            <span className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};