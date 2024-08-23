import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-6 text-center text-gray-300">
      <p className="mb-4">
        © 2024 Festa de Halloween. Todos os direitos reservados.
      </p>
      <div className="flex justify-center gap-6">
        <Link href="/about" className="hover:text-red-600">
          Sobre
        </Link>
        <Link href="/contact" className="hover:text-red-600">
          Contato
        </Link>
        <Link href="/terms" className="hover:text-red-600">
          Termos
        </Link>
        <Link href="/privacy" className="hover:text-red-600">
          Privacidade
        </Link>
      </div>
    </footer>
  )
}

export default Footer
