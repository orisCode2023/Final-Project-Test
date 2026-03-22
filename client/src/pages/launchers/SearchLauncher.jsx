import { useState } from "react";
import useLaunchersStore from "../../store/useLaucherStore";
import Table from "../../components/Table";

function SearchLauncher() {
  const { launchers } = useLaunchersStore();
  const [ getData, setGetData ] = useState("");
  const [ getSearchInput, setGetSearchInput ] = useState({
    rocketType: "",
    city: "",
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
    setGetData(
      launchers.filter((launcher) => {
        if(launcher.rocketType === getSearchInput.rocketType){
          set
        }
        // launcher.rocketType === getSearchInput.rocketType
        // launcher.city === getSearchInput?.city;
      }),
    );
    // alert("Get launcher by id successfully");
  }

  return (
    <div>
      <h2>Search Launchers</h2>
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
      {getData.length > 1 && console.log(getData)}
      {/* {getData ? console.log(getData) : <Table dataTable={getData} />} */}
      {/* {getData &&  <Table dataTable={getData} />} */}
    </div>
  );
}

export default SearchLauncher;
