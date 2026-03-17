import Launcher from '../../models/launcher.model.js';

async function removeLauncherController(req, res){
    try {
        const {id} = req.params;

        if(!id){
            throw new Error("no id was passing ")
        }
        const launcher = await Launcher.findOne({id : id});
        if (!launcher ){
            return res.status(404).json({message: 'launcher with this id not found'});
        }
        await Launcher.deleteOne(launcher)
        return res.status(200).json({message:'remove launcher succrssfully', data: launcher})

    } catch (error) {
        console.log('Error in remove launcher controller', error.message);
        return res.status(500).json({message: 'Internal server error '});
    }
}
export default removeLauncherController
