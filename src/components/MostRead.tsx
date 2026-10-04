import Link from 'next/link';
import React from 'react';

interface INews {
    title: string
    id: string
}

const MostRead = async () => {


    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read')
    const data = await res.json()

    console.log(data);
    const newsData: INews[] = data.data


    return (
        <div className='border rounded-xl p-5'>
            <h2 className='font-bold text-2xl text-red-700'>সর্বাধিক পঠিত</h2>



            <div>

                {
                    newsData.map((news, idx) =>
                        <Link key={news.id} href={`/news/${news.id}`}>
                            <div className='flex gap-2'>
                                <p>{idx + 1}</p>
                                <p key={idx}>{news.title}</p>
                            </div>
                        </Link>
                    )
                }


            </div>

        </div>
    );
};

export default MostRead;