var jwt = require('jsonwebtoken')
//const JWT_SECRET = "Harryisagooddb$oy";
const JWT_SECRET = process.env.REACT_APP_JWT_SECRET;

const fetchuser=(req,res,next)=>{
    //Get token user from the token and add id to the req object

    const token=req.header('auth-token')
    if(!token)
    {   
        res.status(401).send({error: "Please authnticate using a valid token"})
    }

    try {  
        const data=jwt.verify(token,JWT_SECRET);
        req.user=data.user;
        next();
    } catch (error) {
        res.status(401).send({error: "Please authnticate using a valid token"})
    }
}

module.exports = fetchuser;