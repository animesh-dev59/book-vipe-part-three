import Image from 'next/image';
import React from 'react';
import BannerImg from '@/assets/hero_img.jpg'

const Banner = () => {
  return (
    <div className='flex items-center justify-between bg-slate-200 container mx-auto p-14 rounded-4xl my-4'>
      <div className='pl-9'>
       <h2 className='font-bold text-5xl  my-3'>Books to freshen <br /> for boookself</h2>
       <button className='btn btn-success'>View the list</button>
      </div> 
      <div> 
      <Image src={BannerImg} className='rounded-3xl' alt='BannerImg'/>
      </div>
    </div>
  );
};

export default Banner;