const slider = document.querySelector(".slider");
const nav = slider.querySelectorAll("[data-navid]")
const dots = slider.querySelectorAll(".slider__dot");
const img = slider.querySelector(".slider__img");
const left = slider.querySelector(".slider__left");
const right = slider.querySelector(".slider__right");
const currentSlide = {
    city: slider.querySelector("#city"),
    area: slider.querySelector("#area"),
    time: slider.querySelector("#time"),
    cost: slider.querySelector("#cost"),
    img: slider.querySelector(".slider__img")
}

let slides = [
    {
        city: "Rostov-on-Don LCD admiral",
        area: "81 m2",
        time: "3.5 months",
        cost: "Upon request",
        img: "image/jpg/image 0.jpg"
    }, 
    {
        city: "Sochi <br> Thieves",
        area: "105 m2",
        time: "4 months",
        cost: "Upon request",
        img: "image/jpg/image 1.jpg"
    },
    {
        city: "Rostov-on-Don Patriotic",
        area: "93 m2",
        time: "3 months",
        cost: "Upon request",
        img: "image/jpg/image 2.jpg"
    }
]

let counter = 0;

left.addEventListener("click", ()=> {
    counter--;
    if (counter < 0) counter = dots.length - 1; 
    change(counter);
})

right.addEventListener("click", ()=> {
    counter++;
    if (counter > dots.length - 1) counter = 0;
    change(counter); 
})

for (let elem of nav) {
    elem.addEventListener("click", ()=>{
        counter = elem.dataset.navid;
        change(counter);
    })
}

// function classToggler (num) {
//     for(let elem of nav) {
//         elem.classList.remove("active");
//     }
    
//     let activate = slider.querySelectorAll(`[data-navid = "${num}"]`);
//     for(let a of activate) {
//         a.classList.add("active");
//     }
// }

function change (num) {
    for(inf in currentSlide) {
        if (inf != "img") {
            currentSlide[inf].innerHTML = slides[num][inf];
        } else {
            currentSlide[inf].src = slides[num][inf];
        }
    }

    for(let elem of nav) {
        elem.classList.remove("active");
    }
    
    let activate = slider.querySelectorAll(`[data-navid = "${num}"]`);
    for(let a of activate) {
        a.classList.add("active");
    }
}

