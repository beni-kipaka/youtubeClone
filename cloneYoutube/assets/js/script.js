window.onload = () =>{
    var collapse = document.getElementById("collapse");
    var menu = document.getElementById("menu");

    if(collapse){
        collapse.addEventListener("click", ()=>{
            console.log("Collapse");
            if(menu.style.display === "block"){
                menu.style.display = "none"
            }else{
                menu.style.display = "block";
            }
        })

        if(menu){
            menu.addEventListener("mouseleave", ()=>{
                menu.style.display = "none"
            })
        }
    }
}