import React, { useState, useEffect } from 'react';
import { Desktop } from './components/Desktop';
import { Taskbar } from './components/Taskbar';
import { Window } from './components/Window';
import { ToolGrid } from './components/ToolGrid';
import { Preloader } from './components/Preloader';
import { ThemeToggle } from './components/ThemeToggle';
import { AuthModal } from './components/AuthModal';
import { UserMenu } from './components/UserMenu';
import { ToolDetails } from './components/ToolDetails';
import { tools } from './data/tools';
import { supabase } from './lib/supabase';
import type { Window as WindowType } from './types';
import type { Tool } from './types';

function App() {
  const [windows, setWindows] = useState<WindowType[]>([]);
  const [nextZIndex, setNextZIndex] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [bootComplete, setBootComplete] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState(null);
  const [favoriteTools, setFavoriteTools] = useState<Tool[]>([]);

  useEffect(() => {
    // Play startup sound
    const startupSound = new Audio('https://www.soundjay.com/mechanical/sounds/machine-start-up-1.mp3');
    startupSound.play().catch(() => {});

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    // Simulate longer OS loading sequence
    const bootSequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 4000));
      setIsLoading(false);
      
      const successSound = new Audio('https://www.soundjay.com/button/sounds/button-16.mp3');
      successSound.play().catch(() => {});
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      setBootComplete(true);
    };

    bootSequence();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      loadFavorites();
    } else {
      setFavoriteTools([]);
    }
  }, [user]);

  const loadFavorites = async () => {
    const { data, error } = await supabase
      .from('favorites')
      .select('tool_id');
    
    if (!error && data) {
      const favoriteToolIds = data.map(f => f.tool_id);
      const favoriteToolsList = tools.filter(tool => favoriteToolIds.includes(tool.id));
      setFavoriteTools(favoriteToolsList);
    }
  };

  const toggleFavorite = async (toolId: string) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    const isFavorite = favoriteTools.some(tool => tool.id === toolId);
    
    if (isFavorite) {
      await supabase
        .from('favorites')
        .delete()
        .eq('tool_id', toolId)
        .eq('user_id', user.id);
      
      setFavoriteTools(favoriteTools.filter(tool => tool.id !== toolId));
    } else {
      await supabase
        .from('favorites')
        .insert({ tool_id: toolId, user_id: user.id });
      
      const tool = tools.find(t => t.id === toolId);
      if (tool) {
        setFavoriteTools([...favoriteTools, tool]);
      }
    }
  };

  const handleShowToolDetails = (tool: Tool) => {
    const newWindow: WindowType = {
      id: `tool-details-${tool.id}-${Date.now()}`,
      title: `${tool.title} - Details`,
      content: (
        <ToolDetails
          tool={tool}
          isDark={isDark}
          isFavorite={favoriteTools.some(t => t.id === tool.id)}
          onToggleFavorite={() => toggleFavorite(tool.id)}
          isAuthenticated={!!user}
        />
      ),
      isMinimized: false,
      isMaximized: false,
      position: { x: Math.random() * (window.innerWidth - 800), y: Math.random() * (window.innerHeight - 600) },
      size: { width: 1000, height: 800 },
      zIndex: nextZIndex,
    };

    // Play window open sound
    const openSound = new Audio('https://www.soundjay.com/button/sounds/button-09.mp3');
    openSound.play().catch(() => {});

    setWindows([...windows, newWindow]);
    setNextZIndex(nextZIndex + 1);
  };

  const createWindow = (category: string) => {
    const isSearch = category === 'search';
    const title = isSearch ? 'Search Results' : `${category.charAt(0).toUpperCase()}${category.slice(1)} Tools`;
    
    // Check if window already exists
    const existingWindow = windows.find(w => w.title === title);
    if (existingWindow) {
      handleWindowFocus(existingWindow.id);
      if (existingWindow.isMinimized) {
        handleWindowMinimize(existingWindow.id);
      }
      return;
    }

    // Calculate random position within visible bounds
    const maxX = window.innerWidth - 800; // window width
    const maxY = window.innerHeight - 600 - 48; // window height - taskbar
    const randomX = Math.max(0, Math.min(Math.random() * maxX, maxX));
    const randomY = Math.max(0, Math.min(Math.random() * maxY, maxY));

    const newWindow: WindowType = {
      id: `window-${Date.now()}`,
      title,
      content: <ToolGrid 
        tools={tools} 
        category={isSearch ? undefined : category} 
        searchQuery={isSearch ? searchQuery : undefined}
        isDark={isDark}
        onShowDetails={handleShowToolDetails}
      />,
      isMinimized: false,
      isMaximized: false,
      position: { x: randomX, y: randomY },
      size: { width: 800, height: 600 },
      zIndex: nextZIndex,
    };

    // Play window open sound
    const openSound = new Audio('https://www.soundjay.com/button/sounds/button-09.mp3');
    openSound.play().catch(() => {});

    setWindows([...windows, newWindow]);
    setNextZIndex(nextZIndex + 1);
  };

  const handleWindowClose = (id: string) => {
    // Play window close sound
    const closeSound = new Audio('https://www.soundjay.com/button/sounds/button-10.mp3');
    closeSound.play().catch(() => {});

    setWindows(windows.filter((w) => w.id !== id));
  };

  const handleWindowMinimize = (id: string) => {
    setWindows(
      windows.map((w) =>
        w.id === id ? { ...w, isMinimized: !w.isMinimized } : w
      )
    );
  };

  const handleWindowMaximize = (id: string) => {
    setWindows(
      windows.map((w) =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
      )
    );
  };

  const handleWindowFocus = (id: string) => {
    setWindows(
      windows.map((w) =>
        w.id === id ? { ...w, zIndex: nextZIndex } : w
      )
    );
    setNextZIndex(nextZIndex + 1);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      createWindow('search');
    }
  };

  const updateWindowPosition = (id: string, x: number, y: number) => {
    setWindows(
      windows.map((w) =>
        w.id === id ? { ...w, position: { x, y } } : w
      )
    );
  };

  const updateWindowSize = (id: string, width: number, height: number) => {
    setWindows(
      windows.map((w) =>
        w.id === id ? { ...w, size: { width, height } } : w
      )
    );
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const backgroundStyle = isDark
    ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900'
    : 'bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400';

  return (
    <>
      <Preloader isLoading={isLoading} />
      <div className={`min-h-screen transition-colors duration-300 ${backgroundStyle}`}>
        {bootComplete && (
          <Desktop 
            onOpenCategory={createWindow} 
            isDark={isDark}
            favoriteTools={favoriteTools}
          />
        )}

        {windows.map((window) => (
          <Window
            key={window.id}
            {...window}
            isDark={isDark}
            onClose={() => handleWindowClose(window.id)}
            onMinimize={() => handleWindowMinimize(window.id)}
            onMaximize={() => handleWindowMaximize(window.id)}
            onFocus={() => handleWindowFocus(window.id)}
            updatePosition={(x, y) => updateWindowPosition(window.id, x, y)}
            updateSize={(width, height) => updateWindowSize(window.id, width, height)}
          >
            {window.content}
          </Window>
        ))}

        {bootComplete && (
          <Taskbar
            activeWindows={windows.map(({ id, title }) => ({ id, title }))}
            onWindowSelect={(id) => {
              const window = windows.find((w) => w.id === id);
              if (window?.isMinimized) {
                handleWindowMinimize(id);
              }
              handleWindowFocus(id);
            }}
            onSearch={handleSearch}
            isDark={isDark}
            themeToggle={<ThemeToggle isDark={isDark} onToggle={toggleTheme} />}
            showStartMenu={showStartMenu}
            setShowStartMenu={setShowStartMenu}
            onOpenCategory={createWindow}
            user={user}
            onLogin={() => setShowAuthModal(true)}
            userMenu={user && (
              <UserMenu
                email={user.email}
                isDark={isDark}
                onLogout={() => setUser(null)}
              />
            )}
          />
        )}

        {showAuthModal && (
          <AuthModal
            onClose={() => setShowAuthModal(false)}
            isDark={isDark}
          />
        )}
      </div>
    </>
  );
}

export default App;