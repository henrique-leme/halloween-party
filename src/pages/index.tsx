import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="bg-black text-gray-200 text-center py-20 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl text-red-600 font-bold mb-4">
        Bem-vindo à Festa de Halloween 2024!
      </h1>
      <p className="text-lg mb-8">
        Prepare-se para o evento mais assustador do ano.
      </p>
      <Link
        href="/tickets"
        className="bg-wine-600 text-white py-3 px-6 rounded-md hover:bg-wine-700 transition transform hover:scale-105"
      >
        Compre Seus Ingressos
      </Link>
    </main>
  )
}
