$(function() {


    // var swiper = new Swiper(".visual-Swiper", {
    //     speed: 1000,
    //     spaceBetween: 50,
    //     centeredSlides: true,
    //     loop: true,
    //     loopAdditionalSlides: 1,
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     }
    // });


    // sliderStory

    $("#sliderStory .story-list .common-thum").click(function() {
        $(".mOnly-slider").addClass("on")
        var this_slider = $(this).index();
        $(".mOnly-slider .slidersWrap:eq(" + this_slider + ")").addClass("show");
    });
    $(".mOnly-slider .slidersWrap .close-btn").click(function() {
        $(".mOnly-slider").removeClass("on")
        $(".mOnly-slider .slidersWrap").removeClass("show");
    });


    // sliderStory mySwiper01
    var mySwiper01 = new Swiper(".mySwiper01", {
        speed: 0,
        centeredSlides: true,
        observeParents: true,
        observer: true,
        on: {
            slideChange: function() {
                $(".swiper-pagination-bullet-active").prevAll().addClass("maintain");
                $(".swiper-button-prev").click(function() {
                    $(".swiper-pagination-bullet-active").removeClass("maintain");
                });
            }
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 2800,
            disableOnInteraction: false,
            stopOnLastSlide: true
        },
        // effect: "fade",


    });

    // sliderStory mySwiper02
    var mySwiper02 = new Swiper(".mySwiper02", {
        speed: 0,
        centeredSlides: true,
        observeParents: true,
        observer: true,
        autoplay: {
            delay: 2800,
            disableOnInteraction: false,
            stopOnLastSlide: true
        },
        on: {
            slideChange: function() {
                $(".swiper-pagination-bullet-active").prevAll().addClass("maintain");
                $(".swiper-button-prev").click(function() {
                    $(".swiper-pagination-bullet-active").removeClass("maintain");
                });
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
        },
        // effect: "fade",

    });

    // sliderStory mySwiper03
    var mySwiper03 = new Swiper(".mySwiper03", {
        speed: 0,
        centeredSlides: true,
        observeParents: true,
        observer: true,
        autoplay: {
            delay: 2800,
            disableOnInteraction: false,
            stopOnLastSlide: true
        },
        on: {
            slideChange: function() {
                $(".swiper-pagination-bullet-active").prevAll().addClass("maintain");
                $(".swiper-button-prev").click(function() {
                    $(".swiper-pagination-bullet-active").removeClass("maintain");
                });
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
        }
        // effect: "fade",

    });

    // sliderStory mySwiper04
    var mySwiper04 = new Swiper(".mySwiper04", {
        speed: 0,
        centeredSlides: true,
        observeParents: true,
        observer: true,
        autoplay: {
            delay: 2800,
            disableOnInteraction: false,
            stopOnLastSlide: true
        },
        on: {
            slideChange: function() {
                $(".swiper-pagination-bullet-active").prevAll().addClass("maintain");
                $(".swiper-button-prev").click(function() {
                    $(".swiper-pagination-bullet-active").removeClass("maintain");
                });
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
        }
        // effect: "fade",
    });

    // sliderStory mySwiper05
    var mySwiper05 = new Swiper(".mySwiper05", {
        speed: 0,
        centeredSlides: true,
        observeParents: true,
        observer: true,
        autoplay: {
            delay: 2800,
            disableOnInteraction: false,
            stopOnLastSlide: true
        },
        on: {
            slideChange: function() {
                $(".swiper-pagination-bullet-active").prevAll().addClass("maintain");
                $(".swiper-button-prev").click(function() {
                    $(".swiper-pagination-bullet-active").removeClass("maintain");
                });
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
        }
        // effect: "fade",
    });

    // sliderStory mySwiper06
    var mySwiper06 = new Swiper(".mySwiper06", {
        speed: 0,
        centeredSlides: true,
        observeParents: true,
        observer: true,
        autoplay: {
            delay: 2800,
            disableOnInteraction: false,
            stopOnLastSlide: true
        },
        on: {
            slideChange: function() {
                $(".swiper-pagination-bullet-active").prevAll().addClass("maintain");
                $(".swiper-button-prev").click(function() {
                    $(".swiper-pagination-bullet-active").removeClass("maintain");
                });
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
        }
        // effect: "fade",
    });

    // sliderStory mySwiper07
    var mySwiper07 = new Swiper(".mySwiper07", {
        speed: 0,
        centeredSlides: true,
        observeParents: true,
        observer: true,
        autoplay: {
            delay: 2800,
            disableOnInteraction: false,
            stopOnLastSlide: true
        },
        on: {
            slideChange: function() {
                $(".swiper-pagination-bullet-active").prevAll().addClass("maintain");
                $(".swiper-button-prev").click(function() {
                    $(".swiper-pagination-bullet-active").removeClass("maintain");
                });
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
        }
        // effect: "fade",
    });


    var thum_01 = $("#sliderStory .story-list .common-thum").eq(0);
    $(thum_01).one("click", function() {
        mySwiper01.slideTo(0, 0, false);
    });
    var thum_02 = $("#sliderStory .story-list .common-thum").eq(1);
    $(thum_02).one("click", function() {
        mySwiper02.slideTo(0, 0, false);
    });
    var thum_03 = $("#sliderStory .story-list .common-thum").eq(2);
    $(thum_03).one("click", function() {
        mySwiper03.slideTo(0, 0, false);
    });
    var thum_04 = $("#sliderStory .story-list .common-thum").eq(3);
    $(thum_04).one("click", function() {
        mySwiper04.slideTo(0, 0, false);
    });
    var thum_05 = $("#sliderStory .story-list .common-thum").eq(4);
    $(thum_05).one("click", function() {
        mySwiper05.slideTo(0, 0, false);
    });
    var thum_06 = $("#sliderStory .story-list .common-thum").eq(5);
    $(thum_06).one("click", function() {
        mySwiper06.slideTo(0, 0, false);
    });
    var thum_07 = $("#sliderStory .story-list .common-thum").eq(6);
    $(thum_07).one("click", function() {
        mySwiper07.slideTo(0, 0, false);
    });



    // main section swiper Content
    var swiper_Content_01 = new Swiper("#swiperContent_01", {
        breakpoints: {
            320: {
                slidesPerView: 1.8,
                initialSlide: 2,
                loop: true,
            },
            1200: {
                slidesPerView: 4,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            }
        }

    });
    var swiper_Content_02 = new Swiper("#swiperContent_02", {
        breakpoints: {
            320: {
                slidesPerView: 1.8,
                initialSlide: 2,
                loop: true,
            },
            1200: {
                slidesPerView: 4,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            }
        }
    });
    var swiper_Content_03 = new Swiper("#swiperContent_03", {
        breakpoints: {
            320: {
                slidesPerView: 1.8,
                initialSlide: 2,
                loop: true,
            },
            1200: {
                slidesPerView: 4,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            }
        }
    });
    var swiper_Content_04 = new Swiper("#swiperContent_04", {
        breakpoints: {
            320: {
                slidesPerView: 1.8,
                initialSlide: 2,
                loop: true,
            },
            1200: {
                slidesPerView: 4,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            }
        }
    });
    var swiper_Content_05 = new Swiper("#swiperContent_05", {
        breakpoints: {
            320: {
                slidesPerView: 1.8,
                initialSlide: 2,
                loop: true,
            },
            1200: {
                slidesPerView: 4,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            }
        }
    });

    // stay_detail autoplay
    var swiper_autoplay_01 = new Swiper("#autoPlay01", {
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                initialSlide: 1,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
            1200: {
                slidesPerView: 3,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            }
        }
    });
    var swiper_autoplay_02 = new Swiper("#autoPlay02", {
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                initialSlide: 2,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
            1200: {
                slidesPerView: 4,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            }
        }
    });

    var swiper_autoplay_03 = new Swiper("#autoPlay03", {
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                initialSlide: 2,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
            1200: {
                slidesPerView: 4,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            }
        }
    });

});