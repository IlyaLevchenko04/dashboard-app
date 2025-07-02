import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';

export const Settings = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [notifications, setNotifications] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
    document.body.classList.toggle('light', theme === 'light');
  }, [theme]);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded shadow">
      <Header>Settings</Header>
      <form className="flex flex-col gap-4">
        {/* Theme Switcher */}
        <label className="flex items-center gap-2">
          <span>Theme:</span>
          <button
            type="button"
            className={`px-3 py-1 rounded border`}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
          </button>
        </label>
        {/* Checkbox */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notifications}
            onChange={e => setNotifications(e.target.checked)}
          />
          Enable notifications
        </label>
        {/* Text Input */}
        <label className="flex flex-col gap-1">
          <span>Username:</span>
          <input
            type="text"
            className="border rounded px-2 py-1 dark:bg-gray-700 dark:text-white"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </label>
      </form>
      {/* Preview */}
      <div className="mt-6 p-4 border rounded bg-gray-50 dark:bg-gray-900">
        <h2 className="font-semibold mb-2">Preview</h2>
        <div>
          Theme: <span className="font-mono">{theme}</span>
        </div>
        <div>
          Notifications:{' '}
          <span className="font-mono">
            {notifications ? 'Enabled' : 'Disabled'}
          </span>
        </div>
        <div>
          Username: <span className="font-mono">{username || '—'}</span>
        </div>
      </div>
    </div>
  );
};
