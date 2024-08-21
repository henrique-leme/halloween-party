import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-6 text-center text-gray-300">
      <p className="mb-4">© 2024 Festa de Halloween. Todos os direitos reservados.</p>
      <div className="flex justify-center gap-6">
        <a href="/about" className="hover:text-red-600">
          Sobre
        </a>
        <a href="/contact" className="hover:text-red-600">
          Contato
        </a>
        <a href="/terms" className="hover:text-red-600">
          Termos
        </a>
        <a href="/privacy" className="hover:text-red-600">
          Privacidade
        </a>
      </div>
    </footer>
  );
};

export default Footer;
