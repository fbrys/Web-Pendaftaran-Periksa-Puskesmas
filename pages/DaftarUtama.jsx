import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Daftar__main from '../components/Daftar__main';
import Navbarku from '../components/Navbarku';

export default function DaftarUtama() {
  return (
    <div>
      <Head>
        <title>Daftar Periksa</title>
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
      <Daftar__main />
      <Footer />
    </div>
  );
}
