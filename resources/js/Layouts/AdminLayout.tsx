import { SidebarHeader, SidebarProvider, SidebarTrigger } from '@/Components/ui/sidebar'
import React, { useState } from 'react'
import SidebarApp from './Components/SidebarApp'
import { usePage, Link } from '@inertiajs/react';

import { Home, HomeIcon, LucideHome } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode}): JSX.Element {

    const currentUrl = usePage().url;

  return (
            <SidebarProvider>
                <SidebarApp currentUrl ={currentUrl} />
                <main className='relative bg-gradient-to-br from-emerald-50 to-yellow-100 min-h-screen w-full'>
                    <div className='bg-slate-50 border-b shadow-b-lg p-4'>
                        <Link href='/home'>
                            <HomeIcon />
                        </Link>
                    </div>
                    <SidebarTrigger />
                    <div className='flex justify-start ml-14'>
                    {children}
                    </div>
                </main>
            </SidebarProvider>
  )
}
