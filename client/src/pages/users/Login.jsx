import React from 'react'
import { useState } from 'react';

function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  })
  function handelChange(e) {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} >
            <label >User name</label>
            <input type="text" name='username' value={loginData.username} onChange={handelChange}/>
            <label >Password</label>
            <input type="password" name='password' value={loginData.password} onChange={handelChange}/>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login