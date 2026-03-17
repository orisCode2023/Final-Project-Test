import User from "../../models/user.model.js";

async function allUsersController(req, res) {
  try {
    const users = await User.find({});
    if (!users) {
      return res.status(400).json({ message: "data not found" });
    }
    return res
      .status(200)
      .json({ message: "get users successfully", data: users });
  } catch (error) {
    console.log("Error in get users controller", error.message);
    return res.status(500).json({ message: "Internal server error " });
  }
}
export default allUsersController;
