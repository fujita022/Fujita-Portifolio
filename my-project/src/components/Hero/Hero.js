import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';  // Removido Link
import Button from '../../styles/GlobalComponents/Button';
import { useTypewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
      words: ['Developer.', "Marketing Manager.", "Student of Software Engineer.", 'Machine Learning','React.js , Node.Js , Express.js and axios','Python', 'Tailwind', 'Next.js', 'JavaScript', 'HTML', 'CSS','Docker', 'GitHub', 'GitLab', 'Figma', 'PostgreSQL', 'MongoDB', 'MySQL', 'API Rest', 'API Fetch', 'API Axios', 'API Node.js', 'Data Analytics', 'Data Science', 'Data Engineer', 'Data Visualization', 'Data Analysis', 'Data Mining', 'Data Warehousing', 'Data Governance', 'Data Management'], 
      loop: true,                        
  });

  return (
    <>
      <Section row nopadding>
        <div className="w-full flex flex-col items-start">
          <SectionTitle main center>
            Olá!
          </SectionTitle>
          <SectionText>
            Meu nome é <a href="https://github.com/fujita022/" target="_blank" className='text-blue-900 font-semibold'>Erick Fujita</a>, mas sou mais conhecido como Fujita. Sou estudante de Engenharia de Software na <a href="https://www.fiap.com.br/" target="_blank" className='text-red-400 font-semibold'>FIAP</a> e tive meu primeiro contato com o mundo tecnológico e de marketing desde cedo. Iniciei minha carreira criando uma empresa dedicada à venda e à gestão logística de produtos online onde pude desenvolver habilidades sociais e comunicativas.
          </SectionText>
          <SectionText>
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse">
              {text}
            </span>
          </SectionText>
          <Button onClick={(e) => {
            e.preventDefault();
            window.location.href = '/files/Erick Moreira Fujita - currículo.pdf';
          }}>Acesse aqui</Button>
        </div>
      </Section>
    </>
  );
};

export default Hero;
