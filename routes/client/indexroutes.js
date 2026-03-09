const productRoutes = require("./productsroutes")
const homeRoutes = require("./homeroutes")

module.exports = (app) => {
    app.use("/", homeRoutes);
    app.use("/products", productRoutes)
}