let open= document.getElementById("open");
open.style.display="none";
let op =document.getElementById("click");
op.addEventListener("click", ()=>{
    open.style.display="block";
    op.style.display="none";
})