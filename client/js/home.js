const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('activo');
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('activo');
    })
}

const slider = document.querySelector('.slider');
const logosObject = [
    {
        "img": "/client_img/partners/african_cotton.png",
        "name": "African Cotton"
    },
    {
        "img": "/client_img/partners/bericap.png",
        "name": "bericap"
    },
    {
        "img": "/client_img/partners/brazafric_enterprise.png",
        "name": "Brazafric Enterprise"
    },
    {
        "img": "/client_img/partners/brazafric_industries.png",
        "name": "Brazafric Industries"
    },
    {
        "img": "/client_img/partners/bwosi.png",
        "name": "Bwosi"
    },
    {
        "img": "/client_img/partners/fossilcote.png",
        "name": "FossilCote"
    },
    {
        "img": "/client_img/partners/ric.png",
        "name": "Ric"
    },
    {
        "img": "/client_img/partners/riggen_fresh.png",
        "name": "Riggen Fresh"
    },
    {
        "img": "/client_img/partners/seweco.png",
        "name": "Seweco"
    },
    {
        "img": "/client_img/partners/tecno.png",
        "name": "Tecno"
    },
];

function initializeSlider (){
    let logosHtml = "";

    for (let logo in logosObject){
        logosHtml += `<div class="slide">`;
        logosHtml += `    <img src="${logosObject[logo].img}" alt="${logosObject[logo].name}"/>`
        logosHtml += `</div>`;
    }

    slider.innerHTML = logosHtml;
}

window.addEventListener("load", initializeSlider());

const tinySlider = tns({
    container: ".slider",
    center: true,
    autoplayButtonOutput: false,
    autoWidth: true,
    gutter: 15,
    slideBy: 1,
    nav: true,
    navPosition: "bottom",
    speed: 400,
    controlsContainer: "#controls",
    prevButton: ".previous",
    nextButton: ".next",
    responsive: {
        200: {
            items: 1
        },
        640: {
            items: 2
        },
        1000: {
            items: 3
        },
        1400: {
            items: 4
        }
    }
})