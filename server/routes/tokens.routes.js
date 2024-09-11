const verifyRefreshToken = require('../middleware/verifyRefreshToken');
const generateTokens = require('../utils/authUtils');

const router = require('express').Router();

router.get('/refresh', verifyRefreshToken, async (req, res) => {
    try {
        console.log(res.locals);
        const {user} = res.locals;
        const {accessToken, refreshToken} = generateTokens({user});
        console.log(accessToken, refreshToken);

        res.status(200).cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 12,
        }).json({message: 'success', user, accessToken});
    } catch ({message}) {
        res.status(500).json({message})
    }
})

module.exports = router;