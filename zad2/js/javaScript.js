let secendButton = document.getElementById("secend-button");
let text2 = document.getElementById("text-2");
let firstButton = document.getElementById("first-button");
let text1 = document.getElementById("text-1");

firstButton.addEventListener(
    "mouseover",
    function () {
        if (text1.style.display == "block") {
            text1.style.display = "none";
        } else {
            text1.style.display = "block";
            text2.style.display = "none";
        }
    },
    false
);

secendButton.addEventListener(
    "mouseover",
    function () {
        if (text2.style.display == "block ") {
            text2.style.display = "none";
        } else {
            text2.style.display = "block";
            text1.style.display = "none";
        }
    },
    false
);
