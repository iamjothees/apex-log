import MobileHeader from '@/Components/MobileHeader';
import BottomNavBar from '@/Components/BottomNavBar';
import { usePage } from '@inertiajs/react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black">
            {/* Desktop Container Control: Limits width to mobile size on desktop */}
            <div className="mx-auto min-h-screen max-w-md bg-white dark:bg-gray-900 shadow-2xl relative">

                {/* Mobile Header (Sticky Top) */}
                <MobileHeader title={header} />

                {/* Main Content Area */}
                <main className="pt-16 pb-20 px-4 min-h-screen overflow-y-auto">
                    {children}
                </main>

                {/* Bottom Navigation (Fixed Bottom) */}
                <BottomNavBar />

            </div>
        </div>
    );
}
