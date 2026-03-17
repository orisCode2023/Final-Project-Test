async function getUserController(req, res){
    try {
        return res.status(200).json({message:'get logined user details succrssfully', data: launcher})

    } catch (error) {
        console.log('Error in get logined user details controller', error.message);
        return res.status(500).json({message: 'Internal server error '});
    }
}
export default getUserController
