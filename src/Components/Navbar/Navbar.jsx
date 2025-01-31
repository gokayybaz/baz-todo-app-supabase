import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-indigo-600">Baz Todo</a>
            <div className="space-x-4">
                <Link to={"/"} className="text-gray-700 outline-2 p-2 px-3 outline-indigo-400 rounded bg-indigo-100 hover:text-indigo-500 font-medium">Anasayfa</Link>
                <Link to={"/"} className="text-gray-700 hover:text-indigo-500 font-medium">Planlanmış Görevlerim</Link>
                <Link to={"/"} className="text-gray-700 hover:text-indigo-500 font-medium">Tanımlanmış Görevlerim</Link>
            </div>
            <div className="flex items-center space-x-4">
                <img
                    src="https://via.placeholder.com/40"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500"
                />
                <div className="text-left">
                    <p className="text-gray-700 font-medium">Gökay Baz</p>
                    <p className="text-sm text-gray-500">gokaybaz2000@gmail.com</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar