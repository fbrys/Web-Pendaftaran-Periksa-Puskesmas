import React from 'react';
import Link from 'next/link';
import uwu from '../public/assets/Hospital.png';
import Image from 'next/image';

function Profil__main() {
  return (
    <div className="h-screen w-full pt-[4rem]">
      <div className="h-full w-auto max-w-[1230px] mx-auto flex justify-center items-center">
        <div className="mx-auto h-full w-screen bg-white shadow-xl p-2 text-slate-500 text-sm leading-4 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
          <div className="ml-6 mt-4 pb-2">
            <h1 className="title text-3xl font-bold mb-6">Profile</h1>
            <div className="card-body flex gap-8 mb-5 mt-5">
              <div className="bg-gray-600 w-48 h-28 rounded-md">
                <Image
                  src={uwu}
                  alt="images"
                  className="w-full h-28 bg-cover rounded-md"
                />
              </div>
              <Link href="./Puskesmas">
                <div>
                  <h1 className="text-2xl font-bold">Profil Puskesmas</h1>
                 
                </div>
              </Link>
            </div>
            <hr />
            <div className="card-body flex gap-8 mb-5 mt-5">
              <div className="bg-gray-600 w-48 h-28 rounded-md">
                <Image
                  src={uwu}
                  alt="images"
                  className="w-full h-28 bg-cover rounded-md"
                />
              </div>
              <Link href="./VisiMisi">
                <div>
                  <h1 className="text-2xl font-bold">Visi dan Misi</h1>
                  
                </div>
              </Link>
            </div>
            <hr />
            <div className="card-body flex gap-8 mb-5 mt-5">
              <div className="bg-gray-600 w-48 h-28 rounded-md">
                <Image
                  src={uwu}
                  alt="images"
                  className="w-full h-28 bg-cover rounded-md"
                />
              </div>
              <Link href="./TentangKami">
                <div>
                  <h1 className="text-2xl font-bold">Tentang Kami</h1>
                  
                </div>
              </Link>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil__main;
