import { Link } from 'react-router'

function Navbar() {
  return (
    <div className='navigation'>
      <h1>Launchers App</h1>
      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default Navbar;
