import React from 'react'

interface TicketCardProps {
  title: string
  price: string
  onBuy: () => void
}

const TicketCard: React.FC<TicketCardProps> = ({ title, price, onBuy }) => {
  return (
    <div className="max-w-sm bg-purple-900 p-6 rounded-lg text-center shadow-lg transform hover:scale-105 transition-transform duration-300 mb-8">
      <h3 className="text-2xl text-white font-bold mb-4">{title}</h3>
      <p className="text-lg text-gray-300 mb-6">{price}</p>
      <button
        onClick={onBuy}
        className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition-transform transform hover:scale-110"
      >
        Comprar
      </button>
    </div>
  )
}

export default TicketCard
