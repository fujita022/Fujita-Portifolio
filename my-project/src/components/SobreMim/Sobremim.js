import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';

const Sobremim = () => (
  <Section id='sobremim'>
    <SectionTitle>Sobre mim</SectionTitle>
    <div className="m-20 mx-auto px-6 py-8 bg-gray-800 rounded-lg shadow-lg transition-transform duration-2000 transform hover:scale-105 animate-pulse">
      <p className="text-gray-300 text-4xl mb-6 text-left leading-relaxed">
        Olá, meu nome é Erick, tenho 18 anos e sou um amante de tecnologia. Desde cedo, sempre fui fascinado pelo potencial que a inovação pode trazer para o mundo dos negócios. Com apenas 14 anos, iniciei minha jornada empreendedora criando um negócio de dropshipping, onde atuei por um ano e meio. Essa experiência me ensinou não apenas sobre vendas e atendimento ao cliente, mas também sobre a importância de se adaptar rapidamente a um mercado em constante mudança.
      </p>
      <p className="text-gray-300 text-4xl mb-6 text-left leading-relaxed">
        Após essa fase, minha curiosidade e desejo de aprender me levaram a mergulhar no marketing digital. Durante dois anos, dediquei-me a estudar e aprimorar minhas habilidades nessa área, explorando diferentes estratégias e ferramentas que me permitiram entender melhor como conectar marcas e consumidores de forma eficaz.
      </p>
      <p className="text-gray-300 text-4xl mb-6 text-left leading-relaxed">
        Atualmente, tenho a honra de fazer parte da equipe de marketing da Eztec, onde aplico meu conhecimento e experiência para ajudar a promover a marca e seus projetos. Estou animado para continuar meu crescimento profissional e contribuir para inovações que impactem positivamente a vida das pessoas.
      </p>
    </div>
  </Section>
);

export default Sobremim;
