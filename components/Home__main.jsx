import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import Image from 'next/image';
import Gedung from '../public/assets/Hospital background.jpeg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home__main() {
  return (
    <div class="w-full h-[95vh]">
      <div class="w-full h-[95vh]">
        <div className="grid md:grid-cols-3 gap-4 pt-20">
          <div className="flex h-auto col-span-2 justify-center items-center">
            <div className="flex w-full h-[523px] ">
              <Swiper
                spaceBetween={0}
                
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {' '}
                  <Image
                    src={Gedung}
                    className="flex w-full h-[523px]"
                  ></Image>{' '}
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <Image
                    src={Gedung}
                    className="flex w-full h-[523px]"
                  ></Image>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <Image
                    src={Gedung}
                    className="flex w-full h-[523px]"
                  ></Image>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div class="justify-center h-auto items-center col-span-1 text-center pt-28 drop-shadow-lg">
            <div className="font-family:google pt-8">
              <h1 className="text-2xl">Selamat Datang di Website Puskesmas</h1>
              <h2 className="text-lg">Untuk Melakukan Pendaftaran Perksa</h2>
              <h2 className="text-lg">Anda Dapat Mengklik Tombol Dibawah</h2>
              <br />
            </div>

            <Link href='./DaftarUtama'>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-lg px-6 py-3.5 text-center mr-2 mb-2"
            >
              Daftar
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home__main;
