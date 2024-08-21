// src/components/TicketCard.tsx
import React from 'react';

interface TicketCardProps {
  title: string;
  price: string;
  onBuy: () => void;
}

const TicketCard: React.FC<TicketCardProps> = ({ title, price, onBuy }) => {
  return (
    <div className="w-80 bg-purple-900 p-6 rounded-md text-center mb-8">
      <h3 className="text-xl text-white">{title}</h3>
      <p className="text-lg text-gray-300 mt-4">{price}</p>
      <button
        onClick={onBuy}
        className="mt-6 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
      >
        Comprar
      </button>
    </div>
  );
};

export default TicketCard;
