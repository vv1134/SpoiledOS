import type { LucideIcon } from 'lucide-react';

export interface Tool {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  url: string;
}

export interface Window {
  id: string;
  title: string;
  content: React.ReactNode;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}