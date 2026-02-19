import { useTheme } from '@/Contexts/ThemeContext';
import { Sun, Moon, Desktop } from '@phosphor-icons/react';

export default function ThemeSelector() {
    const { theme, setTheme } = useTheme();

    const options = [
        { value: 'light', icon: Sun, label: 'Light' },
        { value: 'dark', icon: Moon, label: 'Dark' },
        { value: 'system', icon: Desktop, label: 'System' },
    ];

    return (
        <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1 gap-1">
            {options.map((option) => {
                const isActive = theme === option.value;
                const Icon = option.icon;
                return (
                    <button
                        key={option.value}
                        onClick={() => setTheme(option.value)}
                        className={`
                            flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-all duration-200
                            ${isActive
                                ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-sm'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}
                        `}
                    >
                        <Icon size={18} weight={isActive ? 'fill' : 'regular'} />
                        <span>{option.label}</span>
                    </button>
                );
            })}
        </div>
    );
}
