import { useState } from "react";
import Launcher from "../components/Launcher";
import { apiRequestresWithoutBody } from "../api/usersApiRequest";

function LauncherDetails() {
  
  const [getId, setGetId] = useState('');
  const [getData, setGetData] = useState('');

  function handleChange(e) {  
    setGetId(e.target.value)
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setGetData(await apiRequestresWithoutBody(`/api/launchers/${getId}`, "GET"))
    alert("Get launcher by id successfully");
  }

  return (
    <div>
      <h2>Get Launcher</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Get launcher by id</label>
        <input
          type="text"
          name="id"
          value={getId}
          onChange={handleChange}
          placeholder="Enter id"
        />
        <button type="submit">Search</button>
      </form>
      {getData && <Launcher launcher={getData.data} />}
     
    </div>
  );
}

export default LauncherDetails;
