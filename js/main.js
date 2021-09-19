"use strict"

$(document).ready(() => {
    $(".header__slider").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        fade: true,
        cssEase: 'linear',
        arrows: false
    })

    $(".news__slider").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        cssEase: 'linear'
    })
})

let aboutTop = $(".header").offset().top;
let projectsTop = $(".projects__title").offset().top;
let newsTop = $(".news__title").offset().top;
console.log(pageYOffset)


$("#about").on("click", (event) => {
    event.preventDefault();

    $('html').animate({
        scrollTop: aboutTop
    }, 500)
})

$("#projects").on("click", (event) => {
    event.preventDefault();

    $('html').animate({
        scrollTop: projectsTop
    }, 500)
})

$("#news").on("click", (event) => {
    event.preventDefault();

    $('html').animate({
        scrollTop: newsTop
    }, 500)
})

$(".header__down-scroll").on("click", (event) => {
    event.preventDefault();

    $('html').animate({
        scrollTop: projectsTop
    }, 500)
})


$(window).scroll(() => {
    if (aboutTop < 976) {
        $("#about").css("list-style", "disc")
    } else {
        $("#about").css("list-style", "circle")
    }

    if (pageYOffset > 605) {
        $(".world__picture-img").animate({
            right: "-7vw",
            bottom: "-70px"
        })

        $(".world__article").animate({
            opacity: "1"
        })
    }
    if (pageYOffset > 1200) {
        $(".international__picture-img").animate({
            right: "7vw",
            bottom: "-70px"
        })

        $(".international__article").animate({
            right: "0"
        })
    }
})

