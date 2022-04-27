import Head from 'next/head';
import { useEffect } from 'react';
import Aos from 'aos';
import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import DivisorDiv from '../components/DivisorDiv';
import Conhecimentos from '../components/Conhecimentos';
import Projetos from '../components/Projetos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Christian</title>
      </Head>
      <Header />

      <main className="container">
        <DivisorDiv />
        <HomeHero />
        <DivisorDiv />
        <Experiencias />
        <DivisorDiv />
        <Conhecimentos />
        <DivisorDiv />
        <Projetos />
        <DivisorDiv />
      </main>
    </HomeContainer>
  );
}
