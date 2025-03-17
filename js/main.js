var ul = document.getElementById("ul_nav");
var ul2 = document.getElementById("ul_2");
var li1 = document.getElementById("li_1");
var li2 = document.getElementById("li_2");
var li3 = document.getElementById("li_3");
var li4 = document.getElementById("li_4");


li1.onclick = function () {
    ul.style.background = "#4FD5D6";
}

li2.onclick = function () {
    ul.style.background = "#99CC99";
    li1.style.display = "none"
    ul2.style.gap = "220px"
}

li3.onclick = function () {
    ul.style.background = "orange";
    li3.style.height = "400px";
    li3.style.width = "400px";
}

li4.onclick = function(){
    location.reload();
}

