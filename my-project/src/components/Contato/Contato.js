import React from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Pulsante } from './ContatoStyles';

const Contato = () => {
   return (
      <Section id='contato'>
         <SectionTitle>Entre em contato comigo!</SectionTitle>
         <Pulsante className='p-20 m-10'>
            <div className="contato max-w-2xl mx-auto p-10 bg-gray-800 rounded-lg mt-8 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 active:shadow-xl active:shadow-blue-500/50">
               <h2 className="text-3xl font-bold mb-6 text-white text-center">Me mande uma mensagem!</h2>
               <form>
                  <div className="mb-4">
                     <input
                        type="text"
                        placeholder="Nome"
                        className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     />
                  </div>
                  <div className="mb-4">
                     <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     />
                  </div>
                  <div className="mb-4">
                     <textarea
                        placeholder="Sua mensagem"
                        className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="6"
                     ></textarea>
                  </div>
                  <button
                     type="submit"
                     className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-200 active:bg-blue-700"
                  >
                     Enviar
                  </button>
               </form>
            </div>
         </Pulsante>
      </Section>
   );
};

export default Contato;
