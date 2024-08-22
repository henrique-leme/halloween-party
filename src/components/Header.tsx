import { useRouter } from 'next/router';
import React from 'react';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="bg-black fixed top-0 left-0 w-full p-4 flex justify-between items-center shadow-md">
      <h1
        className="text-white text-2xl cursor-pointer font-bold"
        onClick={() => router.push('/')}
      >
        Halloween Party
      </h1>
      <nav className="flex gap-6">
        <button onClick={() => router.push('/')} className="text-gray-300 hover:text-red-600">
          Home
        </button>
        <button onClick={() => router.push('/about')} className="text-gray-300 hover:text-red-600">
          Sobre
        </button>
        <button onClick={() => router.push('/tickets')} className="text-gray-300 hover:text-red-600">
          Ingressos
        </button>
        <button onClick={() => router.push('/contact')} className="text-gray-300 hover:text-red-600">
          Contato
        </button>
      </nav>
    </header>
  );
};

export default Header;
