import { useState } from "react";
import { apiRequestresGet } from "../api/apiRequest";
import Table from "../components/Table";

function LauncherDetails() {
  const [getId, setGetId] = useState('');

  function handleChange(e) {  
    setGetId(e.target.value)
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await apiRequestresGet(`/api/launchers/${getId}`, "GET");
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
      {getId && <Table dataTable={getId} />}
    </div>
  );
}

export default LauncherDetails;
