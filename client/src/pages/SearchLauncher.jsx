import { useState } from "react";
import { apiRequestresGet } from "../api/apiRequest";
import Table from "../components/Table";
import launchersStore from "../store/useLaucherStore";
import filetring from "../utils/filterData";

function SearchLauncher() {
  let data;
  const {launchers} = launchersStore();

  const [getSearchInput, setGetSearchInput] = useState({
    city: "",
    rocketType: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setGetSearchInput((prevGetSearchInput) => ({
      ...prevGetSearchInput,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(launchers)
    console.log(getSearchInput)
    data = filetring(launchers, getSearchInput)
    console.log(data)
    // alert("Get launcher by id successfully");
    return data && <Table dataTable={data} />

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
    </div>
  );
}

export default SearchLauncher;
