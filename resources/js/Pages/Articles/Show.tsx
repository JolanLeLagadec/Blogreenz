import MainLayout from '@/Layouts/MainLayout'


export default function Show({ article }: any) {

    console.log(article)

  return (
    <MainLayout>
        <div className='flex justify-center items-center w-full p-5'>
            <div className='max-w-2xl font-geist'>
                <div className='relative flex flex-col items-center justify-center p-2 mt-10 gap-3'>
                    <h1 className='font-bold text-6xl tracking-wide text-slate-800'>{article.title}</h1>
                    <p className='text-gray-700 text-xl font-light mt-12'>{article.content}</p>
                </div>
                <div className='flex flex-col gap-8'>
                <div className='flex justify-between p-2 items-center'>
                    <p className='text-gray-500 text-sm font-light'>Posted on {article.created_at}</p>
                    <p className='font-light'>Created by <span>{article.author}</span></p>
                </div>
                </div>
            </div>
        </div>
    </MainLayout>
)
}
