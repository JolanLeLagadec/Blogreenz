import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-emerald-50 to-yellow-100 pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/" className='text-6xl font-bold tracking-tighter  bg-gradient-to-b from-slate-950 to-emerald-600 bg-clip-text text-transparent'>
                    Bgreen
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
