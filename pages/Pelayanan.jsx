import Head from 'next/head';
import Footer from '../components/Footer';
import Pelayanan__main from '../components/Pelayanan__main';
import Navbarku from '../components/Navbarku';

export default function Pelayanan() {
  return (
    <div>
      <Head>
        <title>Pelayanan</title>
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
      <Pelayanan__main />
      <Footer />
    </div>
  );
}
