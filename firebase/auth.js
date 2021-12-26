const { auth } = require("./firebaseConfig");

const SignUpUserWithEmailAndPassword = async (email, password) => {
  return new Promise(function (resolve, reject) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        resolve("Success");
      })
      .catch((err) => {
        resolve(err.message);
      });
  });
};

const SignInUserWithEmailAndPassword = (email, password) => {
  return new Promise(function (resolve, reject) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve("Success");
      })
      .catch((err) => {
        resolve(err.message);
      });
  });
};

const SignOutUser = () => {
  return new Promise(function (resolve, reject) {
    auth
      .signOut()
      .then(() => {
        resolve("Success");
      })
      .catch((err) => {
        resolve(err.message);
      });
  });
};

module.exports = {
  SignUpUserWithEmailAndPassword: SignUpUserWithEmailAndPassword,
  SignInUserWithEmailAndPassword: SignInUserWithEmailAndPassword,
  SignOutUser: SignOutUser,
};
