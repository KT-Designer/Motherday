
$(document).ready(function () {
    // 浮動選單收合功能_PC
    $(".close").click(function () {
        $(".menu_pc").animate({ right: '-200' }, 600, function () {
            $(".open").animate({ right: '0' }, 500);
        });
    });

    $(".open").click(function () {
        $(".open").animate({ right: '-50' }, 600, function () {
            $(".menu_pc").animate({ right: '0' }, 700);
        });
    });



});



// 置頂鍵
window.onscroll = function () {
    var e = document.getElementById("scrolltop");
    if (!e) {
        e = document.createElement("a");
        e.id = "scrolltop";
        e.href = "#";
        document.body.appendChild(e);
    }
    e.style.display = document.documentElement.scrollTop > 300 ? "block" : "none";
    e.onclick = (ev) => {
        ev.preventDefault();
        document.documentElement.scrollTop = 0;
    };
};


// 浮動選單_監聽網頁滾動
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    var anchorLinks = document.getElementsByClassName('anchor-link');
    for (var i = 0; i < anchorLinks.length; i++) {
        var targetId = anchorLinks[i].firstChild.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
            var targetPosition = targetElement.offsetTop - 100; // 偏移量，根據需要自行調整

            if (scrollPosition >= targetPosition && scrollPosition < targetPosition + targetElement.offsetHeight) {
                // 將之前的活動錨點取消活動狀態
                var activeLinks = document.getElementsByClassName('anchor-link active');
                for (var j = 0; j < activeLinks.length; j++) {
                    activeLinks[j].classList.remove('active');
                }

                // 將目前滾動到的區塊的錨點設置為活動狀態
                anchorLinks[i].classList.add('active');
                anchorLinks[i].firstChild.classList.add('active');
            } else {
                // 若區塊滾動出視窗，則移除活動狀態
                anchorLinks[i].classList.remove('active');
                anchorLinks[i].firstChild.classList.remove('active');
            }
        }
    }
});