import AdminLayout from '@/Layouts/AdminLayout'
import React, { FormEventHandler, useEffect, useState } from 'react'
import { router, useForm } from '@inertiajs/react';
import { Input } from '@/Components/ui/input';
import SelectForm from './Components/Select';
import { Button } from '@/Components/ui/button';
import { Textarea } from '@/Components/ui/textarea';
import { toast } from 'sonner';

export default function updateArticle({ article }: { article: any }) {

    useEffect(() => {
            setData({
                title: article.title,
                content: article.content,
                category_id: article.category
            })
    }, [article])


    const { data, setData, processing, put, reset, errors } = useForm({
                    title: '',
                    content: '',
                    category_id: ''
});
    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        put(`/dashboard/${article.id}/update`);
        reset();
    }
  return (
    <AdminLayout>
    <div className='w-full font-geist text-slate-700  '>
        <div className='mt-24 mb-6 w-3/4 flex flex-col'>
        <h1 className='text-lg text-slate-800'>Create new article</h1>
        </div>
        <form onSubmit={onSubmit} className='w-3/4 space-y-8'>
            <div className='space-y-1'>
            <label className='font-normal text-sm ' htmlFor="title">Title</label>
            <Input
            className='text-sm'
            id='title'
            name="title"
            value={data.title}
            placeholder='You gonna find this interesting...'
            onChange={(e) => setData('title', e.target.value)}
             />
            {
                errors.title && <p className='text-red-500 text-sm'>{errors.title}</p>
            }
            </div>
            <div className='space-y-1'>
            <label className='font-normal text-sm ' htmlFor="title">Content</label>
            <Textarea
            className='placeholder:text-normal text-sm'
            id='content'
            name="content"
            value={ data.content}
            placeholder='Tell us about your story..'
            onChange={(e) => setData('content', e.target.value)}
             />
            {
                errors.content && <p className='text-red-500 text-sm'>{errors.content}</p>
            }
            </div>
            <div className='space-y-1 flex items-center '>
                <div className='space-y-1'>
            <label className='font-normal text-sm' htmlFor="title">Category</label>
            <SelectForm
            setData = { setData }
            article = { article }
            />
            </div>
            <div className='mx-auto'>Upload file</div>
            </div>
            <Button type='submit'>Submit article</Button>
        </form>
    </div>
    </AdminLayout>
  )
}


