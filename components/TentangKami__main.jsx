import React from 'react';
import Link from 'next/link';

function TentangKami__main() {
  return (
    <div className="h-full w-full pt-[4rem] text-center">
      <div className="h-full w-auto max-w-[1230px] mx-auto flex justify-center items-center">
        <div className="mx-auto h-full w-screen bg-white  shadow-xl p-2 text-slate-500 text-sm leading-4 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
        <div>
            <h1 className="text-md p-4 pl-2 text-start">
              <Link
                className="hover:text-green-300"
                href="./ProfilUtama"
              >
                Profil
              </Link>{' '}
              / Tentang Kami
            </h1>
          </div>
          <div className=" text-start pb-8">
            <br />
            <p className="text-2xl pt-2 pl-2 font-semibold uppercase text-center">Tentang Kami</p>
            <br />
            <div className="text-md pl-6">
              <p className=" ">
                Puskesmas merupakan tempat pelayanan kesehatan bagi masyarakat untuk mengatasi masalah kesehatan pada masyarakat. Puskesmas memiliki peran utama dalam meningkatkan kualitas kesehatan masyarakat di daerah kerjanya
              </p>
              <p>Puskesmas Menyelenggarakan Upaya Kesehatan Masyarakat (UKM) tingkat pertama di wilayah kerjanya.</p>
              <p>Dalam menyelenggarakan fungsi penyelenggara UKM tingkat pertama di wilayah kerjanya, Puskesmas berwenang untuk :</p>
              <li>Melaksanakan perencanaan berdasarkan analisis masalah kesehatan masyarakat dan analisa kebutuhan pelayanan yang diperlukan</li>
              <li>Melaksanakan advokasi dan sosialisasi kebijakan kesehatan</li>
              <li>Melaksanakan komunikasi, informasi, edukasi dan pemberdayaan masyarakat dalam bidang kesehatan</li>
              <li>Menggerakkan masyarakat untuk mengidentifikasi dan menyelesaikan masalah kesehatan pada setiap tingkat perkembangan masyarakat yang bekerjasama dengan sektor lain terkait</li>
              <li>Melaksanakan pembinaan teknis terhadap jaringan pelayanan dan upaya kesehatan berbasis masyarakat</li>
              <li>Melaksanakan peningkatan kompetensi sumber daya manusia Puskesmas</li>
              <li>Memantau pelaksanaan pembangunan agar berwawasan kesehatan</li>
              <li>Melaksanakan pencatatan, pelaporan dan evaluasi terhadap akses, mutu dan cakupan pelayanan kesehatan</li>
              <li>Memberikan rekomendasi terkait masalah kesehatan masyarakat termasuk dukungan terhadap sistem kewaspadaan dini dan respon penanggulangan peyakit.</li>
            <br />
            <p>Puskesmas Juga Menyelenggarakan fungsi Upaya Kesehatan Perorangan (UKP) Tingkat Pertama di wilayah kerjanya.</p>
            <li>Menyelenggarakan pelayanan kesehatan dasar secara kompresehensif, berkesinambungan, dan bermutu</li>
            <li>Menyelenggarakan pelayanan kesehatan yang mengutamakan upaya promotif dan preventif</li>
            <li>Menyelenggarakan Pelayanan Kesehatan yang berorientasi pada individu, keluarga, kelompok dan masyarakat;  </li>
            <li>Menyelenggarakan pelayanan kesehatan yang mengutamakan keamanan dan keselamatan pasien, petugas dan pengunjung</li>
            <li>Menyelenggarakan pelayanan kesehatan dengan prinsip koordinatif dan kerja sama inter dan antar profesi</li>
            <li>Melaksanakan rekam medis</li>
            <li>Melaksanakan pencatatan, pelaporan, dan evaluasi terhadap mutu dan akses Pelayanan Kesehatan</li>
            <li>Melaksanakan peningkatan kompetensi tenaga kesehatan</li>
            <li>Mengkoordinasikan dan melaksanakan pembinaan  fasilitas pelayanan kesehatan tingkat pertama di wilayah kerjanya</li>
            <li>Melaksanakan penapisan rujukan sesuai dengan indikasi medis dan sistem rujukan</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TentangKami__main;
