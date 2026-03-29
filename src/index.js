const express = require("express");
const router = require("./routes");
const dbConnection = require("./config/mongoose.js")

require("dotenv").config();


dbConnection()
const app = express();
const APP_PORT = process.env.APP_PORT || 3000;
app.use(express.json());
// app.use(express.urlencoded({extended: true}))
app.use("/api", router);

app.listen(APP_PORT, () => {
  console.log(`Server running on port http://localhost:${APP_PORT}`);
});
