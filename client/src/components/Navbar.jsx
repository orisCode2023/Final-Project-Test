import React from "react";
import { Link } from 'react-router'
import LogOut from './LogOut'

function Navbar() {
  return (
    <div>
      <h1>Launchers App</h1>
      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default Navbar;
