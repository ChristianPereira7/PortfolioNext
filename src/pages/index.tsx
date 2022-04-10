import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import DivisorDiv from '../components/DivisorDiv';
import Projetos from '../components/Projetos';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <DivisorDiv />
        <Experiencias />
        <DivisorDiv />
        <Projetos />
      </main>
    </HomeContainer>
  );
}
