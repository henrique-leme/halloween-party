// src/pages/register.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Simula o registro
      router.push('/login');
    } else {
      alert('As senhas não coincidem.');
    }
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-gray-200">
        <h2 className="text-3xl mb-8">Registrar-se</h2>
        <form className="w-80 flex flex-col" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Digite seu email"
            className="mb-4 p-3 rounded-md bg-gray-700 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            className="mb-4 p-3 rounded-md bg-gray-700 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirme sua senha"
            className="mb-4 p-3 rounded-md bg-gray-700 text-white"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" className="bg-purple-700 p-3 rounded-md hover:bg-red-600 transition">
            Registrar-se
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Register;
