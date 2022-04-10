import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjetoContainer } from './styles';
import picture from '../../assets/site.png';

export default function ProjetoItem() {
  return (
    <ProjetoContainer imgUrl="">
      <section>
        <img src={picture} alt="Perfil" />
        <div className="overlay" />
        <div className="text">
          <h1>Projeto 01</h1>
          <h2>- Portfólio</h2>
        </div>
      </section>
      <button type="button">
        <Link href="/projeto">
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjetoContainer>
  );
}
