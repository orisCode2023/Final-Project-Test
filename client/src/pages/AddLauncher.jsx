
function AddLauncher() {
  return (
    <div>
      <form >
        <label>Name</label>
        <input type="text" value={} onChange={handleChange} placeholder=""/>
        <label>Id</label>
        <input type="text" value={} onChange={handleChange} placeholder=""/>
        <label></label>
        <input type="text" value={} onChange={handleChange} placeholder=""/>
        <label>Latitude</label>
        <input type="text" value={} onChange={handleChange} placeholder=""/>
        <label>Longitude</label>
        <input type="text" value={} onChange={handleChange} placeholder=""/>
        <label>City</label>
        <input type="text" value={} onChange={handleChange} placeholder=""/>
      </form>
    </div>
  )
}

export default AddLauncher