import Link from 'next/link';
import React from 'react';

interface IfilterNavLinks {
id : number,
title: string,
slug : string,
scrapable : boolean
}


const Navlinks = async () => {

    const res = await fetch('https://news-api-v2.vercel.app/api/categories')
    const data = await res.json()

    const navLinks :  IfilterNavLinks[]= data.data

    const filterNavLinks  = navLinks.filter((nav) => nav.scrapable)


    return (
        <div className='flex gap-5 justify-center '>
            <Link 
            className='hover:text-red-700 hover:underline'
            href='/'>হোম</Link>
            {
                filterNavLinks.map((filterNavLink, idx) => <Link key={idx}  href={`/category/${filterNavLink.slug}`} className='hover:text-red-700 hover:underline'>{filterNavLink.title}</Link>)
            }
        </div>
    );
};

export default Navlinks;