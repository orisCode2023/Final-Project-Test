async function updateUserController(req, res) {
  try {
    const { username, password, email, user_type } = req.body;

    return res
      .status(200)
      .json({ message: "update user successfully", data: launcher });
  } catch (error) {
    console.log("Error in update user controller", error.message);
    return res.status(500).json({ message: "Internal server error " });
  }
}
export default updateUserController;
