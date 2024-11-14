import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'

export default function Dashboard({ articles }: { articles: any[] }): JSX.Element {
  return (
    <AdminLayout>
        <div>
            <h1 className='text-3xl font-bold text-emerald-700'>Dashboard</h1>
            <div className='mt-8'>
                <h2 className='text-xl font-semibold text-emerald-700'>Articles</h2>
                <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {articles.map((article) => (
                        <div key={article.id} className='bg-white shadow-md p-4 rounded-md'>
                            <h3 className='text-lg font-semibold text-emerald-700'>{article.title}</h3>
                            <p className='text-md text-emerald-700'>{article.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </AdminLayout>
  )
}
