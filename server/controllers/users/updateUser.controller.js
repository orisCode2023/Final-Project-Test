async function updateUserController(req, res){
    try {
        return res.status(200).json({message:'get launcher succrssfully', data: launcher})

    } catch (error) {
        console.log('Error in get launcher controller', error.message);
        return res.status(500).json({message: 'Internal server error '});
    }
}
export default updateUserController
