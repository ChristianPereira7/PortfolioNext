import React from 'react';
import Link from 'next/link';
import { Card } from './styles';
import banner from '../../assets/banner.jpg';
import SectionTitle from '../SectionTitle';

function Projetos() {
  return (
    <Card className="aditem" data-aos="fade-up">
      <SectionTitle title="Projetos recentes" />
      <Link href="/">
        <a>
          <div className="itemImage">
            <img src={banner} alt="foto" />
          </div>
          <div className="itemNome">Projeto 1</div>
          <div className="itemDesc">TESTE TEST TESTE TEST TESTE TEST</div>
        </a>
      </Link>
      <Link href="/">
        <a>
          <div className="itemImage">
            <img src={banner} alt="foto" />
          </div>
          <div className="itemNome">...</div>
          <div className="itemDesc">...</div>
        </a>
      </Link>
    </Card>
  );
}

export default Projetos;
