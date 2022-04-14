import { SiNextdotjs } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { Container } from './styles';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="Next JS" icon={<SiNextdotjs />} />
        <ConhecimentoItem title="Html5" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="Css3" icon={<DiCss3 />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
