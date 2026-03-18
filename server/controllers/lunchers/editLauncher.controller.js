import Launcher from "../../models/launcher.model.js";

async function editLauncher(req, res) {
  try {
    const { username, password, email, user_type } = req.body;
    const user = await Launcher.findOneAndUpdate({ user_type: user_type });
    if (!user) {
      return res
        .status(400)
        .json({ message: "user not found nothing to update" });
    }
    user.username = username || user.username;
    user.password = password || user.password;
    user.email = email || user.email;
    user.user_type = user_type || user.user_type;

    await user.save();
    return res
      .status(200)
      .json({ message: "update user successfully", data: user });
  } catch (error) {
    console.log("Error in update user controller", error.message);
    return res.status(500).json({ message: "Internal server error " });
  }
}
export default editLauncher;
