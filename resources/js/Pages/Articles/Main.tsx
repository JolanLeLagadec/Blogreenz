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
    <div>
        {
            articles.map((article) => (
                <Article key={article.id} article={article} />
            ))
        }
    </div>
  </MainLayout>
  )

}
