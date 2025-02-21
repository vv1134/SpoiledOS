import React from 'react';
import { ToolCard } from './ToolCard';
import type { Tool } from '../types';

interface ToolGridProps {
  tools: Tool[];
  category?: string;
  searchQuery?: string;
  isDark: boolean;
  onShowDetails?: (tool: Tool) => void;
}

export const ToolGrid: React.FC<ToolGridProps> = ({ 
  tools, 
  category,
  searchQuery,
  isDark,
  onShowDetails
}) => {
  const filteredTools = tools.filter(tool => {
    const matchesCategory = !category || tool.category === category;
    const matchesSearch = !searchQuery || 
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {filteredTools.map((tool) => (
        <ToolCard
          key={tool.id}
          tool={tool}
          isDark={isDark}
          onShowDetails={onShowDetails || (() => {})}
        />
      ))}
    </div>
  );
};