import Link from 'next/link'

export default function TicketsPage() {
  return (
    <main className="bg-black text-gray-200 py-20 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl text-red-600 font-bold mb-10">
        Escolha Seus Ingressos
      </h1>
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
        <div className="bg-wine-600 text-white p-6 rounded-md hover:bg-wine-700 transition transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4">Ingresso Geral</h2>
          <p className="text-lg mb-6">
            Acesso completo ao evento. Inclui shows e atrações.
          </p>
          <Link
            href="/checkout"
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
          >
            Comprar por R$ 50,00
          </Link>
        </div>
        <div className="bg-wine-600 text-white p-6 rounded-md hover:bg-wine-700 transition transform hover:scale-105">
          <h2 className="text-2xl font-bold mb-4">Ingresso VIP</h2>
          <p className="text-lg mb-6">
            Acesso VIP com área exclusiva e brindes especiais.
          </p>
          <Link
            href="/checkout"
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
          >
            Comprar por R$ 150,00
          </Link>
        </div>
      </div>
    </main>
  )
}
