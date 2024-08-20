import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="bg-black text-gray-200">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center bg-black">
          <h1 className="text-5xl text-red-600 font-bold mb-4">Festa de Halloween 2024</h1>
          <p className="text-lg text-gray-300 mb-8">
            O evento mais assustador do ano está chegando! Prepare-se para uma noite inesquecível.
          </p>
          <a
            href="/tickets"
            className="bg-wine-600 text-white py-3 px-6 rounded-md hover:bg-wine-700 transition"
          >
            Compre Seus Ingressos
          </a>
        </section>

        {/* Sobre o Evento */}
        <section className="py-20 px-4 bg-black">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl text-red-600 font-bold mb-6">Sobre o Evento</h2>
            <p className="text-lg text-gray-300">
              A Festa de Halloween 2024 será a mais épica de todas! Com uma decoração temática
              impressionante, shows ao vivo e muitas surpresas, essa noite será inesquecível.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
