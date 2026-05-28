//Button status
var buttonstatus = document.querySelectorAll("[button-status]")

if(buttonstatus.length > 0){
    let url = new URL(window.location.href);
    console.log(url)

    buttonstatus.forEach(button => {
        button.addEventListener("click", () => {
            const status = button.getAttribute("button-status"); 

            if(status) {
                url.searchParams.set("status", status)
            } else {
                url.searchParams.delete("status");
            }
            window.location.href = url.href            
        })
    })
}

//form search
const formSearch = document.querySelector("#form-search")
if(formSearch){
    let url = new URL(window.location.href);
    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        const keyword = e.target.elements.keyword.value
        if(keyword) {
            url.searchParams.set("keyword",keyword);
        } else {
            url.searchParams.delete("keyword")    //Lấy đc trên URL chữ Iphone
        }
        window.location.href = url.href;
    })
}
// Bắt event phân trang

const btnPagi = document.querySelectorAll("[button-pagi]")
if(btnPagi) {
    let url = new URL(window.location.href)
    btnPagi.forEach(button => {
        button.addEventListener("click", () => {
            const page = button.getAttribute("button-pagi")
            url.searchParams.set("page",page);
            window.location.href = url.href
        })
    })
}