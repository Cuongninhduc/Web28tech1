//Change status

const btnChangSta = document.querySelectorAll("[button-change-status]")
if (btnChangSta.length > 0) {
    const formChangeSta = document.querySelector("#form-change-status")
    const path = formChangeSta.getAttribute("data-path")
    console.log(path);

    btnChangSta.forEach(button => {
        button.addEventListener("click", () => {
            const statusCu = button.getAttribute("data-status")
            const id = button.getAttribute("data-id")
            let statusChange = statusCu == "active" ? "inactive" : "active"
            
            // console.log(statusCu);
            // console.log(id);
            // console.log(statusChange);

            const action = path + `/${statusChange}/${id}?_method=PATCH`;
            
            formChangeSta.action = action;
            formChangeSta.submit();
        })
    })
}