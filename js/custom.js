let nav_trigger = document.getElementById('nav_trigger');
let nav_close = document.getElementById('nav_close');

nav_trigger.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('nav_links').classList.toggle('nav_show');
})

nav_close.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('nav_links').classList.toggle('nav_show');
})

$(function () {
    $('.slide_test_1').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        navs: true,
        autoplay: true,
        autoplaySpeed: 200,
        fade: true,
        cssEase: 'linear',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.banner').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        animateOut: 'rotateIn',
        animateIn: 'rotateInDownRight',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.team_slide').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        animateOut: 'rotateIn',
        animateIn: 'rotateInDownRight',
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    window.addEventListener('load', function() {
        this.document.getElementById('loader_body').classList.add('loader_hide')
    })
    
    // $(window).on('load',function(){
    //     $('.loader_body').fadeOut();
    // })

    // $('.test-popup-link').magnificPopup({
    //     type: 'image'
    //     // other options
    // });

    $('#portfolio').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });

    $('.fimages').magnificPopup({
        delegate: 'img', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });

    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();
})