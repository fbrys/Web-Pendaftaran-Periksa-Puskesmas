import React from 'react';
import Link from 'next/link';
import anak from '../public/assets/polianak.jpg';
import umum from '../public/assets/poliumum.jpg';
import gigi from '../public/assets/poligigi.jpg';
import Image from 'next/image';

function Pelayanan__main() {
  return (
    <div className="h-screen w-full pt-[4rem] text-center">
      <div className="h-full w-auto max-w-[1230px] mx-auto flex justify-center items-center">
        <div className="mx-auto h-full w-screen bg-white  shadow-xl p-2 text-slate-500 text-sm leading-4 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
          <div className="flex pt-2 mx-auto flex-col justify-center ">
            <p className="pt-4 text-2xl text-center text-orange-500">Pelayanan</p>
            <h2 className=" text-4xl text-center font-bold">Pelayanan yang tersedia</h2>
            <div className="grid pt-4 md:grid-cols-3 gap-8 px-2">
              <div className="p-6 shadow-xl  rounded-xl hover:scale-105">
                <div className=" justify-center items-center">
                  <div className=" items-center justify-center text-center">
                    <Link href="./PoliUmum">
                      <Image
                        src={umum}
                        alt="UMUM"
                      />
                      <h3>Poli Kesehatan Umum</h3>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105">
                <div className=" justify-center items-center">
                  <div className=" items-center justify-center text-center">
                    <Link href="./PoliKIA">
                      <Image
                        src={anak}
                        alt="KIA"
                      />
                      <h3>Poli Kesehatan Ibu dan Anak</h3>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-6 shadow-xl rounded-xl hover:scale-105">
                <div className=" justify-center items-center">
                  <div className=" items-center justify-center">
                    <Link href="./PoliGigi">
                      <Image
                        src={gigi}
                        alt="GIGI"
                      />
                      <h3>Poli Kesehatan Gigi dan Mulut</h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pelayanan__main;
