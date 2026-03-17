import React from 'react'
import { useState } from 'react';
import useAuthStore from '../../store/useAuthStore';

function Login() {
  const {loginStore} = useAuthStore()
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

  async function handleSubmit(e) {
    e.preventDefault();
    await loginStore('/api/auth/login', 'POST', loginData);
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