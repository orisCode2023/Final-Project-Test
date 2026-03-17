import User from "../../models/user.model.js";
import generateTokenAndSendCookies from "../../services/generatToken.services.js";

async function loginController(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "one of the details is missing" });
    }
    const user = await User.findOne({username: username});
    if (!user || user.password !== password) {
        return res.status(404).json({ message: "user not found" });
    } 
    generateTokenAndSendCookies(user._id, user.user_type, res);
    return res
      .status(200)
      .json({ message: "login succrssfully", data: user });
  } catch (error) {
    console.log("Error in login controller", error.message);
    return res.status(500).json({ message: "Internal server error " });
  }
}
export default loginController;
