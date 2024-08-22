import { useRouter } from 'next/router';
import React from 'react';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent py-4 mt-4 flex justify-between items-center px-8">
      <div className="w-3/5">
        <h1
          className="text-white text-2xl font-bold cursor-pointer"
          onClick={() => router.push('/')}
        >
          Halloween Party
        </h1>
      </div>
      <nav className="flex gap-8">
        <button
          onClick={() => router.push('/')}
          className="text-white uppercase hover:border-black hover:border-4 px-4 py-2"
        >
          Home
        </button>
        <button
          onClick={() => router.push('/about')}
          className="text-white uppercase hover:border-black hover:border-4 px-4 py-2"
        >
          Sobre
        </button>
        <button
          onClick={() => router.push('/tickets')}
          className="text-white uppercase hover:border-black hover:border-4 px-4 py-2"
        >
          Ingressos
        </button>
        <button
          onClick={() => router.push('/contact')}
          className="text-white uppercase hover:border-black hover:border-4 px-4 py-2"
        >
          Contato
        </button>
      </nav>
    </header>
  );
};

export default Header;
