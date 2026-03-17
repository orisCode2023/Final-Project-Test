import React from "react";
import { Link } from "react-router";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard Menager</h2>
      <Link to={"/allUsers"}>All Users</Link>
      
      <Link to={"/updateUser"}>Update User</Link>
    </div>
  );
}

export default Dashboard;
