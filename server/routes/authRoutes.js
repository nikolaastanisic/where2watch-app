const express = require('express');
const router = express.Router();
const cors = require('cors');
const { sign, SignInPage, SignInPage2, getProfile, logout } = require('../controllers/authController')
// middleware
router.use(
    cors ({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)
router.get('/', sign)
router.post('/signin' , SignInPage )
router.post('/login' , SignInPage2 )
router.get('/profile', getProfile)
router.get('/logout', logout)
module.exports = router 