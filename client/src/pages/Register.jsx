import React from 'react'

function Register() {
  return (
    <div>
        <h2>Register</h2>
        <form >
            <label >User name</label>
            <input type="text" name='' value={""} />
            <label >Password</label>
            <input type="password" name='' value={""} />
            <label >Email</label>
            <input type="email" name='' value={""} placeholder='example@.com'/>
            <label >User Type</label>
            <input type="password" name='' value={""} />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Register