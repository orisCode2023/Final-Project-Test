import { useEffect, useState } from "react";
import { apiRequestresGet } from "../api/apiRequest";
import Table from "../components/Table";
import { Link } from "react-router";

function Home() {
  const [launcherData, setLauncherData] = useState();

  useEffect(() => {
    async function getData() {
      setLauncherData(await apiRequestresGet("/api/launchers", "GET"));
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
      {launcherData && <Table dataTable={launcherData} />}
    </div>
  );
}

export default Home;
