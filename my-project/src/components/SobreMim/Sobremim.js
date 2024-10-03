import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';

const Sobremim = () => (
  <Section id='sobremim'>
    <SectionTitle>Sobre mim</SectionTitle>
    <div className="m-20 mx-auto px-6 py-8 bg-gray-800 rounded-lg shadow-lg transition-transform duration-2000 transform hover:scale-105 animate-pulse">
      <p className="text-gray-300 text-4xl mb-6 text-left leading-relaxed">
        Olá, meu nome é Erick, tenho 18 anos e sou um amante de tecnologia. Desde cedo, sempre fui fascinado pelo potencial que a inovação pode trazer para o mundo dos negócios. Com apenas 14 anos, iniciei minha jornada empreendedora criando um negócio de <a href="https://www.google.com/search?q=o+que+%C3%A9+dropshipping&oq=o+que+%C3%A9+dropshgi&gs_lcrp=EgZjaHJvbWUqCggBEAAYsQMYgAQyBggAEEUYOTIKCAEQABixAxiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIJCAcQABgKGIAEMgkICBAAGAoYgAQyBwgJEAAYgATSAQg0MzU5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8" target="_blank" className='text-blue-200'>dropshipping</a>, onde atuei por um ano e meio. Essa experiência me ensinou não apenas sobre vendas e atendimento ao cliente, mas também sobre a importância de se adaptar rapidamente a um mercado em constante mudança.
      </p>
      <p className="text-gray-300 text-4xl mb-6 text-left leading-relaxed">
        Após essa fase, minha curiosidade e desejo de aprender me levaram a mergulhar no <span className='text-white font-semibold relative group'>
  <span className='absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-30 rounded-md blur-md group-hover:opacity-100 transition-opacity duration-300'></span>
  <a href='https://www.google.com/search?q=o+que+e+marketing+digital&oq=o+que+e+marketing+digital&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIKCAYQABiABBiiBDIGCAcQRRhA0gEIMjk3M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8' className='relative z-10 underline decoration-blue-300 decoration-4' target='blank'>Marketing Digital</a>
</span>. Durante dois anos, dediquei-me a estudar e aprimorar minhas habilidades nessa área, explorando diferentes estratégias e ferramentas que me permitiram entender melhor como conectar marcas e consumidores de forma eficaz.
      </p>
      <p className="text-gray-300 text-4xl mb-6 text-left leading-relaxed">
        Atualmente, tenho a honra de fazer parte da equipe de marketing da <a href="https://eztec.com.br" target="_blank" className='text-red-500 font-semibold' >Eztec</a>, onde aplico meu conhecimento e experiência para ajudar a promover a marca e seus projetos. Estou animado para continuar meu crescimento profissional e contribuir para inovações que impactem positivamente a vida das pessoas.
      </p>
    </div>
  </Section>
);

export default Sobremim;
