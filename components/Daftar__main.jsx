import React from 'react';
import Link from 'next/link';

function Daftar__main() {
  return (
    <div className="h-screen w-full pt-[4rem] text-center">
      <div className="h-full w-auto max-w-[1230px] mx-auto flex justify-center items-center">
        <div className="mx-auto h-full w-screen bg-white shadow-xl p-2 text-slate-500 text-sm leading-4 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
          <div class="flex justify-center">
            <div class="block p-6 bg-whitec justify-center items-center  w-[50%] h-full">
              <div className="justify-center items-center">
                <span className="text-center text-2xl font-bold uppercase">Daftar</span>
                <form
                  className="mt-8 "
                  action="#"
                  method="POST"
                >
                  <div className=" grid md:grid-cols-1 md:gap-96 gap-8 text-start">
                    <div>
                      <input
                        type="hidden"
                        name="remember"
                        defaultValue="true"
                        className="p-2"
                      />
                      <span className="">Nama</span>
                      <div className="-space-y-px rounded-md shadow-sm pt-4 pb-4">
                        <div>
                          <label
                            htmlFor="nama-periksa"
                            className="sr-only"
                          >
                            Masukkan Nama Anda
                          </label>
                          <input
                            id="nama-periksa"
                            name="nama-periksa"
                            type=" name"
                            autoComplete="name"
                            required
                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-1 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                            placeholder="Masukan Nama Anda"
                          />
                        </div>
                      </div>

                      <input
                        type="hidden"
                        name="remember"
                        defaultValue="true"
                      />
                      <span className="">Nomor Kartu Periksa</span>
                      <div className=" -space-y-px rounded-md shadow-sm pt-4 pb-4">
                        <div>
                          <label
                            htmlFor="nomor-kartu-periksa"
                            className="sr-only"
                          >
                            Masukkan Nomor Kartu Periksa
                          </label>
                          <input
                            id="nomor-kartu-periksa"
                            name="nomor-kartu-peserta"
                            type="number"
                            autoComplete="number"
                            required
                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                            placeholder="Masukkan Nomor"
                          />
                        </div>
                      </div>
                      <p className='text-md'>Belum Punya Kartu Kesehatan? Klik <Link className='hover:underline' href="./BuatKartu">disini</Link></p>
                      <input
                        type="hidden"
                        name="remember"
                        defaultValue="true"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-16 md:mt-auto py-12">
                    <Link href="./DaftarLanjut">
                      <button
                        type="submit"
                        className="px-3 py-2 text-center rounded-md text-white bg-blue-800 "
                      >
                        Selanjutnya
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Daftar__main;
