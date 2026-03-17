import User from "../../models/user.model.js";

async function registerController(req, res) {
  try {
    const { username, password, email, user_type } = req.body;

    if (!username || !password || !email || !user_type) {
      return res
        .status(400)
        .json({ message: "one of the details is missing " });
    }
    const isExist = await User.findOne({user_type: user_type});
    if (isExist){
        return res
        .status(400)
        .json({ message: "soldier with this type already exist " });
    }

    const newUser = await User.create({
      username,
      password,
      email,
      user_type,
    });

    return res
      .status(200)
      .json({ message: "create user succrssfully", data: newUser });
  } catch (error) {
    console.log("Error in create user controller", error.message);
    return res.status(500).json({ message: "Internal server error " });
  }
}
export default registerController;
