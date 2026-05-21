//admin/products
const Product = require("../../models/productmodel");

const filterstatusHelper = require("../../helpers/filterstatus")
const searchHelper = require("../../helpers/search")


module.exports.index = async (req, res) => {
// Bộ lọc    
    const filterstatus = filterstatusHelper(req.query)
    
// Hết bộ lọc
    
    let find= {
        deleted: false,
    }
    
    if (req.query.status) {
        find.status = req.query.status
    }

// Tìm kiếm
    const objectSearch = searchHelper(req.query);

    let keyword = ""
    if (objectSearch.regex){
         //Tìm kiếm gần đúng
        find.title = objectSearch.regex;  //Tìm bản ghi có title là ...
    }
// Hết tìm kiếm

    const products = await Product.find(find)
    // console.log(products);

    res.render("admin/pages/products/index", {
        pageTitle: "DS san pham",
        products: products, //truyền data ra ngoài giao diện
        filterstatus: filterstatus,
        keyword: keyword
    });
}