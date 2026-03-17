import jwt from "jsonwebtoken";

const auth = (user_types) => (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(404).json({ message: "Unauthorized" });
    }
    const decriptToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decriptToken.user_type;
    if (!user_types) next();

    if(!user_types.includes(decriptToken.user_type)){
        return res.status(403).json({message: 'Unautherized'})
    }
    next();
  } catch (error) {
    console.log("Error in accsess to protect routes", error.message);
    return res.status(500).json({ message: "Internal server error " });
  }
};

export default auth;
