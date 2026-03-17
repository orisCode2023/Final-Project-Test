import protectRoutes from "./protectRoute.middelware.js";

async function protectAirForce(req, res, next) {
  try {
    protectRoutes(req, res, () => {
      if (
        req.user.user_type !== "airForce" ||
        req.user.user_type !== "admin" ||
        req.user.user_type !== "intelligenc"
      ) {
        res.status(403).json({ message: "unauterized" });
      }
    });
    next();
  } catch (error) {
    console.log("Error in accsess to airforce routes", error.message);
    return res.status(500).json({ message: "Internal server error " });
  }
}

export default protectAirForce;
