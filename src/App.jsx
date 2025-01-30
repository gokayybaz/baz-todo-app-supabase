import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import React from 'react'



function App() {

  // Yapılan işlemler
  // > Supabase client oluşturuldu.
  // > Login ve Register supabase üzerinden gerçekleştiriliyor.

  // Yapılacaklar
  // > 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
