import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

async function protectRoutes(req, res, next){
    try {
        const token = req.cookies.jwt;
        if (!token){
            return res.status(404).json({message: "Unauthorized"});
        }
        const decriptToken = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findOne({_id : decriptToken._id});
        if (!user){
            return res.status(404).json({message: "user not found"});
        }

        req.user = user ;
        next();
        
    } catch (error) {
        console.log('Error in accsess to protect routes', error.message);
        return res.status(500).json({message: 'Internal server error '});
    }
}

export default protectRoutes;