import React from 'react'

function Login() {
  return (
    <div>
        <h2>Login</h2>
        <form >
            <label >User name</label>
            <input type="text" name='' value={""} />
            <label >Password</label>
            <input type="password" name='' value={""} />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login