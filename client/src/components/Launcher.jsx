function Launcher({launcher}) {
  return (
    <div>
        <h2>Launcher</h2>
        <p> {launcher._id} </p>
        <p> {launcher.name} </p>
        <p> {launcher.id} </p>
        <p> {launcher.rocketType} </p>
        <p> {launcher.latitude} </p>
        <p> {launcher.longitude} </p>
        <p> {launcher.city} </p>
        <p> {launcher.createdAt} </p>
        <p> {launcher.updatedAt} </p>
        <p> {launcher.__v} </p>
    </div>
  )
}

export default Launcher