import { useEffect, useState } from "react";
import { apiRequestresGet } from "../api/apiRequest";
import Table from "../components/Table"

function Home() {
  const [launcherData, setLauncherData] = useState();
  
  useEffect(() => {
    async function getData(){
      setLauncherData(await apiRequestresGet('/api/launchers', 'GET'))
    }
    getData()
  }, [])
  return (
    <div>
      {launcherData && <Table dataTable={launcherData}/>}
    </div>
  )
}

export default Home