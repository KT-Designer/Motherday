var swiper = new Swiper(".mySwiper", {
    // 自動播放
    autoplay: {
        delay: 1800,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".myprev",
        prevEl: ".mynext",
    },

    // 第一張與最後一張無縫連接
    loop: true,
    // 顯示數量
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },


    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // 斷點
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2.3,
            // ↑後半部露出局部
            spaceBetween: 6
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2.5,
            spaceBetween: 6
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 5.5,
            spaceBetween: 6
        }
    }





});