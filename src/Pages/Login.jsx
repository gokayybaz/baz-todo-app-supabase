import React from 'react'
import supabase from '../Helpers/supabaseClient';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

function Login() {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const {data, error} = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })
    if(data) {
      //console.log(data)
      data.user ? navigate('/') : null
    }
    if(error) {
      alert(error)
    }
  }

  
  

  return (
    <div className='flex items-center justify-center h-screen bg-purple-600'>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-10">Giriş Yap</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-left text-sm font-medium text-gray-600 mb-2">
                                E-posta Adresi:
                            </label>
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="E-posta adresinizi giriniz..."
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-left text-sm font-medium text-gray-600 mb-2">
                                Şifre
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Şifrenizi giriniz..."
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-md font-semibold hover:from-indigo-600 hover:to-purple-700 transition duration-300"
                        >
                            Giriş Yap
                        </button>
                        {errorMessage && (
                            <div className="text-red-500 text-sm mt-2">Invalid username or password</div>
                        )}
                    </form>
                    <div className="mt-4 text-sm text-gray-600">
                        Hesabınız yok mu?{' '}
                        <Link to="/register" className="text-indigo-500 font-medium hover:underline">
                            Hesap Oluşturun
                        </Link>
                    </div>
                </div>
    </div>
  )
}

export default Login