import React from 'react';
import Image from 'next/image';
import gg from '../public/assets/young-woman-sits-exam-table-across-from-her-doctor-doctor-reaches-forward-with-tongue-depressor-as-woman-looks-up-sticks-out-her-tongue.jpg';
import Link from 'next/link';

function PoliGigi__main() {
  return (
    <div className="h-full w-full pt-[4rem] text-center">
      <div className="h-full w-auto max-w-[1230px] mx-auto flex justify-center items-center">
        <div className="mx-auto h-full w-screen bg-white  shadow-xl p-2 text-slate-500 text-sm leading-4 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
          <div>
            <h1 className="text-md py-4 pl-2 text-start">
              <Link
                className="hover:text-green-300"
                href="./Pelayanan"
              >
                Pelayanan
              </Link>{' '}
              / Poli Kesehatan Gigi dan Mulut
            </h1>
          </div>
          <div className="py-2 text-start pb-8">
            <div className="justify-center items-center text-center flex">
              <Image
                className="w-[30%] h-[30%]  "
                src={gg}
              ></Image>
            </div>
            <br />
            <p className="text-xl pt-2 pl-2 uppercase text-center">Poli Kesehatan Gigi dan Mulut</p>
            <br />
            <div className="text-md pl-6">
              <p>
                Pelayanan kesehatan gigi dan mulut di Puskesmas meliputi Pemeriksaan Gigi, Pengobatan penyakit gigi dan mulut, Pencabutan gigi susu tanpa suntikan, Pencabutan gigi susu dengan suntikan, Pencabutan gigi tetap,
                Trepanasi gigi, Tumpatan sementara, Tumpatan tetap, Tumpatan gigi dengan perawatan syaraf dan Pembersihan karang gigi. Petugas pelaksana dalam pelayanan kesehatan gigi dan mulut di Puskesmas yaitu Dokter gigi dan
                Perawat gigi.
              </p>
            </div>
            <br />

            <hr />
            <br />
            <p className="text-xl pt-2 pl-2 uppercase text-center">Jadwal Poli Kesehatan Gigi dan Mulut</p>
            <br />
            <div className="text-center justify-center uppercase flex">
              <table class="border-collapse border border-slate-400 w-[28rem]">
                <thead>
                  <tr>
                    <th class="border border-slate-300 px-18">Hari</th>
                    <th class="border border-slate-300">Waktu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-slate-300">Senin-Kamis</td>
                    <td class="border border-slate-300">07.30 - 11.00</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300">jumat</td>
                    <td class="border border-slate-300">07.30 - 10.00</td>
                  </tr>
                  <tr>
                    <td class="border border-slate-300">Sabtu</td>
                    <td class="border border-slate-300">07.30 - 10.30</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoliGigi__main;
