// src/pages/tickets.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';

const Tickets: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center py-20 bg-black text-gray-200">
        <h2 className="text-4xl text-red-600 mb-10">Escolha seus Ingressos</h2>
        <div className="w-80 bg-purple-900 p-6 rounded-md text-center mb-8">
          <h3 className="text-xl text-white">Ingresso Geral</h3>
          <p className="text-lg text-gray-300 mt-4">R$ 50,00</p>
          <button className="mt-6 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
            Comprar
          </button>
        </div>
        <div className="w-80 bg-purple-900 p-6 rounded-md text-center">
          <h3 className="text-xl text-white">Ingresso VIP</h3>
          <p className="text-lg text-gray-300 mt-4">R$ 150,00</p>
          <button className="mt-6 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
            Comprar
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Tickets;
