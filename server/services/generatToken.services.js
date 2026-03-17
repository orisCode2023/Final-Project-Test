import jwt from 'jsonwebtoken';

function generateTokenAndSendCookies(userId, user_type, res){
    const token = jwt.sign({id: userId, user_type: user_type }, process.env.SECRET_KEY, {
        expiresIn: '15d'
    });

    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'strict'
    })
}

export default generateTokenAndSendCookies;