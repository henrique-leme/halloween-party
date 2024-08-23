import React from 'react'

const About: React.FC = () => {
  return (
    <>
      <main className="flex flex-col items-center py-20 bg-black text-gray-200 min-h-screen">
        <h2 className="text-4xl text-red-600 font-bold mb-10">
          Sobre a Festa de Halloween 2024
        </h2>
        <div className="max-w-3xl px-4 text-lg text-gray-300 text-center">
          <p className="mb-6">
            A Festa de Halloween de 2024 será a mais assustadora de todas! Não
            perca essa chance de participar de uma noite inesquecível com
            decoração temática, shows ao vivo e muitas surpresas.
          </p>
          <p className="mb-6">
            Este ano, a festa será realizada em um local secreto, conhecido
            apenas pelos participantes que comprarem seus ingressos
            antecipadamente. A experiência contará com performances únicas,
            cenários imersivos e, claro, a presença de criaturas das sombras.
          </p>
          <p className="mb-6">
            Prepare sua fantasia mais aterrorizante e venha celebrar a noite
            mais misteriosa do ano conosco!
          </p>
        </div>
      </main>
    </>
  )
}

export default About
