const express = require("express");
const cors = require("cors");

// var multer = require("multer");
// const fs = require("fs");
// const upload = multer();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

const userRoute = require("./routes/UserRoute");
const uploadDream = require("./routes/DreamAddRoute");

app.use(userRoute);
app.use(uploadDream);
app.use("/images", express.static("images"));

// app.post("/api/uploadSinglePhoto", upload.single("name"), (req, res) => {
//   fs.writeFile(
//     `${req.body.name}.jpg`,
//     Buffer.from(req.body.image, "base64"),
//     function (err) {
//       if (err) throw err;
//       console.log("It's saved!");
//     }
//   );
//   res.send("Single FIle upload success");
// });

app.listen(PORT, () => {
  console.log("Server port: " + PORT);
});
