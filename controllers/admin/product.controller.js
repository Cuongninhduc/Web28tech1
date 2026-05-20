//admin/products
const Product = require("../../models/productmodel");

const filterstatusHelper = require("../../helpers/filterstatus")


module.exports.index = async (req, res) => {
// Bộ lọc    
    const filterstatus = filterstatusHelper(req.query)
    console.log(filterstatus)
// Hết bộ lọc
    
    let find= {
        deleted: false,
    }
    
    if (req.query.status) {
        find.status = req.query.status
    }
    let keyword = ""
    if (req.query.keyword){
        keyword = req.query.keyword;
        const regex = new RegExp(keyword, "i");  //Tìm kiếm gần đúng
        find.title = regex;  //Tìm bản ghi có title là ...
    }
    const products = await Product.find(find)
    // console.log(products);

    res.render("admin/pages/products/index", {
        pageTitle: "DS san pham",
        products: products, //truyền data ra ngoài giao diện
        filterstatus: filterstatus,
        keyword: keyword
    });
}