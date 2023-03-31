const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchUser");

//const JWT_SECRET = "Harryisagooddb$oy";
const JWT_SECRET = process.env.REACT_APP_JWT_SECRET;

// ROUTE 1: Create a User using : POST /api/auth/createuser. No login Require
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    
    //console.log("Hi");
    let success=false;
    try {
      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      //Genrating the Salt and Hash from password
      const salt = await bcrypt.genSalt(10);
      secPassword = await bcrypt.hash(req.body.password, salt);

      //check whether the user exist already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ success,error: "Sorry a user with this email already exists" });
      }

      //Crate a new User
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
      });

      // .then(user => res.json(user))
      // .catch(err=>{console.log(err)
      // res.json({err : 'Pleses enter a Unique Value for email', message : err.message})
      // })

      // const user=User(req.body)
      // user.save()

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      //console.log(authToken);
      success=true
      res.json({success, authToken });
    } catch (error) {
      //console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE 2: Authenticate a User using : POST /api/auth/login. ogin Require
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password can not be blank").exists(),
  ],
  async (req, res) => {
    let success = false
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      //console.log(user);
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({success,
          error: "Please try to login with correct credentials",
        });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      //console.log(authToken);
      success=true
      res.json({ success,authToken });
    } catch (error) { 
      //console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE 3: Get Logged in User Details using POST: "/api/auth/getuser". Login required

router.post("/getuser",fetchuser,  async (req, res) => {
    try {
      let userId=req.user.id; 
      const user = await User.findById(userId).select("password");
      res.send(user);
    } catch (error) {
      //console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
module.exports = router;
