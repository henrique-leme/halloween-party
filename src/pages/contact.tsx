import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Mensagem enviada com sucesso!')
  }

  return (
    <main className="bg-black text-gray-200 py-20 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl text-red-600 font-bold mb-10">
        Entre em Contato
      </h1>
      <div className="w-full max-w-3xl grid grid-cols-1 gap-8 px-4">
        <form
          className="bg-gray-800 text-white p-6 rounded-md shadow-lg flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4">Envie-nos uma mensagem</h2>
          <p className="text-lg mb-6">
            Preencha o formulário abaixo e entraremos em contato o mais breve
            possível.
          </p>
          <input
            type="text"
            placeholder="Seu Nome"
            className="w-full mb-4 p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Seu Email"
            className="w-full mb-4 p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Sua Mensagem"
            className="w-full mb-4 p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition transform hover:scale-105"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </main>
  )
}

export default Contact
