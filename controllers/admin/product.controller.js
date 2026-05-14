//admin/products
const Product = require("../../models/productmodel");

module.exports.index = async (req, res) => {
    let filterstatus = [
        {
            name: "Tất cả",
            status: "",
            class: ""            
        },
        {
            name: "Hoạt động",
            status: "active",
            class: ""
        },
        {
            name: "Dừng hoạt động",
            status: "inactive",
            class: ""
        }
    ]
    // console.log(req)
    if (req.query.status) {
        const index = filterstatus.findIndex(item => item.status == req.query.status);
        filterstatus[index].class = "active"    
    } else {
        const index = filterstatus.findIndex(item => item.status == "");
        filterstatus[index].class = "active"
    }
    
    let find= {
        deleted: false
    }
    
    if (req.query.status) {
        find.status = req.query.status
    }
    const products = await Product.find(find)
    // console.log(products);

    res.render("admin/pages/products/index", {
        pageTitle: "DS san pham",
        products: products, //truyền data ra ngoài giao diện
        filterstatus: filterstatus
    });
}