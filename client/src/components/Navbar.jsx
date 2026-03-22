import { Link, useNavigate } from 'react-router'
import useAuthStore from '../store/useAuthStore';

function Navbar() {
  const nav = useNavigate();
  const {logout, user} = useAuthStore();

  function handleClickInfo(){
    alert(`user name ${user.username} \nThe user type is ${user.user_type}`)
  }
  async function handleClickLogout(){
    await logout('/api/auth/login', 'POST')
    nav('/')
  }

  
  return (
    <div className='navigation'>
      <h1>Launchers App</h1>
      <Link to={"/home"}>Home</Link>
      <Link to={"/register"}>Register</Link>
      <Link to={"/"}>Login</Link>
      <Link to={"/dashboard"}>Admin Dashboard</Link>
      {user && <button onClick={handleClickInfo} >Info</button> }
      {user && <button onClick={handleClickLogout} >Logout</button> }

    </div>
  );
}

export default Navbar;
