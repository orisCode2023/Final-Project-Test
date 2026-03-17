async function logoutController(req, res){
    try {
        res.status(200).clearCookie('jwt').json({message:'logout succrssfully'})
    } catch (error) {
        console.log('Error in logout controller', error.message);
        return res.status(500).json({message: 'Internal server error '});
    }
}
export default logoutController
