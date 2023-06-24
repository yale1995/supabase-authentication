'use client'

import { useState } from 'react';
import { supabase } from '../lib/supabase'

export default function Home() {

  const signInWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: '/user'
        }

      })
  
      if (error) {
        // Lida com erros de autenticação
        console.error(error, 'dentro do if');
      } else {
        // Autenticação bem-sucedida, você pode acessar as informações do usuário e da sessão
        console.log(data, 'dentro do data');
      }
    } catch (error) {
      // Lida com erros gerais
      console.error(error, 'dentro do catch');
    }
  };

  const getSession = async () => {
    const {data: {session}} =  await supabase.auth.getSession()
    console.log(session)
  }
    


  return <div className="bg-gray-950 h-screen flex items-center">
    <div className="flex max-w-md mx-auto w-full">
      <button className="bg-green-400 text-gray-200 border-0 w-full p-4 rounded-md" onClick={signInWithGoogle}>Login!</button>
      <button className="bg-red-400 text-gray-200 border-0 w-full p-4 rounded-md" onClick={getSession}>Verificar Sessão</button>
    </div>
  </div>
}