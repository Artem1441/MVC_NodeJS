const { storage } = require("./firebaseConfig");


const UploadSinglePhoto = async (req, imageName) => {
  return new Promise(async function (resolve, reject) {

    const ref = storage.ref("images/some_name");
    ref.put(req);

    resolve("All is ok");
  });

};

module.exports = {
  UploadSinglePhoto: UploadSinglePhoto,
};
