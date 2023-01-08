import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import depan from '../public/assets/Hospital.png';

function Puskesmas__main() {
  return (
    <div className="h-full w-full pt-[4rem] text-center">
      <div className="h-full w-auto max-w-[1230px] mx-auto flex justify-center items-center">
        <div className="mx-auto h-full w-screen bg-white  shadow-xl p-2 text-slate-500 text-sm leading-4 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
        <div>
            <h1 className="text-md pt-4 pb-2 pl-2 text-start">
              <Link
                className="hover:text-green-300"
                href="./ProfilUtama"
              >
                Profil
              </Link>{' '}
              / Profil Puskesmas
            </h1>
          </div>
          <div className="text-start pb-8">
            <div className="justify-center items-center text-center flex">
              <Image
                className="w-[522px] h-[261px]  "
                src={depan}
              ></Image>
            </div>
            <br />
            <p className="text-2xl pt-2 pl-2 font-semibold uppercase text-center">Profil Puskesmas</p>
            <br />
            <div className="text-md pl-6">
              <p>1. Gambaran Umum</p>
              <p>Nama Puskesmas : UPT PUSKESMAS</p>
              <p>Sabtu : 07.30 - 10.30</p>
              <p>Alamat : Jl. A, Kode Pos 00000, Provinsi D</p>
              <p>Produk : Jasa pelayanan kesehatan dasar dengan kegiatan pokok meliputi upaya promotif, preventif, kuratif dan rehabilitatif melalui Upaya Kesehatan Perorangan (UKP) dan Upaya Kesehatan Masyarakat (UKM).</p>
              <br />
              <p>2. Kondisi Wilayah Geografi</p>
              <p>UPT Puskesmas merupakan Puskesmas yang terletak di Desa A, Kecamatan B, Kabupaten C, Propinsi D dengan batas wilayah:</p>
              <p>Utara : Batas Utara</p>
              <p>Selatan : Batas Selatan</p>
              <p>Timur : Batas Timur</p>
              <p>Barat : Batas Barat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Puskesmas__main;
