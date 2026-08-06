const express = require("express");
const methodOverride = require("method-override")
require("dotenv").config();

const database = require("./config/databasse.js")

const app = express();
const port = process.env.PORT;

app.use(methodOverride("_method"))

const systemConfig = require("./config/system");

const routeAdmin = require("./routes/admin/index.route")
const route = require("./routes/client/indexroutes.js")

database.connect();

app.set("views", "./views");
app.set("view engine", "pug");

// App locals Variable
app.locals.prefixAdmin = systemConfig.prefixAdmin

// Nhúng file tĩnh
app.use(express.static("public"));

// Routes
route(app)
routeAdmin(app)
// Chạy server
app.listen(port, () => {
    console.log(`Server đang chạy tại trang này http://localhost:${port}`);
});

