import Launcher from "../models/launcher.model.js";

async function newLauncherController(req, res){
    try {
        const {id, name, rocketType, latitude, longitude, city} = req.body;

        if (!name || !rocketType || !latitude || !longitude || !city || !id){
            return res.status(400).json({message:'one of the details is missing '})            
        }
        const isExist = await Launcher.findOne({id: id});
        console.log(isExist)
        if (isExist) {
            return res.status(400).json({message:'launcher with this id is already exist'})            
        }
        const newLauncher = await Launcher.create({
            name,
            id,
            rocketType,
            latitude, 
            longitude,
            city
        })
        
        return res.status(200).json({message:'create launcher succrssfully', data: newLauncher})

    } catch (error) {
        console.log('Error in create launchers controller', error.message);
        return res.status(500).json({message: 'Internal server error '});
    }
}
export default newLauncherController
