const express = require("express");
const { SignUp, SignIn, SignOut } = require("../controllers/UserController");

const router = express.Router();

router.post("/signUp", SignUp);

router.post("/signIn", SignIn);

router.post("/signOut", SignOut);

module.exports = router;
