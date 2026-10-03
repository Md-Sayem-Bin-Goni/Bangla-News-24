import Image from 'next/image';
import React from 'react';


interface INews {

  id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string

}

const NewsCard = ({news}: {news: INews}) => {
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure>
                <Image
                    src={news.imageUrl}
                    alt="Shoes" 
                    height={600}
                    width={600}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{news.title}</h2>
               
            </div>
        </div>
    );
};

export default NewsCard;