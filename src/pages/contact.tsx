// src/pages/contact.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center py-20 bg-black text-gray-200">
        <h2 className="text-4xl text-red-600 mb-10">Entre em Contato</h2>
        <form className="w-80 flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu Nome"
            className="mb-4 p-3 rounded-md bg-gray-700 text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Seu Email"
            className="mb-4 p-3 rounded-md bg-gray-700 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Sua Mensagem"
            className="mb-4 p-3 rounded-md bg-gray-700 text-white"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="bg-purple-700 p-3 rounded-md hover:bg-red-600 transition">
            Enviar Mensagem
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
