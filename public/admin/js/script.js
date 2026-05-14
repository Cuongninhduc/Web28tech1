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