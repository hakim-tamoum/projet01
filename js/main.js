// landing-page
window.onload = function(){
let landingPage = document.querySelector(".landing-page");
let imagePage = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
setInterval( ()=> {
    let randomNbr = Math.floor(Math.random()* imagePage.length);
    landingPage.style.cssText= `
    background-image: url('../img/${imagePage[randomNbr]}'); 
    transition: all .9s ease-in-out`
}, 3000);
};