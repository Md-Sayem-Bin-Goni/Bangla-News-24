import NewsCard from '@/components/NewsCard';
import React from 'react';

interface INews {

    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string

}

const page = async ({ params,}: { params: Promise<{ categoryId: string }>;}) => {
    const { categoryId } = await params;

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
    const data = await res.json()
    const news : INews[]= data.data

    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-4xl text-red-700 py-10'>{data.title}</h2>
            <hr className='pb-10 text-red-700'/>
            <div className='grid grid-cols-3 gap-4'>
                {
                    news.map((cn, idx) => <NewsCard key={idx} news={cn} />)
                }
            </div>
        </div>
    );
};

export default page;