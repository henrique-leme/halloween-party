import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent py-4 mt-4 flex justify-between items-center px-8">
      <div className="w-3/5">
        <Link href="/" className="text-white text-2xl font-bold cursor-pointer">
          Halloween Party
        </Link>
      </div>
      <nav className="flex gap-8">
        <Link
          href="/"
          className="text-white uppercase px-4 py-2 relative hover:border-b-4 hover:border-white hover:scale-105 transition-all duration-300"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-white uppercase px-4 py-2 relative hover:border-b-4 hover:border-white hover:scale-105 transition-all duration-300"
        >
          Sobre
        </Link>
        <Link
          href="/tickets"
          className="text-white uppercase px-4 py-2 relative hover:border-b-4 hover:border-white hover:scale-105 transition-all duration-300"
        >
          Ingressos
        </Link>
        <Link
          href="/contact"
          className="text-white uppercase px-4 py-2 relative hover:border-b-4 hover:border-white hover:scale-105 transition-all duration-300"
        >
          Contato
        </Link>
      </nav>
    </header>
  )
}

export default Header
