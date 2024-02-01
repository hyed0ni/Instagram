document.addEventListener("DOMContentLoaded", function() {

    setTimeout(function() {

        // 더 보기 메뉴 클릭 시 더 보기 창 display: flex 로 변경
        document.querySelector(".aside footer > div:last-child").addEventListener("click", function() {
            document.querySelector(".aside .detail-window").style.display = "flex";
        });

        // 검색 아이콘 -> 검색 내용 삭제 아이콘
        document.querySelector(".aside .search-window .input .text").addEventListener("click", function() {
            document.querySelector(".aside .search-window .input > div > div:first-child").style.display = "none";
            document.querySelector(".aside .search-window .input > div > div:last-child").style.display = "block";
        });

        // 최근 검색 항목 -> 검색 목록
        document.querySelector(".aside .search-window .input .text").addEventListener("click", function() {
            document.querySelector(".aside .search-window hr").style.display = "none";
            document.querySelector(".aside .recently").style.display = "none";
            document.querySelector(".aside .search-list").style.display = "block";
        });

    },300)

})