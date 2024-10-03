import React, { useState } from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Pulsante } from './ContatoStyles';

const Contato = () => {
   const [formData, setFormData] = useState({
      nome: '',
      email: '',
      mensagem: ''
   });

   const [successMessage, setSuccessMessage] = useState('');

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value
      }));
   };


   const handleSubmit = (e) => {
      e.preventDefault(); 
      console.log(formData); 
      

      setSuccessMessage('Mensagem enviada com sucesso!');

      setFormData({
         nome: '',
         email: '',
         mensagem: ''
      });
   };

   return (
      <Section id='contato'>
         <SectionTitle>Entre em contato comigo!</SectionTitle>
         <Pulsante className='p-20 m-10'>
            <div className="contato max-w-2xl mx-auto p-10 bg-gray-800 rounded-lg mt-8 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 active:shadow-xl active:shadow-blue-500/50">
               <h2 className="text-3xl font-bold mb-6 text-white text-center">Me mande uma mensagem!</h2>
               
               {/* Mensagem de sucesso */}
               {successMessage && (
                  <div className="mb-4 text-green-500 text-center">
                     {successMessage}
                  </div>
               )}

               <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                     <input
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     />
                  </div>
                  <div className="mb-4">
                     <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     />
                  </div>
                  <div className="mb-4">
                     <textarea
                        name="mensagem"
                        placeholder="Sua mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
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
