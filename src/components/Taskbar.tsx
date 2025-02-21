import React from 'react';
import { Search, Menu, Clock, User } from 'lucide-react';
import { StartMenu } from './StartMenu';

interface TaskbarProps {
  activeWindows: Array<{ id: string; title: string }>;
  onWindowSelect: (id: string) => void;
  onSearch: (query: string) => void;
  isDark: boolean;
  themeToggle: React.ReactNode;
  showStartMenu: boolean;
  setShowStartMenu: (show: boolean) => void;
  onOpenCategory: (category: string) => void;
  user: any;
  onLogin: () => void;
  userMenu?: React.ReactNode;
}

export const Taskbar: React.FC<TaskbarProps> = ({
  activeWindows,
  onWindowSelect,
  onSearch,
  isDark,
  themeToggle,
  showStartMenu,
  setShowStartMenu,
  onOpenCategory,
  user,
  onLogin,
  userMenu,
}) => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className={`fixed bottom-0 left-0 right-0 h-12 ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md border-t border-white/20 flex items-center px-2 z-50`}>
        <button
          onClick={() => setShowStartMenu(!showStartMenu)}
          className={`p-2 ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-200'} rounded`}
        >
          <Menu className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
        </button>

        <div className="flex-1 flex items-center space-x-2 px-4">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search tools..."
              className={`w-full ${
                isDark 
                  ? 'bg-white/10 text-white placeholder-white/60' 
                  : 'bg-gray-100 text-gray-900 placeholder-gray-500'
              } rounded px-4 py-1 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              onChange={(e) => onSearch(e.target.value)}
            />
            <Search className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-gray-500'} absolute left-3 top-2`} />
          </div>

          <div className="flex space-x-1">
            {activeWindows.map((window) => (
              <button
                key={window.id}
                onClick={() => onWindowSelect(window.id)}
                className={`px-3 py-1 text-sm ${
                  isDark 
                    ? 'text-white hover:bg-white/10' 
                    : 'text-gray-900 hover:bg-gray-200'
                } rounded`}
              >
                {window.title}
              </button>
            ))}
          </div>
        </div>

        <div className={`flex items-center space-x-4 ${isDark ? 'text-white' : 'text-gray-900'} px-4`}>
          {userMenu || (
            <button
              onClick={onLogin}
              className={`p-2 rounded-full ${
                isDark ? 'hover:bg-white/10' : 'hover:bg-gray-200'
              } transition-colors`}
            >
              <User className="w-5 h-5" />
            </button>
          )}
          {themeToggle}
          <Clock className="w-5 h-5" />
          <span className="text-sm">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>

      {showStartMenu && (
        <StartMenu 
          onClose={() => setShowStartMenu(false)} 
          onOpenCategory={onOpenCategory}
          isDark={isDark}
        />
      )}
    </>
  );
};