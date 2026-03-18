import Launcher from "../../models/launcher.model.js";

async function newLauncher(req, res){
    try {
        const {name, rocketType, latitude, longitude, city} = req.body;

        if (!name || !rocketType || !latitude || !longitude || !city){
            return res.status(400).json({message:'one of the details is missing '})            
        }
        const newLauncher = await Launcher.create({
            name,
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
export default newLauncher
