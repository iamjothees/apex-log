import { Link } from '@inertiajs/react';
import { House, Gauge, Gear } from '@phosphor-icons/react';

export default function BottomNavBar() {
    const isCurrent = (routeName) => route().current(routeName);

    const navItems = [
        {
            name: 'Home',
            route: 'dashboard',
            icon: House,
        },
        {
            name: 'Track',
            route: 'track',
            icon: Gauge,
        },
        {
            name: 'Settings',
            route: 'profile.edit',
            icon: Gear,
        },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 pb-safe">
            <div className="mx-auto max-w-md bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 pb-2 pt-1 transition-all duration-300">
                <div className="flex justify-around items-center">
                    {navItems.map((item) => {
                        const active = isCurrent(item.route);
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={route(item.route)}
                                className={`flex flex-col items-center justify-center w-full py-2 transition-colors duration-200 group ${active
                                        ? 'text-indigo-600 dark:text-indigo-400'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                                    }`}
                            >
                                <Icon
                                    size={24}
                                    weight={active ? 'fill' : 'regular'}
                                    className={`mb-1 transition-transform duration-200 ${active ? 'scale-110' : 'group-hover:scale-110'}`}
                                />
                                <span className="text-[10px] font-medium tracking-wide">
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
