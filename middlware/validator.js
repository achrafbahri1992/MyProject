const { check, validationResult } = require("express-validator");




exports.signUpRules = () =>[
    check("fname","Required field").notEmpty(),
    check("lname","Required field").notEmpty(),
    check("email","Insert Valid email ").isEmail(),
    check("password","Minimum 8 character").isLength({
        min : 8,
    }),

]


exports.validator = (req,res,next) =>{
    const error=validationResult(req)
    return error.isEmpty()?next():res.status(401).json({error:error.array()})
}