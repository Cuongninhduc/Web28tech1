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

//Checkbox multi
const checkboxMulti = document.querySelector("[checkbox-multi]")
if (checkboxMulti){
    const inputCheckall = checkboxMulti.querySelector("input[name='checkall']")
    const inputid = checkboxMulti.querySelectorAll("input[name='id']")

    inputCheckall.addEventListener("click", () => {
        if(inputCheckall.checked){
            inputid.forEach(input => {
                input.checked = true;
            })
        } else {
            inputid.forEach(input => {
                input.checked = false
            })
        }})

    inputid.forEach(input => {
        input.addEventListener("click", () => {
            const countcheck = checkboxMulti.querySelectorAll("input[name='id']:checked").length;

            if (countcheck == inputid.length){
                inputCheckall.checked = true
            } else {
                inputCheckall.checked = false
            }
        })
    })
}

//form change multi
const formchangemulti = document.querySelector("[form-change-multi]")
if (formchangemulti) {
    formchangemulti.addEventListener("submit", (e) => {
        e.preventDefault();

        const checkboxMulti = document.querySelector("[checkbox-multi]")
        const inputsChecked = checkboxMulti.querySelectorAll(
            "input[name='id']:checked"
        );

        if(inputsChecked.length > 0){
            let ids = [];
            const inputIds = formchangemulti.querySelector("input[name='ids']")

            inputsChecked.forEach(input => {
                const id = input.value;
                ids.push(id);
            })
            inputIds.value = ids.join(". ");
            formchangemulti.submit();
        } else {
            alert("Chon it nhat 1 ban ghi")
        }
    })
}