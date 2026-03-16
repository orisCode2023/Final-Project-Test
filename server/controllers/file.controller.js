async function controller(req, res){
    try {
        return res.status(200).json({message:'get user info succrssfully', data: 'data'})

    } catch (error) {
        console.log('Error in get self info controller', error.message);
        return res.status(500).json({message: 'Internal server error '});
    }
}
export default controller
