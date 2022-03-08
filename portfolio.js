let width= screen.width;
let close= document.getElementById("close");
let show= document.getElementById("show");
let blur=document.getElementById("blur");
let nav=  document.getElementById("navHid");
close.style.display= "none";
if(width <= 500){
    show.style.display="block";
    nav.style.display="none";
}
else{
    nav.style.display="block";
    show.style.display= "none";
}
show.addEventListener('click',()=>{
    nav.style.display="block";
    show.style.display= "none";
    close.style.display= "block";
    blur.style.filter="blur(1px)"
})
close.addEventListener("click",()=>{
    nav.style.display="none";
    show.style.display= "block";
    close.style.display= "none";
    blur.style.filter="blur(0px)"
})
let i=0;
let typing= `I'm a WEB DEVELOPER`;
let speed= 100;
window.onload= setInterval( function type(){
    if(i< typing.length){
        document.getElementById("dev").innerHTML+= typing.charAt(i);
        i++;
        setTimeout(type, speed);
    }
},500);
let open= document.getElementById("open");
open.style.display="none";
let op =document.getElementById("click");
op.addEventListener("click", ()=>{
    open.style.display="block";
    op.style.display="none";
})