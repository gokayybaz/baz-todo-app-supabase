import React from 'react'

function Navbar() {
  return (
    <nav class="bg-white shadow-md">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" class="text-2xl font-bold text-indigo-600">MyApp</a>
            <div class="space-x-4">
                <a href="#" class="text-gray-700 hover:text-indigo-500 font-medium">Anasayfa</a>
                <a href="#" class="text-gray-700 hover:text-indigo-500 font-medium">Görevlerim</a>
            </div>
            <div class="flex items-center space-x-4">
                <div class="text-right">
                    <p class="text-gray-700 font-medium">John Doe</p>
                    <p class="text-sm text-gray-500">john.doe@example.com</p>
                </div>
                <img
                    src="https://via.placeholder.com/40"
                    alt="User Avatar"
                    class="w-10 h-10 rounded-full object-cover border-2 border-indigo-500"
                />
            </div>
        </div>
    </nav>
  )
}

export default Navbar