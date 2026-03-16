import { useState } from "react";
import { apiRequestresGet } from "../api/apiRequest";
import Table from "../components/Table";

function SearchLauncher() {
  const [getSearchInput, setGetSearchInput] = useState({
    city: "",
    rocketType: "",
  });

  function handleChange(e) {
    setGetId(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await apiRequestresGet(`/api/launchers/${getSearchInput}`, "GET");
    alert("Get launcher by id successfully");
  }

  return (
    <div>
      <h2>Get Launchers by Rocket or city</h2>
      <form onSubmit={handleSubmit}>
        <label>Choose a Rocket Type:</label>
        <select
          name="rocketType"
          value={getSearchInput.rocketType}
          onChange={handleChange}
        >
          <option value={"Shahab3"}>Shahab3</option>
          <option value={"Fetah110"}>Fetah110</option>
          <option value={"Radwan"}>Radwan</option>
          <option value={"Kheibar"}>Kheibar</option>
        </select>
        <label>City: </label>
        <input
          type="text"
          name="city"
          value={getSearchInput.city}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {/* {getSearchInput && <Table dataTable={getSearchInput} />} */}
    </div>
  );
}

export default SearchLauncher;
