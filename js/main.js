window.onload = function () { 
// 1 - landing-page

let landingPage = document.querySelector(".landing-page");
let imagePage = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
let backgroundRandom = true;
let backgroundInterval;
function randomizeImg (){
    if (backgroundRandom === true){
        backgroundInterval = setInterval( ()=> {
            let randomNbr = Math.floor(Math.random() * imagePage.length);
            //landingPage.style.backgroundImage = 'url("img/' + imagePage[randomNbr] + ' ")';
            landingPage.style.cssText = 'background-image: url("img/' + imagePage[randomNbr] + ' "); transition: all .9s ease-in-out';
        }, 3000);
    }
}
randomizeImg ();

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

        e.target.parentElement.querySelectorAll(".active").forEach( element => { //parentElement ça vous dire 'ul'
            element.classList.remove("active");
        });
        e.target.classList.add("active");
        if(e.target.dataset.background === "yes"){
            backgroundRandom = true;
            randomizeImg ();
        }else {
            backgroundRandom = false;
            clearInterval(backgroundInterval);
        }
    });
});
};

/* 8 - select skills  ------ */
let ourSkills = document.querySelector(".skills");
window.onscroll = function() {
    let skillsOffsetTop = ourSkills.offsetTop;
    let skillsOuterHeight = ourSkills.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.scrollY; // this.pageYOffsetTop
    if ( windowScrollTop > (skillsOffsetTop - .5 * skillsOuterHeight) ) {
        let allSkills = document.querySelectorAll(".skills-box .skill-progress span");
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progresse; 
        });
    }
};
//(skillsOffsetTop + skillsOuterHeight - windowHeight)
//  لما تسحب ويكون مساحة السحب اكبر من ( المساحة من اول الصفحة فوق لحد بداية سيكشن المهارات + مساحة سكشن المهارات ذاته كله - مساحة الجزء اللي ظاهر لك من المتصفح نفسه )


const btn = document.querySelector('.btn-open');
const allItems = document.querySelectorAll('.items');
const ligne = document.querySelector('.ligne');


btn.addEventListener('click', () => {

    btn.classList.toggle('activ')
    ligne.classList.toggle('activ-ligne');

    allItems.forEach(item => {

        item.classList.toggle('apparition')

        if(item.classList.contains('apparition') === true){

            setTimeout(() => {
                item.classList.toggle('real');
            }, 200)

        } else {
            item.classList.toggle('real');
        }

    })

})

allItems.forEach(item => {
    item.addEventListener('click', () => {

        btn.classList.toggle('activ');
        ligne.classList.toggle('activ-ligne');

        allItems.forEach(item => {
            item.classList.toggle('real')
            item.classList.toggle('apparition')
        })
    })
})

let evt = document.querySelector(".btn li");
evt.onclick = function(){
    evt.style.background = "red";
}