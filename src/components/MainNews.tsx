import React from 'react';
import NewsCard from './NewsCard';

interface INews {
    title: string
    imageUrl: string
    category: string
}

interface IMainNewsProps {
    firstNews: INews
    allNews: INews[]
}


const MainNews = ({ firstNews, allNews }: IMainNewsProps) => {

    // const featureNews = allNews.slice(1,6)
    // console.log(allNews);


    return (
        <div className='grid grid-cols-3 gap-5'>
            <div className='col-span-1'>
                <NewsCard firstNews={firstNews} />
            </div>


            <div className='col-span-1 border rounded-xl p-3'>
                {
                    allNews.slice(1, 6).map((news, idx) =>
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