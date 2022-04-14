import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import DivisorDiv from '../components/DivisorDiv';
import Conhecimentos from '../components/Conhecimentos';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <DivisorDiv />
        <HomeHero />
        <DivisorDiv />
        <Experiencias />
        <DivisorDiv />
        <Conhecimentos />
      </main>
    </HomeContainer>
  );
}
