import protectRoutes from "./protectRoute.middelware.js";

async function protectIntelligenc(req, res, next){
    try {
        protectRoutes(req, res, () => {
            if (req.user.user_type !== 'intelligenc'){
                res.status (403).json({message: 'unauterized'})
            }
        })
        next();
    } catch (error) {
        console.log('Error in accsess to intelligenc routes', error.message);
        return res.status(500).json({message: 'Internal server error '});
    }
}

export default protectIntelligenc;