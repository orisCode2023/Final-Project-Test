import { useEffect, useState } from "react";
// import { apiRequestresGet } from "../api/apiRequest";
import Table from "../components/Table";
import { Link } from "react-router";
import useLaunchers from "../store/useLaucherStore";

function Home() {
  const {launchers, getLaunchers} = useLaunchers();

  useEffect(() => {
    async function getData() {
      await getLaunchers();
    }
    getData();
  }, []);
  return (
    <div>
      <h2>Launcher Dashboard</h2>
      <Link to={"/newLauncher"}>New Launcher</Link>
      <Link to={"/getById"}>Get Launcher Deatails by Id</Link>
      <Link to={"/searchLauncher"}>Get Launcher Details by City / Rocket Type</Link>
      <Link to={"/deleteLauncher"}>Delete Launcher</Link>
      <Link to={"/"}>Add Destroyed</Link>
      {launchers && <Table dataTable={launchers} />}
    </div>
  );
}

export default Home;
