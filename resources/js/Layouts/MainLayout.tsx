import Modal from "@/Components/Modal";
import { Button } from "@/Components/ui/button";
import { Link, router, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

type User = {
    name: string;
    email: string;

}

export default function MainLayout({ children }: { children: React.ReactNode}): JSX.Element {
    const isWelcomePage = usePage().url === '/'

    const [showModal, setShowModal] = useState(false);
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);
    const [visible, setVisible] = useState(true);



    // On veut que quand la navbar soit en haut, elle apparaisse
    useEffect(() => {
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if(currentScrollPos === 0){
            setVisible(true);
        }else {
            setVisible(prevScrollPosition > currentScrollPos);
        }
        setPrevScrollPosition(currentScrollPos);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

}, [prevScrollPosition]);

    const handleLogout = () => {
        router.post(route('logout'))
    }
   const { user } = usePage().props.auth;


  return (
    <div className='bg-gradient-to-br from-emerald-50 to-yellow-100 min-h-screen ' >
        {
            !isWelcomePage ? (
      <header>

<Modal show={showModal} maxWidth="2xl" closeable={true} onClose={() => {}}>
            <div className="p-8">
                <h1 className="text-2xl font-semibold text-emerald-700">Are you sure you want to logout?</h1>
                <div className="mt-4">
                    <Button variant={'outline'} onClick={handleLogout} className="text-md font-semibold text-emerald-700">Yes</Button>
                    <Button variant={'outline'} onClick={() => setShowModal(false)} className="text-md font-semibold text-emerald-700 ml-4 ">No</Button>
                </div>
            </div>
</Modal>
        <nav className={`fixed w-full border-b border-emerald-100  p-4 transition-all bg-slate-50/30 z-50 backdrop-blur-xl shadow-lg
                        ${visible ? 'top-0' : '-top-20'}
            `}>
            <div className="flex justify-between items-center ">
                <div>
                <Link href="/" className="text-xl font-bold text-emerald-500">Blogreen</Link>
                </div>
                <div>
                <Link href="/home" className="text-md text-emerald-500 hover:text-emerald-300">Home</Link>
                {
                    !user && (
                        <Link href="/login" className="text-md font-semibold text-emerald-700 ml-8 hover:underline hover:underline-offset-2">Login</Link>
                    )}
                {
                    user &&
                    <>
                <Link href="/dashboard/articles" className="text-md text-emerald-500 ml-4 hover:text-emerald-300">Dashboard</Link>
                <button onClick={() => setShowModal(true)} className="text-md font-semibold text-emerald-700 ml-8 hover:opacity-80">Logout</button>
                    </>
                }
                </div>
            </div>
        </nav>
      </header>
    ) : null
        }
      <div className="container m-auto pt-12 px-12">
        {children}
      </div>
    </div>
  )
}
