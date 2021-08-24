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
        autoplay: false,
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

    window.addEventListener('load', function () {
        this.document.getElementById('loader_body').classList.add('loader_hide')
    })

    $('.team_body h4').on('click', function () {
        let description = $(this).data('description');
        let roll = $(this).data('roll');
        let name = $(this).data('name');
        let class_name = $(this).data('class');
        let image = $(this).data('image');

        $('.team_bio_name').text(name);
        $('.team_details').text(description);
        $('.team_image').attr('src', image);

        console.log({
            description,
            roll,
            name,
            class_name,
        });
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

var app = new Vue({
    el: '#testimonial',
    data: function(){
        return {
            section_title: 'Hello from testimonial',
            my_name: 'al amin hossain',
            test_image: 'http://127.0.0.1:5500/images/flikr3.png',
            students: [
                {
                    image: 'images/flikr1.png',
                    name: "tasnim jawad",
                    designation: "student",
                    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuxsod tempor incidunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
                },
                {
                    image: 'images/flikr2.png',
                    name: "jawas jamil",
                    designation: "captain",
                    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuxsod tempor incidunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
                },
                {
                    image: 'images/flikr3.png',
                    name: "abdur rahman",
                    designation: "cr",
                    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuxsod tempor incidunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
                },
                {
                    image: 'images/flikr4.png',
                    name: "hasnat shohag",
                    designation: "back bencher",
                    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuxsod tempor incidunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
                },
            ]
        }
    }
})


// for (const item in student) {
//     item
// }