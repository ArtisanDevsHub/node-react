const { ObjectId } = require('mongodb');
const UserModel = require('../models/userModel');
const passwordHandler = require('../utils/passwordHandler');



const  createUser = async (req, res)=>{
    let user = UserModel(req.body);
    await user.save();
    req.session.user = user;
    res.status(201).send({messsage: 'user created'});
}

const logUserin = async (req, res)=>{
    let msg  = {error:'username or password is not matching'};
    const {username, password} = req.body;
    let user = await UserModel.findOne({username});
    if (!user)
        res.status(401).send(msg);

    let isMatch = await passwordHandler.isPasswordMatching(password, user.password);
    if(!isMatch)
        res.status(401).send(msg);
    req.session.user = user;
    res.status(200).send({message: 'user logged in'});
}

const logUserOut = async (req, res)=>{
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.status(200).send({message: 'user logged out'});
}


const showUserDashboard = async (req, res)=>{
    let currentUser = req.session.user;
    // console.log(currentUser);
    let user = {
        id: currentUser._id,
        username: currentUser.username,
        phoneNumber: currentUser.phoneNumber,
        email: currentUser.email,
        address: currentUser.address
    }
    res.status(200).send(user);
}


module.exports = {
    createUser,
    logUserin,
    logUserOut,
    showUserDashboard
}