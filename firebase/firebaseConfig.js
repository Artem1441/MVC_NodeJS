const firebase = require("firebase");
const firebaseConfig = {
//   firebase connection here
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

module.exports = {
  auth: auth,
  firestore: firestore,
  storage: storage,
};
