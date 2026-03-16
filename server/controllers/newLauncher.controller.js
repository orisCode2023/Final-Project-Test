async function newLauncherController(req, res){
    try {
        return res.status(200).json({message:'create launcher succrssfully', data: 'data'})

    } catch (error) {
        console.log('Error in create launchers controller', error.message);
        return res.status(500).json({message: 'Internal server error '});
    }
}
export default newLauncherController
