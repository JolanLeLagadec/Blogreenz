import MainLayout from '@/Layouts/MainLayout'
import React from 'react'
import Article from './ArticleItem'
import { usePage } from '@inertiajs/react';

interface ArticlesType {
    articles: Array<{
        id: number,
        title: string,
        content: string,
        category_id: number,
        user_id: number,
        created_at: string,
        updated_at: string,
    }>
}


export default function ArticlesList({ articles }: ArticlesType ) {

    return (
  <MainLayout>
    <div className='flex flex-col items-center justify-center mt-7 gap-8 p-8'>
        {
            articles.map((article) => (
                <div className='bg-slate-50 rounded-xl p-8 shadow-lg'>
                    <Article key={article.id} article={article} />
                </div>
            ))
        }
    </div>
  </MainLayout>
  )

}
