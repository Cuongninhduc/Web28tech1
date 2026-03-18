const express = require("express");
require("dotenv").config();

const database = require("./config/databasse.js")

const app = express();
const port = process.env.PORT;

const route = require("./routes/client/indexroutes.js")

database.connect();

app.set("views", "./views");
app.set("view engine", "pug");

// Nhúng file tĩnh
app.use(express.static("public"));
route(app)
// Chạy server
app.listen(port, () => {
    console.log(`Server đang chạy tại trang này http://localhost:${port}`);
});
