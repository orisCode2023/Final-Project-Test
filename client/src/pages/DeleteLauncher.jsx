import { useState } from "react";
import Table from "../components/Table";
import { apiRequestresGet } from "../api/apiRequest";

function DeleteLauncher() {
  const [getId, setGetId] = useState('');
  
    function handleChange(e) {  
      setGetId(e.target.value)
    }
    async function handleSubmit(e) {
      e.prevenDefault();
      await apiRequestresGet(`/api/launchers/:id${getId}`, "GET");
      alert("Delete launcher by id successfully");
    }
  
  return (
    <div>
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
      {/* {getId && <Table dataTable={getId} />} */}
    </div>
  );
}

export default DeleteLauncher;
