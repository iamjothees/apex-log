import { Link, usePage } from '@inertiajs/react';
import { ArrowLeft, Bell } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

export default function MobileHeader({ title, backRoute }) {
    const user = usePage().props.auth.user;
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 50) {
                    // Scrolling down
                    setIsVisible(false);
                } else {
                    // Scrolling up
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="mx-auto max-w-md bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {backRoute ? (
                        <Link href={route(backRoute)} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                            <ArrowLeft size={24} weight="bold" />
                        </Link>
                    ) : (
                        // Placeholder for alignment if no back button
                        <div className="w-6" />
                    )}
                    <h1 className="text-lg font-bold text-gray-900 dark:text-white truncate max-w-[150px]">
                        {title || 'Apex Log'}
                    </h1>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white relative">
                        <Bell size={24} weight="regular" />
                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-900" />
                    </button>

                    <Link href={route('profile.edit')}>
                        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden border border-gray-300 dark:border-gray-600">
                            {/* Initials or generic avatar */}
                            <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
                                {user.name.charAt(0)}
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
}
