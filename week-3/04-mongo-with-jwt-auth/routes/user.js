const { Router, response } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const {jwtSecret} = require("../config");
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username, 
        password
    })
    res.json({
        message: "User registered successfully."
    })
});

router.post('/signin', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const response = await User.findOne({
        username : username,
        password : password
    })
    
    if(response){
        const signedtoken = jwt.sign({username}, jwtSecret);
        res.json({
            signedtoken
        })
    }
    else{
        res.status(411).json({
            msg: "Incorrect email or password."
        })
    }
});

router.get('/courses', async (req, res) => {
    const allcourses = await Course.find({});
    res.json({
        courses: allcourses
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    const username = req.username;
    const courseID = req.params.courseId;

    await User.updateOne({
        username: username
    },{
        "$push" : {
            purchasedCourses : courseID
        }
    })
    res.json({
        msg: "Purchase successfull."
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    const user = await User.findOne({
        username : req.username
    })

    const courses = await Course.find({
        _id :{
            "$in" : user.purchasedCourses
        }
    }) 
    res.json({
        courses: courses
    })
});

module.exports = router