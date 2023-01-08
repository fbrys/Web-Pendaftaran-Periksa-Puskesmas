import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import kia from '../public/assets/smiling-doctor-checking-body-temperature-boy-with-non-contact-infrared-thermometer_274689-29516.jpg';

function PoliKIA__main() {
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
              / Poli Pemeriksaan Kesehatan Ibu dan Anak
            </h1>
          </div>
          <div className="py-2 text-start pb-8">
            <div className="justify-center items-center text-center flex">
              <Image
                className="w-[30%] h-[30%]  "
                src={kia}
              ></Image>
            </div>
            <br />
            <p className="text-xl pt-2 pl-2 uppercase text-center">Poli Pemeriksaan Kesehatan Ibu dan Anak</p>
            <br />
            <div className="text-md pl-6">
              <p>
                Pelayanan pemeriksaan umum di Puskesmas meliputi wawancara awal terkait keluhan dan pemeriksaan tanda-tanda vital oleh perawat, anamnesa dan pemeriksaan lebih lanjut oleh dokter, penatalaksanaan sesuai indikasi
                medis (pemeriksaan laboratorium, konseling gizi/kesehatan lingkungan, tindakan medis, terapi obat, rujukan bila diperlukan), pemberian resep obat bila diperlukan. Sarana prasarana yang terdapat dalam pelayanan pemeriksaan
                umum diantaranya adalah Alat pengukuran tanda vital (sphygmomanometer, termometer, timer, stetoskop), Alat Pemeriksaan Fisik (stetoskop, senter, palu reflek), Handscoon, Masker , Faceshield/goggle, Gown, Wastafel cuci
                tangan, Tempat tidur periksa, Meja dan ATK, Ruang pelayanan. Petugas pelaksana dalam pelayanan pemeriksaan umum di Puskesmas yaitu Dokter dan perawat.
              </p>
            </div>
            <br />

            <hr />
            <br />
            <p className="text-xl pt-2 pl-2 uppercase text-center">Jadwal Poli Pemeriksaan Kesehatan Ibu dan Anak</p>
            <br />
            <div className='text-center justify-center uppercase flex'>
              <table class="border-collapse border border-slate-400 w-[28rem]">
                <thead>
                  <tr >
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

export default PoliKIA__main;
