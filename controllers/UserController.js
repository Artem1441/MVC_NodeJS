const {
  SignUpUserWithEmailAndPassword,
  SignInUserWithEmailAndPassword,
  SignOutUser,
} = require("../firebase/auth");

const SignUp = async (req, res) => {
  const result = await SignUpUserWithEmailAndPassword(
    req.body.email,
    req.body.password
  );
  res.send(result);
};

const SignIn = async (req, res) => {
  const result = await SignInUserWithEmailAndPassword(
    req.body.email,
    req.body.password
  );
  res.send(result);
};

const SignOut = async (req, res) => {
  const result = await SignOutUser();
  res.send(result);
};

module.exports = {
  SignUp: SignUp,
  SignIn: SignIn,
  SignOut: SignOut,
};
