"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import img1 from "@/app/assetsc/slide1.png"
import img2 from "@/app/assetsc/slide2.png"
import img3 from "@/app/assetsc/slide3.png"
import Image from 'next/image';
const Banner: React.FC = () => {
    const sliderInfo = [
        {
            image : img1,
            name : "Ruhit Baidya",
            dgree : "this conditional to long and some how",
        },
        {
            image : img2,
            name : "mitun Baidya",
            dgree : "this conditional to long and some how",
        },
        {
            image : img3,
            name : "sanjib Baidya",
            dgree : "this conditional to long and some how",
        },
    ]
  return (
    <div className="container mx-auto px-[10px] mt-[50px] border border-purple-500 rounded-lg">
      <div className='p-[30px]'>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-[20px]'>
        <div className='space-y-4'>
            <h1 className='text-4xl'>The Popular Diagnostic Center</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint molestiae nesciunt hic ipsum rem nemo autem iusto obcaecati quisquam excepturi?</p>
            <div className='mt-[40px]'>
            <Link className='border rounded-lg border-purple-500 px-[40px] py-[15px]' href="/allDoctor">Show All Doctor</Link>
            </div>
        </div>
        <div>
        <Swiper
        spaceBetween={30}
        effect={'fade'}
        
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper"
      >
        {
            sliderInfo.map((item)=> <>
            <SwiperSlide>
            <div className=' rounded-lg bg-white'>
            <div className='flex justify-center items-center'>

          <Image src={item.image} width={400} height={400} alt={item.name} />
            </div>
            <div className='text-center mt-[15px]'>
                <h3 className='text-2xl'>{item.name}</h3>
                <p>{item.dgree}</p>
                <button>See More</button>
            </div>
            </div>
        </SwiperSlide>
            </>)
        }
      </Swiper>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Banner;