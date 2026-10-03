import Image from 'next/image';
import React from 'react';


interface INews {

  title: string
  imageUrl: string

}
const NewsCard = ({firstNews}: {firstNews: INews}) => {
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure>
                <Image
                    src={firstNews.imageUrl}
                    alt="Shoes" 
                    height={600}
                    width={600}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstNews.title}</h2>
               
            </div>
        </div>
    );
};

export default NewsCard;