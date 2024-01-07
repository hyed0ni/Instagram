// 주요 채팅방 -> 요청된 메시지 채팅방
document.querySelector(".message .left > div:nth-child(2) .request").addEventListener("click", function() {
    document.querySelector(".message .left > div:nth-child(3) > div:first-child").style.display = "none";
    document.querySelector(".message .msg-request").style.display = "block";
});

// 요청된 메시지 채팅방 -> 주요 채팅방
document.querySelector(".message .left > div:nth-child(2) > div:first-child").addEventListener("click", function() {
    document.querySelector(".message .msg-request").style.display = "none";
    document.querySelector(".message .left > div:nth-child(3) > div:first-child").style.display = "block";
});

// 메시지 안내 문구 -> 메시지 내용
document.querySelector(".message .msg-room").addEventListener("click", function() {
    document.querySelector(".message .right-intro").style.display = "none";
    document.querySelector(".message .right-chat").style.display = "flex";
});

// 메시지 내용 -> 채팅방 상세 정보
document.querySelector(".message .chat-name > div:nth-child(3) > a").addEventListener("click", function() {
    document.querySelector(".message .right-chat").style.display = "none";
    document.querySelector(".message .right-info").style.display = "block";
});

// 채팅방 상세 정보 -> 메시지 내용
document.querySelector(".message .right-info > div:nth-child(1) a").addEventListener("click", function() {
    document.querySelector(".message .right-info").style.display = "none";
    document.querySelector(".message .right-chat").style.display = "flex";
});