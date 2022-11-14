import React, { useState } from 'react'
import './Login.css';

import logo from './images/MARCATO.png';

function Login() {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const signIn = e => {
    e.preventDefault();

}
    
    const register = e => {
    e.preventDefault();

}    

  return (
    <div className='login'>

        <a href='/'>
        <img className='login_logo' src={logo} alt='webphoto' />
        </a>

         <div className='login_container'>
            <h1>Sign-In</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} 
                 onChange={e => setEmail(e.target.value)}
                 />

                <h5>Password</h5>
                <input type='password' value={password}
                 onChange={e => setPassword(e.target.value)} 
                />

                <button type='submit' onClick={signIn} className='login_signinbutton'>Sign-In</button>
            </form>

            <p> terms</p>

            <button onClick={register} className='login_registrationbutton'>Create you new account.</button>

         </div>

    </div>
  )
}

export default Login