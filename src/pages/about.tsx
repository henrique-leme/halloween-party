// src/pages/about.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center py-20 bg-black text-gray-200">
        <h2 className="text-4xl text-red-600 mb-10">Sobre a Festa de Halloween</h2>
        <p className="w-80 text-lg text-gray-300 text-center">
          A Festa de Halloween de 2024 será a mais assustadora de todas! Não perca essa chance de
          participar de uma noite inesquecível com decoração temática, shows e muitas surpresas.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;
