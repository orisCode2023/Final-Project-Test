import jwt from 'jsonwebtoken';

function generateTokenAndSendCookies(userId, res){
    const token = jwt.sign({id: userId}, process.env.SECRET_KEY, {
        expiresIn: '15d'
    });

    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'strict'
// TODO: check if the same site is nedded
    })
}

export default generateTokenAndSendCookies;