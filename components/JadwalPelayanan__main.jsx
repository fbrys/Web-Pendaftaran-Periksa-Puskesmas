import React from 'react';

function JadwalPelayanan__main() {
  return (
    <div className="h-screen w-full pt-[4rem] text-center">
      <div className="h-full w-auto max-w-[1230px] mx-auto flex justify-center items-center">
        <div className="mx-auto h-full w-screen bg-white  shadow-xl p-2 text-slate-500 text-sm leading-4 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
          <div>
            <h1 className="text-4xl py-4 pl-2 font-bold text-start">Jadwal Pelayanan</h1>
          </div>
          <div className="py-2 text-start">
            <br />
            <p className="text-xl pt-2 pl-2">Jam Layanan Umum</p>
            <div className=" pl-6">
              <p>Senin-Kamis : 07.30 - 11.00</p>
              <p>Jumat : 07.30 - 10.00</p>
              <p>Sabtu : 07.30 - 10.30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JadwalPelayanan__main;
