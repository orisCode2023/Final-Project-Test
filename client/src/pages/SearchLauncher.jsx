import { useState } from "react";
import launchersStore from "../store/useLaucherStore";
import filetring from "../utils/filterData";
import Launcher from "../components/Launcher";

function SearchLauncher() {
  let data;
  const {launchers} = launchersStore();
  const [getSearchInputCity, setGetSearchInputCity] = useState('');
  const [getSearchInput, setGetSearchInput] = useState('');
  const [getData, setGetData] = useState('');

  function handleChange(e) {
    setGetSearchInputCity(e.target.value)
    // const { name, value } = e.target;
    // setGetSearchInput((prevGetSearchInput) => ({
    //   ...prevGetSearchInput,
    //   [name]: value,
    // }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setGetData(filetring(launchers, getSearchInputCity))
    alert("Get launcher by id successfully");
  }

  return (
    <div>
      <h2>Get Launchers by City</h2>
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
          value={getSearchInputCity}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {getData && <Launcher data={getData} />}
    </div>
  );
}

export default SearchLauncher;
