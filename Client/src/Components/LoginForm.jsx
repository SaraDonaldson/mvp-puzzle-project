import React from 'react'

function LoginForm() {
  return (
    <div className='login-form'>
        <form>

        <input 
        type='text'
        placeholder='username'
        value='username'
        >
        </input>

        <input
        type= "password"
        placeholder='password'
        value="password"
        >
        </input>

        </form>







    </div>
  )
}

export default LoginForm