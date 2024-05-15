const express = require("express");
const mongoose = require("mongoose");
const User = require("./Models/User");
const CryptoJS = require("crypto-js");
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();
const Authrouter = require("./routes/Authrouter");
const app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connecton Successful"))
  .catch((err) => {
    console.log(err);
  });
app.use("/api/v1/auth", Authrouter);
app.listen(port, () => {
  console.log("server is listening on port 5000");
});
