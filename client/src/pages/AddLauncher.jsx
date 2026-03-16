import { useState } from "react";
import launchersStore from "../store/useLaucherStore";

function AddLauncher() {
  const { addLauncher } = launchersStore();
  const [newLauncher, setNewLauncher] = useState({
    name: "",
    rocketType: "",
    latitude: 0,
    longitude: 0,
    city: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewLauncher((prevNewLauncher) => ({
      ...prevNewLauncher,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(newLauncher);
    await addLauncher(newLauncher)
    alert("The launcher created successfully");
  }

  return (
    <div>
      <h2>Create New Launcher</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={newLauncher.name}
          onChange={handleChange}
        />
        <label>Choose a Rocket Type:</label>
        <select
          name="rocketType"
          value={newLauncher.rocketType}
          onChange={handleChange}
        >
          <option value={"Shahab3"}>Shahab3</option>
          <option value={"Fetah110"}>Fetah110</option>
          <option value={"Radwan"}>Radwan</option>
          <option value={"Kheibar"}>Kheibar</option>
        </select>
        <label>Latitude: </label>
        <input
          type="text"
          name="latitude"
          value={newLauncher.latitude}
          onChange={handleChange}
        />
        <label>Longitude: </label>
        <input
          type="text"
          name="longitude"
          value={newLauncher.longitude}
          onChange={handleChange}
        />
        <label>City: </label>
        <input
          type="text"
          name="city"
          value={newLauncher.city}
          onChange={handleChange}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default AddLauncher;
