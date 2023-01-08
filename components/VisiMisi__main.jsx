import React from 'react';
import Link from 'next/link';

function VisiMisi__main() {
  return (
    <div className="h-screen w-full pt-[4rem] text-center">
      <div className="h-full w-auto max-w-[1230px] mx-auto flex justify-center items-center">
        <div className="mx-auto h-full w-screen bg-white  shadow-xl p-2 text-slate-500 text-sm leading-4 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
          <div>
            <h1 className="text-md pt-4 pl-2 text-start">
              <Link
                className="hover:text-green-300"
                href="./ProfilUtama"
              >
                Profil
              </Link>{' '}
              / Visi dan Misi
            </h1>
          </div>
          <div className=" text-start ">
            <br />
            <p className="text-2xl pt-2 pl-2 font-semibold uppercase text-center">Visi dan Misi</p>
            <br />
            <div className="text-md pl-6">
              <p className="text-xl">Visi UPT Puskesmas</p>
              <p>Terwujudnya UPT Puskesmas dengan pelayanan kesehatan yang bermutu menuju terciptanya kecamatan sehat dan mandiri.</p>
              <br />
              <p className="text-xl">Misi UPT Puskesmas </p>
              <li>Mengoptimalkan penyelenggaraan upaya peningkatan derajat kesehatan perorangan dan masyarakat dengan meningkatkan intensitas kegiatan promosi dan preventif</li>
              <li>Menggalang kerjasama lintas program dan litas sektor dalam setiap upaya peningkatan derajat kesehatan masyarakat</li>
              <li>Mengupayakan kepedulian serta peran aktif masyarakat dalam menjaga dan meningkatkan derajat kessehatan masyarakat</li>
              <li>Meningkatkan motivasi, kerjasama, dan kinerja karyawan sehingga terwujud budaya kerja yang positif.</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisiMisi__main;
