const jwt = require("jsonwebtoken");
const {jwtSecret} = require("../config")
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        msg:"Admin created successfully."
    })

});

router.post('/signin', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const response = await Admin.findOne({
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

router.post('/courses', adminMiddleware, async(req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    const response = await Course.find({});
    res.json({
        courses: response
    })
});

module.exports = router;