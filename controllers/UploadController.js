const { UploadSinglePhoto } = require("../firebase/uploadPhotos");
// var multer = require("multer");
// var upload = multer();
const fs = require("fs");

const UploadDreamPhoto = async (req, res) => {
  // const result = await UploadSinglePhoto(req.body, "DreamsPhotos");
  // console.log(JSON.parse(req.body));
  // res.send(result);

  fs.writeFile(
    `images/${req.body.name}.jpg`,
    Buffer.from(req.body.image, "base64"),
    function (err) {
      if (err) throw err;
      console.log("It's saved!");
    }
  );
  res.send(`images/${req.body.name}.jpg`);
};

module.exports = {
  UploadDreamPhoto: UploadDreamPhoto,
};
