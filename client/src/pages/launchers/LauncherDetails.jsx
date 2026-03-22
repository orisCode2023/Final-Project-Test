import { useState } from "react";
import Table from "../../components/Table";
import useLaunchersStore from "../../store/useLaucherStore";

function LauncherDetails() {
  
  const { launchers } = useLaunchersStore();
  const [getId, setGetId] = useState('');
  const [getData, setGetData] = useState('');

  function handleChange(e) {  
    setGetId(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setGetData(launchers.filter(launcher => launcher._id === getId));
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
      {getData && <Table dataTable={getData} />}
     
    </div>
  );
}

export default LauncherDetails;
