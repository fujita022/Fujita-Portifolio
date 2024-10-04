import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Section, SectionTitle } from '../../styles/GlobalComponents';

const Contato = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
   });

   const [successMessage, setSuccessMessage] = useState('');
   const [errorMessage, setErrorMessage] = useState('');

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      emailjs.send("service_adjnjjw", "template_kyte8t8", formData, "2B9oe8gwT0As19X39")
         .then((response) => {
            console.log('Email enviado com sucesso:', response);
            setSuccessMessage('Mensagem enviada com sucesso!');
            setFormData({
               name: '',
               email: '',
               message: ''
            });
            setErrorMessage('');
         })
         .catch((error) => {
            console.error('Failed to send email:', error);
            setErrorMessage('Erro ao enviar mensagem. Tente novamente.');
            setSuccessMessage('');
         });
   };

   return (
<Section id='contato'>
   <SectionTitle>Entre em contato comigo!</SectionTitle>
   <div className='p-4 md:p-6 lg:p-8 m-4 md:m-6'>
      <div className="contato max-w-md md:max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg mt-8 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 active:shadow-xl active:shadow-blue-500/50">
         <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">Me mande uma mensagem!</h2>
         {successMessage && <div className="mb-4 text-green-500 text-center">{successMessage}</div>}
         {errorMessage && <div className="mb-4 text-red-500 text-center">{errorMessage}</div>}
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               name="name"
               placeholder="Nome"
               value={formData.name}
               onChange={handleChange}
               required
               className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <input
               type="email"
               name="email"
               placeholder="Email"
               value={formData.email}
               onChange={handleChange}
               required
               className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <textarea
               name="message"
               placeholder="Sua mensagem"
               value={formData.message}
               onChange={handleChange}
               rows="4"
               required
               className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            ></textarea>
            <button
               type="submit"
               className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-200 active:bg-blue-700"
            >
               Enviar
            </button>
         </form>
      </div>
   </div>
</Section>

   );
};

export default Contato;
