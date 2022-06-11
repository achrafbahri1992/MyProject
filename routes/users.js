const express = require ("express");
const { signUp, login, getUser } = require("../controller/user.controller");
const auth = require("../middlware/auth");
const { signUpRules,validator } = require("../middlware/validator");

router=express.Router();

router.post("/signUp",signUpRules(),validator, signUp)
router.post("/login", login)
router.get("/get",auth,getUser)

module.exports=router
