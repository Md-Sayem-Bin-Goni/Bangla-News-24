import Link from 'next/link';

import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface ILinks {
    title: string,
}

const Marquee = async () => {

    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data = await res.json()



    const links: ILinks[] = data.data




    return (
        <div className='bg-red-700 mt-2.5'>
            <div className='flex container mx-auto'>

                <div>
                    <p className='bg-red-800 text-white py-1 px-5 font-bold'>সর্বশেষ</p>
                </div>

                <MarqueeText direction='right' duration={10}>
                    <div className=' text-white py-1'>

                        {
                            links.map((link, idx: number) =>
                                <Link

                                    href='/' key={idx}>
                                    <span >
                                        <span >{link.title}</span>
                                        <span className='mx-5 '>󠁯•󠁏</span>
                                    </span>
                                </Link>)
                        }

                    </div>
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;