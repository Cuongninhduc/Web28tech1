module.exports = (query) => {
    let objectSearch = {
        keyword: "",
    }
    if (query.keyword){
        objectSearch.keyword = query.keyword;
        const regex = new RegExp(objectSearch.keyword, "i");  //Tìm kiếm gần đúng
        objectSearch.regex = regex;  //Tìm bản ghi có title là ...
    }
    return objectSearch
}