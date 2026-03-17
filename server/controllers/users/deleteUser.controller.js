import User from "../../models/user.model.js";

async function deleteUserController(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("no id was passing ");
    }
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res
        .status(404)
        .json({ message: "user with this id not found" });
    }
    await User.deleteOne( user );
    return res
      .status(200)
      .json({ message: "delete launcher successfully", data: user });
  } catch (error) {
    console.log("Error in delete launcher controller", error.message);
    return res.status(500).json({ message: "Internal server error " });
  }
}
export default deleteUserController;
