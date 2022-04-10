import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import ProjetoItem from './ProjetoItem';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />

      <section>
        <ProjetoItem />
        <ProjetoItem />
        <ProjetoItem />
      </section>
    </Container>
  );
}

export default Projetos;
