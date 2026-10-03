import React from 'react';
import NewsCard from './NewsCard';
import Image from 'next/image';

interface INews {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string
}




const MainNews = ({ news }: { news: INews[] }) => {
    const [firstNews, ...otherNews] = news;

    // const featureNews = allNews.slice(1,6)
    // console.log(allNews);


    return (
        <div className='grid grid-cols-3 gap-5'>
            <div className="card bg-base-100  shadow-sm">
                <figure>
                    <Image
                        height={600}
                        width={600}
                        src={firstNews.imageUrl}
                        alt={firstNews.imageAlt}
                    />
                </figure>
                <div className="card-body">
                    <p className="text-red-600 font-semibold">{firstNews.category}</p>
                    <h2 className="card-title">{firstNews.title}</h2>
                    <p>{firstNews.description}</p>
                </div>
            </div>


            <div className='col-span-1 border rounded-xl p-3'>
                {
                    otherNews.slice(1, 6).map((news, idx) =>
                        <div key={idx}
                            className='border-b p-2'>
                            <p className='text-red-700'>{news.category}</p>
                            <span >{news.title}</span>
                        </div>)
                }
            </div>
        </div>
    );
};

export default MainNews;