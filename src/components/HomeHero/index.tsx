/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/perfil_vagas.jpg';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src={picture} alt="Perfil" />
      <div>
        <TextContainer>
          <h2>Portfólio</h2>
        </TextContainer>

        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Christian Pereira,</span>
            </div>
            <div>
              Idade: <span className="blue">21 anos</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Área de atuação: <span className="blue">Dev Full stack,</span>
            </div>
            <div>
              Trabalho: <span className="blue">Freelancer</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
