import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="" description="" />

      <section>
        <ExperienciaItem
          year="2018 á 2020"
          title="Ensino Superior Completo"
          description="Sou formado em Análise e Desenvolvimento de Sitemas pela Universidade Nove
          de Julho, durante 2018 á 2020."
        />

        <ExperienciaItem
          year="2021"
          title="Sistema de Tabelas"
          description="Em 2021 realizei um sistema profissional em HTML, CSS, PHP e MySQL, o sistema exibe os nomes dos produtos com os preços no monitor
          com consulta do banco de dados utilizando PHP e MySQL."
        />

        <ExperienciaItem
          year="2022"
          title="Cursos"
          description="Estou sempre buscando melhorar a cada dia (principalmente na área da tecnologia),
          fazendo cursos e buscando conhecimento."
        />
      </section>
    </Container>
  );
}

export default Experiencias;
