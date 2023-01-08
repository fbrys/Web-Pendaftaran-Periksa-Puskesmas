import Head from 'next/head';
import Navbarku from '../components/Navbarku';
import Footer from '../components/Footer';
import JadwalPelayanan__main from '../components/JadwalPelayanan__main';

export default function JadwalPelayanan() {
  return (
    <div>
      <Head>
        <title>Jadwal Pelayanan</title>
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
      <JadwalPelayanan__main />
      <Footer />
    </div>
  );
}