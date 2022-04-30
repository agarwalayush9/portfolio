let width = screen.width;
let close = document.getElementById("close");
let show = document.getElementById("show");
let blur = document.getElementById("blur");
let nav = document.getElementById("navHid");
let lm = document.getElementById("Lightmode");
let dm = document.getElementById("Darkmode");
let wl= document.getElementById("writeL");
let wd= document.getElementById("writeD");
let b=document.getElementById("b");
close.style.display = "none";
lm.style.display = "block";
dm.style.display = "none";
b.classList.add("bl");
dm.addEventListener('click', () => {
    b.classList.add("bl");
    b.classList.remove("bd");
    dm.style.display = "none";
    lm.style.display = "block";
    wd.style.backgroundColor="aliceblue";
    wd.innerText="Light mode";
    setInterval(() => {
        wd.innerText="";
        wd.style.backgroundColor="inherit";
    }, 3000);
})
lm.addEventListener('click', () => {
    b.classList.add("bd");
    b.classList.remove("bl");
    lm.style.display = "none";
    dm.style.display = "block";
    wl.style.backgroundColor="aliceblue";
    wl.innerText="Dark mode";
    setInterval(() => {
        wl.innerText="";
        wl.style.backgroundColor="inherit";
    }, 3000);
})
if (width <= 500) {
    show.style.display = "block";
    nav.style.display = "none";
}
else {
    nav.style.display = "block";
    show.style.display = "none";
}
show.addEventListener('click', () => {
    nav.style.display = "block";
    show.style.display = "none";
    close.style.display = "block";
    blur.style.filter = "blur(1px)"
})
close.addEventListener("click", () => {
    nav.style.display = "none";
    show.style.display = "block";
    close.style.display = "none";
    blur.style.filter = "blur(0px)"
})
let i = 0;
let typing = `I'm a WEB DEVELOPER`;
let speed = 100;
window.onload = setInterval(function type() {
    if (i < typing.length) {
        document.getElementById("dev").innerHTML += typing.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}, 500);
let open = document.getElementById("open");
open.style.display = "none";
let op = document.getElementById("click");
op.addEventListener("click", () => {
    open.style.display = "block";
    op.style.display = "none";
})
