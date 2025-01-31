import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <nav class="bg-white shadow-md">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" class="text-2xl font-bold text-indigo-600">Baz Todo</a>
            <div class="space-x-4">
                <Link to={"/"} class="text-gray-700 outline-2 p-2 px-3 outline-indigo-400 rounded bg-indigo-100 hover:text-indigo-500 font-medium">Anasayfa</Link>
                <Link to={"/"} class="text-gray-700 hover:text-indigo-500 font-medium">Planlanmış Görevlerim</Link>
                <Link to={"/"} class="text-gray-700 hover:text-indigo-500 font-medium">Tanımlanmış Görevlerim</Link>
            </div>
            <div class="flex items-center space-x-4">
                <img
                    src="https://via.placeholder.com/40"
                    alt="User Avatar"
                    class="w-10 h-10 rounded-full object-cover border-2 border-indigo-500"
                />
                <div class="text-left">
                    <p class="text-gray-700 font-medium">Gökay Baz</p>
                    <p class="text-sm text-gray-500">gokaybaz2000@gmail.com</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar