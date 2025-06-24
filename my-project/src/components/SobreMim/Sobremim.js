import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { SobreQuery } from './SobremimStyle';

const Sobremim = () => (
  <Section id='sobremim'>
    <SectionTitle>Sobre mim</SectionTitle>
    <SobreQuery>
      <div className="m-6 md:m-10 lg:m-20 mx-auto px-4 md:px-6 lg:px-8 py-6 bg-gray-800 rounded-lg shadow-lg transition-transform duration-2000 transform hover:scale-105 animate-pulse">
        <p className="text-gray-300 text-xl md:text-2xl lg:text-4xl mb-4 text-left leading-relaxed">
          Fala pessoal! Tudo bem? Meu nome é Erick, tenho e para você me conhecer um pouquinho melhor, vamos lá! Desde cedo, sempre fui fascinado pelo potencial que a inovação e a tecnologia podem trazer para o mundo dos negócios e tenho um objetivo que é ser impactante para a transformação digital e ser referência. Com 14 anos, iniciei minha carreira criando um negócio de
          <a href="https://www.google.com/search?q=o+que+%C3%A9+dropshipping&oq=o+que+%C3%A9+dropshgi&gs_lcrp=EgZjaHJvbWUqCggBEAAYsQMYgAQyBggAEEUYOTIKCAEQABixAxiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIJCAcQABgKGIAEMgkICBAAGAoYgAQyBwgJEAAYgATSAQg0MzU5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8" target="_blank" className='text-blue-200'> dropshipping</a>, onde atuei por um ano e meio. Essa experiência me ensinou não apenas sobre vendas e atendimento ao cliente, mas também sobre a importância de se adaptar rapidamente a um mercado em constante mudança.
        </p>
        <p className="text-gray-300 text-xl md:text-2xl lg:text-4xl mb-4 text-left leading-relaxed">
          Após essa fase, minha curiosidade e desejo de aprender me levaram a mergulhar no <span className='text-white font-semibold relative group'>
            <span className='absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-30 rounded-md blur-md group-hover:opacity-100 transition-opacity duration-300'></span>
            <a href='https://www.google.com/search?q=o+que+e+marketing+digital&oq=o+que+e+marketing+digital&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIKCAYQABiABBiiBDIGCAcQRRhA0gEIMjk3M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8'
              className='text-blue-300 font-semibold hover:scale-120 transition-transform duration-300'
              target='_blank'>
               Marketing Digital
            </a>
          </span>, que durante dois anos me dediquei a estudar e aprimorar minhas habilidades nessa área, explorando diferentes estratégias e ferramentas que me permitiram entender melhor como conectar marcas e consumidores de forma eficaz e estratégica onde colaborei pela construtora <a href="https://eztec.com.br" target="_blank" className='text-red-500 font-semibold'> Eztec</a>.
        </p>
        <p className="text-gray-300 text-xl md:text-2xl lg:text-4xl mb-4 text-left leading-relaxed">
          Atualmente estou fazendo o papel de Data Analytics pelo             <a href='https://www.google.com/search?q=o+que+e+marketing+digital&oq=o+que+e+marketing+digital&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIKCAYQABiABBiiBDIGCAcQRRhA0gEIMjk3M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8'
   className='text-[rgb(242,133,0)] font-semibold hover:scale-120 transition-transform duration-300'
   target='_blank'>Itáu Unibanco</a>, onde pude desenvolver minha analise crítica, trazendo insights e opiniões que foram importante para tomadas de decisões relevantes para o negócio. Sempre estou buscando por inovações e tecnologias que podem tornar o nosso tempo mais valioso para entregar o melhor com qualidade.</p>
      </div>
    </SobreQuery>
  </Section>
);

export default Sobremim;
