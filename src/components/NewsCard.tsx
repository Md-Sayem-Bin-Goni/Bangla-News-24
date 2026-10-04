import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


interface INews {

    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string

}

const NewsCard = ({ news }: { news: INews }) => {
    return (
        <Link href={`/news/${news.id}`}>
            <div className="card bg-base-100  shadow-sm">
                <figure>
                    <Image

                        src={news.imageUrl}
                        alt="{news.title}"
                        height={600}
                        width={600} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{news.title}</h2>

                </div>
            </div>
        </Link>
    );
};

export default NewsCard;