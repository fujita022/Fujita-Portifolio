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
        Eu sou o <span className='text-blue-900 font-semibold'>Erick Fujita</span>, mais conhecido como Fujita. Sou estudante de Engenharia de Software na <span class='text-red-400 font-semibold'>FIAP</span>. Comecei cedo no mundo tecnológico e do marketing, comecei cedo com uma empresa responsável por vender e controlar logísticas de produtos da <a href='https://cloudybr.com.br/' target='blank' className='text-blue-300'>Cloudy</a>.
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
