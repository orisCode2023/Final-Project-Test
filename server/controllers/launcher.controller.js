async function launcherController(req, res){
    try {
        return res.status(200).json({message:'get launcher succrssfully', data: 'data'})

    } catch (error) {
        console.log('Error in get launcher controller', error.message);
        return res.status(500).json({message: 'Internal server error '});
    }
}
export default launcherController
