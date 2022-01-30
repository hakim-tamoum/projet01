// 1 - landing-page

let landingPage = document.querySelector(".landing-page");
let imagePage = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
setInterval( ()=> {
    let randomNbr = Math.floor(Math.random() * imagePage.length);
    /*landingPage.style.cssText= `
    background-image: url('../img/${imagePage[randomNbr]}'); 
    transition: all .9s ease-in-out`;
    landingPage.style.backgroundImage = `url('../img/${imagePage[randomNbr]}')`; */
    landingPage.style.backgroundImage = 'url("img/' + imagePage[randomNbr] + ' ")';
}, 3000);

// 2 - setting-box

let sittingBox = document.querySelector(".sitting-box");
let sittingIcon = document.querySelector(".toggle-cog .fa-cog");
sittingIcon.onclick = function(){
    this.classList.toggle("fa-spin");
    sittingBox.classList.toggle("open");
};

// 3 - switch colors

const colorsList = document.querySelectorAll(".colors-list li");
colorsList.forEach(li => { // forEach = loop
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        localStorage.setItem("option-box", e.target.dataset.color);// pour 4 - local storage

        // 5 - met active sur color click
        e.target.parentElement.querySelectorAll(".active").forEach( element => { //parentElement ça vous dire 'ul'
            element.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});

// 4 - local stotage

let mainLocal = localStorage.getItem("option-box");
if (mainLocal !== null){
    document.documentElement.style.setProperty('--main-color', mainLocal);

    document.querySelectorAll(".colors-list li").forEach(element=> {// pour 5 - met active
        element.classList.remove("active");
        if(element.dataset.color === mainLocal) {
            element.classList.add("active")
        }
    });
}

// 6 - random background

const random = document.querySelectorAll(".random button");
random.forEach(button => { // forEach = loop
    button.addEventListener("click", (e) => {

        // 5 - met active sur color click
        e.target.parentElement.querySelectorAll(".active").forEach( element => { //parentElement ça vous dire 'ul'
            element.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});
