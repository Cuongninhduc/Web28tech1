//admin/products
const Product = require("../../models/productmodel");

const filterstatusHelper = require("../../helpers/filterstatus")
const searchHelper = require("../../helpers/search")
const paginationHelper = require("../../helpers/pagination")

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

// Phân trang
    const countpro = await Product.countDocuments(find) // Đếm số sản phẩm
    let objectPagi = paginationHelper({
        currentPage: 1,
        limitItem: 4
    },
    req.query,
    countpro)

    // if(req.query.page){
    //     objectPagi.currentPage = parseInt(req.query.page)
    // }
    // objectPagi.skip = (objectPagi.currentPage - 1)*objectPagi.limitItem //Bỏ qua bao nhiêu sản phẩm
    
    // const countpro = await Product.countDocuments(find) // Đếm số sản phẩm
    // const totalpage = Math.ceil(countpro/objectPagi.limitItem) // Số trang đc phân
    // objectPagi.totalpage = totalpage // add thêm vào objectPagi
// Phân trang

    const products = await Product.find(find).limit(objectPagi.limitItem).skip(objectPagi.skip)
    // console.log(products);

    res.render("admin/pages/products/index", {
        pageTitle: "DS san pham",
        products: products, //truyền data ra ngoài giao diện
        filterstatus: filterstatus,
        keyword: keyword,
        pagination: objectPagi
    });
}
// Phân trang

// /admin/products/:status/:id
module.exports.changeStatus = async (req, res) => {
    console.log(req.params)
    const status = req.params.status
    const id = req.params.id    
    const currentPage = req.query.page || 2

    await Product.updateOne({ _id: id}, { status: status})

    res.redirect(req.get("Referer"));

}