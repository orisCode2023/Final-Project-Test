import { useState } from "react";
import Launcher from "../components/Launcher";
import { apiRequestresWithoutBody } from "../api/usersApiRequest";

function DeleteLauncher() {
  const [getId, setGetId] = useState("");
  const [getData, setGetData] = useState("");

  function handleChange(e) {
    setGetId(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setGetData(await apiRequestresWithoutBody(`/api/launchers/${getId}`, "GET"))
    alert("Delete launcher by id successfully");
  }

  return (
    <div>
      <h2>Delete Launcher</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Delete launcher by id</label>
        <input
          type="text"
          name="id"
          value={getId}
          onChange={handleChange}
          placeholder="Enter id"
        />
        <button type="submit">Search</button>
      </form>
      {getData && <Launcher dataTable={getData} />}
    </div>
  );
}

export default DeleteLauncher;
