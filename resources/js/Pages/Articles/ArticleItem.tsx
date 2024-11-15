import { Link, router, usePage } from '@inertiajs/react'
import { ArrowBigRight } from 'lucide-react'
import React from 'react'

export default function Article({ article }: any) {

    console.log(article)

    const { user } = usePage().props.auth;

    const articleId = article.id

    const handlePermission = () => {
        if(user){
            router.get(route('articles.show', articleId))
        }else {
            setTimeout(() => {
                alert('You need to be logged in to read the full article')
                router.get(route('login'))
            }, 1000)
        }
    }


  return (
    <div className='max-w-xl font-geist'>
        <div className='relative flex flex-col items-left justify-center p-2 mt-10 gap-3'>
            <h1 className='font-bold text-3xl tracking-wide text-slate-800'>{article.title}</h1>
            <p className='text-gray-700 text-base font-light leading-7 mt-4 mb-4'>{article.content}</p>
        </div>
        <div className='flex flex-col gap-8'>
        <div className='flex justify-between p-2 items-center'>
            <p className='text-gray-500 text-sm font-light'>Posted on {article.created_at}</p>
            <p className='font-light'>Created by <span>{article.author}</span></p>
        </div>
        <span className='font-medium text-start inline' onClick={handlePermission}>Read more <ArrowBigRight /></span>
        </div>
    </div>
  )
}

