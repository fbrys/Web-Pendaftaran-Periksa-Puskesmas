import React from 'react';
import Link from 'next/link';

function DaftarSelanjutnya() {
  return (
    <div className="h-screen w-full pt-[4rem] text-center">
      <div className="h-full w-auto max-w-[1230px] mx-auto flex justify-center items-center">
        <div className="mx-auto h-full w-screen bg-white shadow-xl p-2 text-slate-500 text-sm leading-4 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
          <div class="flex justify-center">
            <div class="block p-6 bg-whitec justify-center items-center  w-[50%] h-full">
              <div className="justify-center items-center">
                <span className="text-center text-2xl font-bold uppercase">Daftar</span>
                <div className="text-start mt-8">
                  <span>Poli</span>
                </div>
                <div class="flex justify-between pt-2">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="inlineCheckbox1"
                    >
                      Poli Umum
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="inlineCheckbox2"
                    >
                      Poli Anak
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="inlineCheckbox2"
                    >
                      Poli Gigi
                    </label>
                  </div>
                </div>
                <div className="justify-center items-center pt-4">
                  <form
                    className="mt-2 "
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
                        <span className="pt-2">Keluhan</span>
                        <div className="-space-y-px rounded-md shadow-sm pt-4 pb-4">
                          <div>
                            <label
                              htmlFor="nama-periksa"
                              className="sr-only"
                            >
                              Masukkan Keluhan Anda
                            </label>
                            <input
                              id="nama-periksa"
                              name="nama-periksa"
                              type=" name"
                              autoComplete="name"
                              required
                              className="pb-16 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-1 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-600 focus:outline-none focus:ring-blue-600 sm:text-sm"
                              placeholder="Masukan Nama Anda"
                            />
                          </div>
                        </div>

                        <input
                          type="hidden"
                          name="remember"
                          defaultValue="true"
                        />
                      </div>
                    </div>
                    <div className="text-center mt-16 md:mt-auto py-12">
                      <Link href="./Output">
                        <button
                          type="submit"
                          className="px-3 py-2 text-center rounded-md text-white bg-blue-800 "
                        >
                          Submit
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
    </div>
  );
}

export default DaftarSelanjutnya;
