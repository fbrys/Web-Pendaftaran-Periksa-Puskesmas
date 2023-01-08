import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Keluaran from '../components/Keluaran__main';
import Navbarku from '../components/Navbarku';

export default function Output() {
  return (
    <div>
      <Head>
        <title>Output Pendaftaran</title>
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
      <Keluaran />
      <Footer />
    </div>
  );
}
