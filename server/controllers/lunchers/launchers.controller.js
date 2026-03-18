import Launcher from "../../models/launcher.model.js";

async function getLaunchers(req, res) {
  try {
    const launchers = await Launcher.find({});
    if (!launchers) {
      return res.status(400).json({ message: "data not found" });
    }
    return res
      .status(200)
      .json({ message: "get launchers succrssfully", data: launchers });
  } catch (error) {
    console.log("Error in get launchers controller", error.message);
    return res.status(500).json({ message: "Internal server error " });
  }
}
export default getLaunchers;
