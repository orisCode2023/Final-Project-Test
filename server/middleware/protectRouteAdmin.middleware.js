import protectRoutes from "./protectRoute.middelware.js";

async function protectAdmin(req, res, next){
    try {
        protectRoutes(req, res, () => {
            if (req.user.user_type !== 'admin'){
                res.status (403).json({message: 'unauterized'})
            }
        })
        next();
    } catch (error) {
        console.log('Error in accsess to admin routes', error.message);
        return res.status(500).json({message: 'Internal server error '});
    }
}

export default protectAdmin;