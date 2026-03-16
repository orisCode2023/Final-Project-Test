import { useState } from "react";
import { apiRequestresPost } from "../api/apiRequest";

function AddLauncher() {
  const [newLauncher, setNewLauncher] = useState({
    name: "",
    id: "",
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
    e.prevenDefault();
    console.log(newLauncher);
    await apiRequestresPost("/api/launchers", "POST", newLauncher);
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
        <label>Id: </label>
        <input
          type="text"
          name="id"
          value={newLauncher.id}
          onChange={handleChange}
        />
        <label>Choose a Rocket Type:</label>
        <select name="rocketType">
          <option value={newLauncher.rocketType}>Shahab3</option>
          <option value={newLauncher.rocketType}>Fetah110</option>
          <option value={newLauncher.rocketType}>Radwan</option>
          <option value={newLauncher.rocketType}>Kheibar</option>
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
