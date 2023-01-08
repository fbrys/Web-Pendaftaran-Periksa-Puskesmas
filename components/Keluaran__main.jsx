import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import anak from '../public/assets/polianak.jpg';

function Keluaran__main() {
  return (
    <div className="h-screen w-full pt-[4rem] text-center">
      <div className="h-full w-auto max-w-[1230px] mx-auto flex justify-center items-center">
        <div className="mx-auto h-full w-screen bg-white shadow-xl p-2 text-slate-500 text-sm leading-4 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
          <div class="flex justify-center">
            <div class="block p-6 bg-whitec justify-center items-center  w-[50%] h-full">
              <div className="justify-center items-center">
                
                <div className="p-6 shadow-xl rounded-xl pb-18">
                <span className="text-center text-2xl font-bold uppercase">Pendaftaran</span>
                  <div className=" justify-center items-center">
                    <div className=" items-center justify-center text-center">
                      <div className="text-start pb-4">
                        <p className="text-xl">Nama :</p>
                        <p>KuroNeko</p>
                        <p className="pt-4 text-xl">Nomor Kartu :</p>
                        <p>12345678910</p>
                        <p className="pt-4 text-xl">Poli :</p>
                        <p>Poli Umum</p>
                        <p className="pt-4 text-xl">Keluhan :</p>
                        <p>Pusing</p>
                      </div>
                      <div className=''>
                        <p>ANTRIAN</p>
                        <span className='text-8xl'>1</span>
                      </div>
                    </div>
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

export default Keluaran__main;
