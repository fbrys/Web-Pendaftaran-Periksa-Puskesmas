import Head from 'next/head';
import Footer from '../components/Footer';
import PG from '../components/PoliGigi__main';
import Navbarku from '../components/Navbarku';

export default function PoliGigi() {
  return (
    <div>
      <Head>
        <title>Poli Gigi</title>
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
      <PG />
      <Footer />
    </div>
  );
}
