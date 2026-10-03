import Image from 'next/image';
import React from 'react';
import logo from '@/asset/360_F_650178114_WCvMncO2Hhq6qhs2iiwq3i89n7NUlItn.jpg'
const Header = () => {

    const date = new Date().toLocaleString("bn-BD", {
        dateStyle: 'full'
    })

    console.log(date);

    return (
        <div className='flex justify-center'>
            <div> <div className='flex gap-4'>
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
        </div>
    );
};

export default Header;