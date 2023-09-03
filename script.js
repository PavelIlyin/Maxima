"use strict"

let images = [
    {
        path: "https://backend.learn.maxima.school/files/ebb3a325-0974-4c80-a3a8-6233af42488a.png",
        name: "Фото 1"
    },
    {
        path: "https://backend.learn.maxima.school/files/0da608e0-229a-4c41-83d1-cd174b6a8d75.webp",
        name: "Фото 2"
    },
    {
        path: "https://backend.learn.maxima.school/files/2245849a-2a00-4e0f-b374-b6532acaed76.png",
        name: "Фото 3"
    },
    {
        path: "https://backend.learn.maxima.school/files/7b0c83e9-f3e3-412e-a10e-c3a2cbbfc0ff.png",
        name: "Фото 4"
    }
]


let count = 1;

function sliderShow() {
    let slider = document.querySelector('.slider');
    images.forEach((el, index) => {
        slider.innerHTML += `<div class="slider-box fade ${count === index + 1 ? 'show' : ''}">
                                <div class="slider-box__number">${index + 1}/${images.length}</div>
                                <div class="slider-box__image">
                                    <img src="${el.path}"
                                        alt="${el.name}">
                            </div>`
    })

    slider.innerHTML += `<span class="slider__down">&#10094</span>
                         <span class="slider__up">&#10095</span>`;

    let downButton = document.querySelector('.slider__down');
    let upButton = document.querySelector('.slider__up');

    downButton.addEventListener('click', countChanges);
    upButton.addEventListener('click', countChanges);
}

sliderShow();

function countChanges(event) {
    let slide = document.querySelectorAll('.slider-box')

    slide[count - 1].classList.remove('show')
    if (event.target.classList[0] === 'slider__up') {
        count += 1;
        count > slide.length ? count = 1 : count;

    } else if (event.target.classList[0] === 'slider__down') {
        count -= 1;
        count < 1 ? count = slide.length : count;
    }

    slide[count - 1].classList.add('show');
}