import React, { useState } from 'react';
import Link from 'next/link';

const Navbarku = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);

    const [dropdownOpen, setdropdownOpen] = useState(false);
  };

  return (
    <div>
      <div className={nav ? ' bg-green-500 fixed w-full h-20 z-[100]' : 'fixed w-full h-20 shadow-sm z-[100] bg-green-500'}>
        <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 ">
          <div className=" font-bold text-2xl pl-16 text-white">
            <h1>Puskesmas</h1>
          </div>
          <div>
            <ul className="hidden md:flex text-xl uppercase text-zinc-50">
              <Link href="/">
                <li className="pr-16 hover:text-white">HOME</li>
              </Link>
              <Link href="./ProfilUtama">
                <li className="pr-16 hover:text-white">PROFIL</li>
              </Link>
              <Link href="./Pelayanan">
                <li className="pr-16 hover:text-white">Pelayanan</li>
              </Link>
              <Link href="./JadwalPelayanan">
                <li className="pr-16 hover:text-white">Jadwal Pelayanan</li>
              </Link>
              <Link href="./InfoKesehatanUtama">
                <li className="pr-16 hover:text-white">Info Kesehatan</li>
              </Link>
              <Link href="./DaftarUtama">
                <li className="pr-16 hover:text-white">Daftar</li>
              </Link>
            </ul>
            <div
              onClick={handleNav}
              className="md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
          <div className={nav ? 'fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-green-500 p-10 ease-in duration-800' : 'fixed left-[-100%] top-0 p-10 ease-in duration-800'}>
            <div>
              <div className="flex w-full items-center justify-between">
                <div className=" font-bold text-xl text-white">
                  <h1>Puskesmas</h1>
                </div>
                <div
                  onClick={handleNav}
                  className="rounded-full bg-slate-300 shadow-sm shadow-gray-400 p-3 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="py-4 pt-20 flex flex-col text-white">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 pr-16 border-b-2 border-white hover:text-white">HOME</li>
                </Link>
                <Link href="./ProfilUtama">
                  <li className="py-4 pr-16 border-b-2 border-white hover:text-white">PROFIL</li>
                </Link>
                <Link href="./Pelayanan">
                  <li className="py-4 pr-16 border-b-2 border-white hover:text-white">Pelayanan</li>
                </Link>
                <Link href="./JadwalPelayanan">
                  <li className="py-4 pr-16 border-b-2 border-white hover:text-white">Jadwal Pelayanan</li>
                </Link>
                <Link href="./InfoKesehatanUtama">
                  <li className="py-4 pr-16 border-b-2 border-white hover:text-white">Info Kesehatan</li>
                </Link>
                <Link href="./Daftarutama">
                  <li className="py-4  hover:text-white">Daftar</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbarku;
