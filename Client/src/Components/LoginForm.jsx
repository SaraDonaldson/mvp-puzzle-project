import React from 'react'
import "../Screens/Styles/landingScreen.css"

function LoginForm() {
  return (
    <div className='login-form'>
        <form className='login-form'>

        <input 
        className='login-username'
        type='text'
        placeholder='username'
        value='username'
        >
        </input>

        <input
         className='login-password'
        type= "password"
        placeholder='password'
        value="password"
        >
        </input>

        <button
        className="login" 
        type='submit' 
        link="home" 
        text="Login">
          Login </button>
        </form>







    </div>
  )
}

export default LoginForm