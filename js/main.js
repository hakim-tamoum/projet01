// landing-page
let landingPage = document.querySelector(".landing-page");
let imagePage = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
setInterval( ()=> {
    let randomNbr = Math.floor(Math.random()* imagePage.length);
    landingPage.style.cssText= `
    background-image: url('../img/${imagePage[randomNbr]}'); 
    transition: all .9s ease-in-out`
}, 3000);

// setting-box
let sittingBox = document.querySelector(".sitting-box");
let sittingIcon = document.querySelector(".toggle-cog .fa-cog");
sittingIcon.onclick = function(){
    this.classList.toggle("fa-spin");
    sittingBox.classList.toggle("open");
};

// switch colors
const colorsList = document.querySelectorAll(".colors-list li");
colorsList.forEach(li => {
    
    li.addEventListener("click", (e) => {
        console.log(e.target.dataset.color);
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
    });
});