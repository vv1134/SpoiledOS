import React from 'react';
import { Folder, Star } from 'lucide-react';
import type { Tool } from '../types';

const categories = [
  { id: 'productivity', title: 'Productivity', icon: Folder },
  { id: 'development', title: 'Development', icon: Folder },
  { id: 'design', title: 'Design', icon: Folder },
  { id: 'ai', title: 'AI & ML', icon: Folder },
];

interface DesktopIconProps {
  category: typeof categories[0];
  onOpen: (category: string) => void;
}

interface FavoriteToolIconProps {
  tool: Tool;
  onOpen: (url: string) => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ category, onOpen }) => {
  return (
    <div
      className="flex flex-col items-center p-2 rounded hover:bg-white/10 cursor-pointer"
      onClick={() => onOpen(category.id)}
    >
      <category.icon className="w-12 h-12 text-white" />
      <span className="text-white text-sm mt-1">{category.title}</span>
    </div>
  );
};

const FavoriteToolIcon: React.FC<FavoriteToolIconProps> = ({ tool, onOpen }) => {
  const Icon = tool.icon;
  
  return (
    <div
      className="flex flex-col items-center p-2 rounded hover:bg-white/10 cursor-pointer"
      onClick={() => onOpen(tool.url)}
    >
      <div className="relative">
        <Icon className="w-12 h-12 text-white" />
        <Star className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" />
      </div>
      <span className="text-white text-sm mt-1">{tool.title}</span>
    </div>
  );
};

interface DesktopProps {
  onOpenCategory: (category: string) => void;
  favoriteTools?: Tool[];
}

export const Desktop: React.FC<DesktopProps> = ({ onOpenCategory, favoriteTools = [] }) => {
  const handleOpenTool = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="grid grid-cols-6 gap-4 p-4">
      {categories.map((category) => (
        <DesktopIcon
          key={category.id}
          category={category}
          onOpen={onOpenCategory}
        />
      ))}
      {favoriteTools.map((tool) => (
        <FavoriteToolIcon
          key={tool.id}
          tool={tool}
          onOpen={handleOpenTool}
        />
      ))}
    </div>
  );
};