document.addEventListener("DOMContentLoaded", function() {

    setTimeout(function() {

        // 더 보기 메뉴 클릭 시 더 보기 창 display: flex 로 변경
        document.querySelector(".aside footer > div:last-child").addEventListener("click", function() {
            document.querySelector(".aside .detail-window").style.display = "flex";
        });

    },300)

})