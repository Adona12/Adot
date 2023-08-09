import Navbar from '../../components/layout/Navbar';
import Head from 'next/head';
import InsightsCatagories from '../../components/insights/InsightsCatagories';
import Footer from '../../components/layout/Footer';

export default function Insights() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-r from-quaternary via-white to-quaternary">
      <Head>
        <title>Adot</title>
      </Head>
        <Navbar />
        <InsightsCatagories />
        <Footer />
    </main>
  )
}
