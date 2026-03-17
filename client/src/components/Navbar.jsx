import { Link, useNavigate } from 'react-router'
import useAuthStore from '../store/useAuthStore';

function Navbar() {
  const nav = useNavigate();
  const {logout, user} = useAuthStore();

  function handleClickInfo(){
    alert(`user name ${user.username} 
      The user type is ${user.user_type}`)
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
      {user && <button onClick={handleClickInfo} >Info</button> }
      {user && <button onClick={handleClickLogout} >Logout</button> }
      {user &&  <Link to={"/"}>Login</Link>}

    </div>
  );
}

export default Navbar;
