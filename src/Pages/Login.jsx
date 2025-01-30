import React from 'react'
import supabase from '../Helpers/supabaseClient';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function Login() {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
    <div><h2>Giriş Yap</h2>

    <form>
        <label htmlFor="inp-email">E-posta</label>
        <input onChange={(e) => setEmail(e.target.value)} type="text" id='inp-email' placeholder='E-posta adresinizi giriniz...'/>

        <label htmlFor="inp-password">Şifre</label>
        <input onChange={(e) => setPassword(e.target.value)} type="text" id='inp-password' placeholder='Şifrenizi giriniz...' />

        <button onClick={handleSubmit} type='submit'>Giriş Yap</button>
    </form></div>
  )
}

export default Login