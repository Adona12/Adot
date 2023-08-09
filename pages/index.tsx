import Head from 'next/head';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Footer from '../components/layout/Footer';

export default function Landing() {
  return (
    <main className="snap-y snap-mandatory overflow-scroll flex flex-col items-center justify-between bg-white">
      <Head>
        <title>Adot</title>
      </Head>
      <div className="lg:snap-y lg:snap-mandatory h-screen overflow-scroll no-scrollbar">
        <div className="snap-start flex items-center justify-center"><Hero /></div>
        <div className="snap-start flex items-center justify-center"><Features /></div>
        <div className="snap-start flex items-center justify-center"><Footer /></div>
      </div>
    </main>
  )
}
