$(document).ready(function () {
    $("#gnb").load("/HTML/gnb.html", function () {
        document.getElementById("gnb").classList.add("show");
    });
})