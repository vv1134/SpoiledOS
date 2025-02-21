import React from 'react';
import { LogOut, User } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface UserMenuProps {
  email: string;
  isDark: boolean;
  onLogout: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({ email, isDark, onLogout }) => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
  };

  return (
    <div className={`flex items-center space-x-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <div className="flex items-center space-x-2">
        <User className="w-5 h-5" />
        <span className="text-sm">{email}</span>
      </div>
      <button
        onClick={handleLogout}
        className={`p-2 rounded-full ${
          isDark ? 'hover:bg-white/10' : 'hover:bg-gray-200'
        } transition-colors`}
      >
        <LogOut className="w-5 h-5" />
      </button>
    </div>
  );
};