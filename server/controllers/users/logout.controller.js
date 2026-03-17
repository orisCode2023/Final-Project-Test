async function logoutController(req, res){
    try {
        return res.status(200).json({message:'logout succrssfully', data: launcher})

    } catch (error) {
        console.log('Error in logout controller', error.message);
        return res.status(500).json({message: 'Internal server error '});
    }
}
export default logoutController
