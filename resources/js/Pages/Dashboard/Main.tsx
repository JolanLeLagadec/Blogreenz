import Modal from '@/Components/Modal';
import AdminLayout from '@/Layouts/AdminLayout'
import { CrossIcon, Eye, EyeIcon, LucideCross } from 'lucide-react';
import React, { useState } from 'react'
import DropDownMenu from './Components/DropDownMenu';
import { Link } from '@inertiajs/react';

export default function Dashboard({ articles }: { articles: any[] }): JSX.Element {

    const [showModal, setShowModal ] = useState(false);

    const articlesCount = articles.length

  return (
    <AdminLayout>
        <div className='w-full font-geist text-slate-700  '>
            <div className='mt-24 pl-40 w-3/4'>
                <div className='flex justify-between items-center mt-10'>
                <h2 className=' tracking-tight uppercase text-slate-900'>{articlesCount} articles</h2>
                <Link href='/dashboard/articles/create' className='tracking-tight uppercase font-bold text-slate-900 hover:opacity-70'>new <span className='font-bold text-slate-900 text-xl'>+</span></Link>
                </div>
                <div className='mt-4 grid grid-cols-1 grid-flow-row gap-4'>
                    {articles.map((article) => (
                        <div key={article.id} className='bg-gray-100 relative  shadow-md p-4 rounded-md full flex justify-between items-center hover:bg-slate-100'>
                            <h3 className='text-lg font-semibold '>{article.title}</h3>
                            <div className='flex flex-row-reverse gap-3 justify-between items-center'>
                            <DropDownMenu id={article.id} />
                            <button onClick={() => setShowModal(true)}>
                            <EyeIcon size={18} />
                            </button>
                            </div>
                            <Modal show={showModal} onClose={() => setShowModal(false)}>
                                <div className='relative w-full h-full shadow-lg bg-slate-900 text-slate-300 p-8 flex flex-col justify-center text-left'>
                                    <h2 className='text-5xl font-semibold'>{article.title}</h2>
                                    <p className='mt-4 font-light text-gray-200'>{article.content}</p>
                                    <div className='flex justify-between items-center'>
                                        <p>{article.created_at }</p>
                                        <div className='absolute top-2 right-3 flex justify-center items-center gap-4 '>
                                        <button onClick={() => setShowModal(false)} className='rotate-45'><LucideCross size={18} /></button>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </AdminLayout>
  )
}
