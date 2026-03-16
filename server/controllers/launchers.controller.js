async function launchersController(req, res){
    try {
        return res.status(200).json({message:'get launchers succrssfully', data: 'data'})

    } catch (error) {
        console.log('Error in get launchers controller', error.message);
        return res.status(500).json({message: 'Internal server error '});
    }
}
export default launchersController
