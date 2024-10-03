import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Olá!
        </SectionTitle>
        <SectionText>
        Meu nome é <span className='text-blue-900 font-semibold'>Erick Fujita</span>, mas sou mais conhecido como Fujita. Sou estudante de Engenharia de Software na <span class='text-red-400 font-semibold'>FIAP</span> e tive meu primeiro contato com o mundo tecnológico e de marketing desde cedo. Iniciei minha carreira criando uma empresa dedicada à venda e à gestão logística de produtos da <a href='https://cloudybr.com.br/' target='blank' className='text-blue-300 font-semibold'>Cloudy</a>, onde pude desenvolver habilidades valiosas nesse campo dinâmico.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/fujita.pdf';
        }}>Acesse aqui</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
