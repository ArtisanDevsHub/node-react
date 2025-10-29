const express = require('express');
const UserModel = require('../models/userModel');
const router = express.Router();
const userController = require('../controller/userController');
const {isAuthenticated} = require('../middleware/authMiddleware');



router.get('/user-dashboard', isAuthenticated, userController.showUserDashboard);

router.post('/user-create', userController.createUser);

router.post('/user-login', userController.logUserin);

router.post('/user-logout', userController.logUserOut);

router.post('/is-Authenticated', isAuthenticated, (req, res)=>{
    res.status(200).send({message: 'user is authenticated'})
});

module.exports = router;
