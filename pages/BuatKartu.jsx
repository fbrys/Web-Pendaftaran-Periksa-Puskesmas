import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import DaftarKartu from '../components/BuatKartu__main';
import Navbarku from '../components/Navbarku';

export default function BuatKartu() {
  return (
    <div>
      <Head>
        <title>Buat Kartu</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Navbarku />
      <DaftarKartu />
      <Footer />
    </div>
  );
}
