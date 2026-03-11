const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

const route = require("./routes/client/indexroutes.js")

app.set("views", "./views");
app.set("view engine", "pug");

route(app)
// Chạy server
app.listen(port, () => {
    console.log(`Server đang chạy tại trang này http://localhost:${port}`);
});
