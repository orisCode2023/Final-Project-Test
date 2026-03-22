import { useState } from "react";
import { apiRequestresWithBody } from "../../api/usersApiRequest";

function Register() {
  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    email: "",
    user_type: "",
  });

  function handelChange(e) {
    const { name, value } = e.target;
    setRegisterData((prevRegisterData) => ({
      ...prevRegisterData,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await apiRequestresWithBody('/api/auth/register/create', 'POST', registerData);
    alert('user created successfully')
  }
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>User name</label>
        <input
          type="text"
          name="username"
          value={registerData.username}
          onChange={handelChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={registerData.password}
          onChange={handelChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={registerData.email}
          placeholder="example@.com"
          onChange={handelChange}
        />
        <label>User Type</label>
        <input
          type="text"
          name="user_type"
          value={registerData.user_type}
          onChange={handelChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
