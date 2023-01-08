import React from 'react';

function BuatKartu__main() {
  return (
    <div className="h-screen w-full pt-[4rem] text-center">
      <div className="h-full w-auto max-w-[1230px] mx-auto flex justify-center items-center">
        <div className="mx-auto h-full w-screen bg-white  shadow-xl p-2 text-slate-500 text-sm leading-4 sm:text-base sm:leading-7 dark:bg-slate-800 dark:text-slate-400">
          <div>
            <h1 className="text-4xl py-4 pl-2 font-bold text-start">Buat Kartu Kesehatan</h1>
          </div>
          <div className="py-2 text-start">
            <br />
            <p className="text-xl pt-2 pl-2">Bagaimana jika saya kartu kesehatan?</p>
            <div className="py-2  pl-4">
              <p>
                Jika Anda belum mempunyai Kartu Pendaftaran, anda dapat membuat Kartu Pendaftaran dengan datang ke Puskesmas terdekat dan mendaftar secara langsung di loket pendaftaran dengan membawa ktp atau tanda pengenal lain (bagi yang
                belum mempunyai ktp) atau bisa mengkuti langkah-langkah sebagai berikut :
              </p>
              <ol className='type:1'>
              <li >1. Datang ke Puskesmas terdekat dengan membawa KTP atau dientitas lainnya (kartu keluarga/ akta kelahiran).</li>
              <li>2. Pergi ke loket Pendaftaran dan sampaikan bahwa ingin membuat kartu pendaftaran.</li>
              <li>3. Staff akan membuatkan Kartu dan Kartu akan diberikan kepada anda.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuatKartu__main;
