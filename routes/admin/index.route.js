const systemConfig = require("../../config/system")

const dashRoutes = require("./dashboard.route")
const productRoutes = require("./products.route")

module.exports = (app) => {
    const PATH_ADMIN = systemConfig.prefixAdmin;
    
    app.use(PATH_ADMIN + "/dashboard", dashRoutes)
    app.use(PATH_ADMIN + "/products", productRoutes)
}