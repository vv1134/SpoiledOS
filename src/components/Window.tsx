import React, { useState, useRef, useEffect } from 'react';
import { Maximize2, Minimize2, X } from 'lucide-react';
import type { Window as WindowType } from '../types';

interface WindowProps extends WindowType {
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  updatePosition: (x: number, y: number) => void;
  updateSize: (width: number, height: number) => void;
  isDark: boolean;
}

export const Window: React.FC<WindowProps> = ({
  title,
  content,
  isMinimized,
  isMaximized,
  position,
  size,
  zIndex,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  updatePosition,
  updateSize,
  isDark,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e: MouseEvent) => {
        const newX = Math.max(0, Math.min(e.clientX - dragOffset.x, window.innerWidth - (windowRef.current?.offsetWidth || 0)));
        const newY = Math.max(0, Math.min(e.clientY - dragOffset.y, window.innerHeight - (windowRef.current?.offsetHeight || 0)));
        updatePosition(newX, newY);
      };

      const handleMouseUp = () => {
        setIsDragging(false);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset, updatePosition]);

  if (isMinimized) return null;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return;
    if (e.target === e.currentTarget || (e.target as HTMLElement).dataset.draggable) {
      setIsDragging(true);
      const rect = windowRef.current!.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      onFocus();
    }
  };

  const handleControlClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation(); // Prevent dragging when clicking controls
    action();
  };

  const style: React.CSSProperties = isMaximized
    ? {
        top: 0,
        left: 0,
        width: '100vw',
        height: 'calc(100vh - 48px)', // Account for taskbar
        transform: 'none',
      }
    : {
        top: position.y,
        left: position.x,
        width: size.width,
        height: size.height,
        transform: isDragging ? 'none' : 'translate(0, 0)',
      };

  const windowClass = isDark
    ? 'bg-gray-900/90 border-gray-700'
    : 'bg-white/90 border-white/20';

  const headerClass = isDark
    ? 'bg-gray-800/50'
    : 'bg-gray-200/50';

  return (
    <div
      ref={windowRef}
      className={`fixed backdrop-blur-lg rounded-lg shadow-xl border flex flex-col overflow-hidden transition-colors ${windowClass}`}
      style={{ ...style, zIndex }}
      onClick={onFocus}
    >
      <div
        className={`h-10 flex items-center px-4 ${headerClass}`}
        onMouseDown={handleMouseDown}
        data-draggable="true"
      >
        <div className={`flex-1 font-medium ${isDark ? 'text-white' : 'text-gray-900'}`} data-draggable="true">
          {title}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={(e) => handleControlClick(e, onMinimize)}
            className="p-1 hover:bg-white/10 rounded transition-colors"
          >
            <Minimize2 className={`w-4 h-4 ${isDark ? 'text-white' : 'text-gray-700'}`} />
          </button>
          <button
            onClick={(e) => handleControlClick(e, onMaximize)}
            className="p-1 hover:bg-white/10 rounded transition-colors"
          >
            <Maximize2 className={`w-4 h-4 ${isDark ? 'text-white' : 'text-gray-700'}`} />
          </button>
          <button
            onClick={(e) => handleControlClick(e, onClose)}
            className="p-1 hover:bg-red-500 rounded transition-colors group"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        {content}
      </div>
    </div>
  );
};