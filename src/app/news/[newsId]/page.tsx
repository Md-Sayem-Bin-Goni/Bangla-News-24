import Image from 'next/image';


const page = async ({ params,}: { params: Promise<{ newsId: string }>;}) => {

    const { newsId } = await params
    console.log(newsId);

    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`)
    
    const data = await res.json()

    const fullnews = data.data


    console.log(data.data);

    return (
        <div className='max-w-4xl mx-auto'>

            <h2 className='text-red-700 font-bold text-4xl mt-10'>
                {fullnews.title}</h2>
            <Image
            src={fullnews.imageUrl}
            height={800}
            width={800}
            alt={fullnews.title}
            className='mt-5'/>
            <p className='mt-10 text-xl justify-center'>{fullnews.text}</p>


        </div>
    );
};

export default page;







