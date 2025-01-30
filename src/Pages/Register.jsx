import React from 'react'
import { useState } from 'react';
import supabaseClient from '../Helpers/supabaseClient';

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
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
    <div>

        <h2>Kayıt Ol</h2>

        <form>
            <label htmlFor="inp-email">E-posta</label>
            <input onChange={(e) => setEmail(e.target.value)} type="text" id='inp-email' placeholder='E-posta adresinizi giriniz...'/>

            <label htmlFor="inp-password">Şifre</label>
            <input onChange={(e) => setPassword(e.target.value)} type="text" id='inp-password' placeholder='Şifrenizi giriniz...' />

            <button onClick={handleSubmit} type='submit'> Kayıt Ol </button>
        </form>

    </div>
  )
}

export default Register