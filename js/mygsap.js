
// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap code here!
    ScrollTrigger.matchMedia({
        // large
        "(min-width: 1200px)": function () {
            // setup animations and ScrollTriggers for screens 960px wide or greater...
            // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

            // KV滾動視差
            const t1 = gsap.timeline({
                scrollTrigger: {
                    // 滾動.kv時觸發
                    trigger: ".kv",
                    // 固定
                    pin: true,
                    // 滾動一次的執行速度
                    scrub: 0.5,
                },
            });
            t1.to("#center", { yPercent: "-40" }, "flower");
            t1.to("#left", { xPercent: "86" }, "flower");
            t1.to("#right", { xPercent: "-86" }, "flower");
            // 取一個同樣名稱的標籤"flower"，讓兩個元素同時移動。
        },

    });




});






