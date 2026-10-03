import Image from 'next/image';
import React from 'react';
import logo from '@/asset/360_F_650178114_WCvMncO2Hhq6qhs2iiwq3i89n7NUlItn.jpg'
const Header = () => {

    const date = new Date().toLocaleString("bn-BD", {
        dateStyle: 'full'
    })



    return (
        <div className='grid grid-cols-2 items-center container mx-auto py-2'>
            <div className='flex items-center justify-center '>
                <div className='flex gap-4'>
                    <Image src={logo}
                        height={40}
                        width={100}
                        alt='header logo' />
                    <div>
                        <h2 className='font-bold text-3xl'>Bangla News 24</h2>
                        <div>
                            <p>{date}</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className='flex justify-end gap-4 '>
                <button className="btn btn-primaryn ">সাইন ইন</button>
                <button className="btn btn-primaryn bg-red-700  text-white">সাইন আপ</button>
            </div>
        </div>
    );
};

export default Header;