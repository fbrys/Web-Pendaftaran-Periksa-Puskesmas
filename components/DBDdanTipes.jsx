import React from 'react';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Link from 'next/link';
import Image from 'next/image';
import cover from '../public/assets/dbd-cover.png';
import konten1 from '../public/assets/dbd-1.png';
import uwu from '../public/assets/dbd-2.png';

function DBDdanTipes() {
  return (
    <div className="h-screen w-full pt-[4rem] text-center">
      <div className="h-full w-full max-w-[1230px] mx-auto flex justify-center items-center">
        <div className="mx-auto h-max w-full bg-white pb-8  shadow-xl p-2 text-slate-500 text-sm leading-4 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
          <div className="ml-6 mt-4 pb-2">
            <h1 className="title text-3xl font-bold mb-6 ">Perbedaan DBD dan TIPES</h1>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image src={cover}></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={konten1}></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={uwu}></Image>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default DBDdanTipes;
