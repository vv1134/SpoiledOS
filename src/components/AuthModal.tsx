import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { X } from 'lucide-react';

interface AuthModalProps {
  onClose: () => void;
  isDark: boolean;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onClose, isDark }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
      }
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-lg p-6 w-full max-w-md relative`}>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`block text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-3 py-2 rounded-md border ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              required
            />
          </div>

          <div>
            <label className={`block text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-3 py-2 rounded-md border ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-md ${
              isDark
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white font-medium transition-colors`}
          >
            {loading ? 'Loading...' : isLogin ? 'Login' : 'Sign Up'}
          </button>

          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className={`w-full text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} hover:underline`}
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
          </button>
        </form>
      </div>
    </div>
  );
};