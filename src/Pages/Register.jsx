import React from 'react'
import { useState } from 'react';
import supabaseClient from '../Helpers/supabaseClient';
import { Link } from 'react-router';

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setFullName] = useState('');
            const [confirmPassword, setConfirmPassword] = useState('');
            const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('')

        const {data, error} = await supabaseClient.auth.signUp({
          email: email,
          password: password
        })

        if(data){
          console.log(data)
        }

        if(error){
          alert(error)
        }
    }
  return (
    <div className='flex items-center justify-center h-screen bg-purple-600'>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-10">Hesap Oluştur</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="fullName" className="block text-left text-sm font-medium text-gray-600 mb-2">
                                Ad Soyad
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Adınızı ve soyadınızı giriniz..."
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-left text-sm font-medium text-gray-600 mb-2">
                                E-posta
                            </label>
                            <input
                                type="email"
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
                        <div>
                            <label htmlFor="confirmPassword" className="block text-left text-sm font-medium text-gray-600 mb-2">
                                Şifre Tekrar
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Şifrenizi tekrar giriniz..."
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-md font-semibold hover:from-indigo-600 hover:to-purple-700 transition duration-300"
                        >
                            Kayıt Ol
                        </button>
                        {errorMessage && (
                            <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
                        )}
                    </form>
                    <div className="mt-4 text-sm text-gray-600">
                        Hesabınız var mı?{' '}
                        <Link to="/login" className="text-indigo-500 font-medium hover:underline">
                            Giriş Yapın
                        </Link>
                    </div>
                </div>
    </div>
  )
}

export default Register