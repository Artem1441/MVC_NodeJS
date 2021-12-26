const express = require("express");
const { UploadDreamPhoto } = require("../controllers/UploadController");
var multer = require("multer");
// const fs = require("fs");
const upload = multer();

const router = express.Router();


router.post("/api/uploadSinglePhoto", upload.single("name"), UploadDreamPhoto);

module.exports = router;
