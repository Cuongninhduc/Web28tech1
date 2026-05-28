module.exports = (objectPagi, query, countpro) => {
    if(query.page){
        objectPagi.currentPage = parseInt(query.page)
    }
    objectPagi.skip = (objectPagi.currentPage - 1)*objectPagi.limitItem //Bỏ qua bao nhiêu sản phẩm
    
    const totalpage = Math.ceil(countpro/objectPagi.limitItem) // Số trang đc phân
    objectPagi.totalpage = totalpage // add thêm vào objectPagi
    return objectPagi
}   