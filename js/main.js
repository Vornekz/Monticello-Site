"use strict"

$(document).ready(() => {
    $(".header__slider").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    dots: false
                }
            }
        ]
    })

    $(".news__slider").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots:false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots:false
                }
            }
        ]
    })
})

let worldArticle = $(".world__article");
let internationalArticle = $(".international__article");

$("#about").on("click", (event) => {
    event.preventDefault();

    let aboutTop = $(".header").offset().top;

    $('html').animate({
        scrollTop: aboutTop
    }, 1000)
})

$("#projects").on("click", (event) => {
    event.preventDefault();

    let projectsTop = $(".projects__title").offset().top;

    $('html').animate({
        scrollTop: projectsTop
    }, 1000)
})

$("#news").on("click", (event) => {
    event.preventDefault();

    let newsTop = $(".news__title").offset().top;

    $('html').animate({
        scrollTop: newsTop
    }, 1000)
})

$("#contact").on("click", (event) => {
    event.preventDefault();

    let contactTop = $(".footer__contact").offset().top;


    $('html').animate({
        scrollTop: contactTop
    }, 1000)
})

$(".header__down-scroll").on("click", (event) => {
    event.preventDefault();

    let projectsTop = $(".projects__title").offset().top;

    $('html').animate({
        scrollTop: projectsTop
    }, 1000)
})

$(".mini-menu").on("click", (event) => {
    event.preventDefault();

    let nav = $(".nav-menu");

    if (nav.css("right") === "2000px") {
        nav.animate({
            right: "0px",
        })
    } else {
        nav.animate({
            right: "2000px",
        })
    }
})

$(".gallery__center-button").on("click", (event) => {
    event.preventDefault();

    $(".gallery__pictures2").toggle(("slow")).css("display", "flex");
})

$(".world__article-button").on("click", (event) => {
    event.preventDefault();

    $(".world__article-hide").toggle(("slow"));
})

$(".international__article-button").on("click", (event) => {
    event.preventDefault();

    $(".international__article-hide").toggle(("slow"));
})

$(window).scroll(() => {
    let aboutTop = $(".header").offset().top;
    let worldArticleTop = worldArticle.offset().top;
    let internationalArticleTop = internationalArticle.offset().top;


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

        worldArticle.animate({
            opacity: "1"
        })
    }

    if (pageYOffset > worldArticleTop) {
        $(".international__picture-img").animate({
            right: "7vw",
            bottom: "-70px"
        })

        internationalArticle.animate({
            right: "0"
        })
    }

    if (pageYOffset > internationalArticleTop) {
        $(".news").fadeTo(1000, 1)
    }
})

