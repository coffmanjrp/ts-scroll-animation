"use strict";
var boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);
checkBoxes();
function checkBoxes() {
    var triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach(function (box) {
        var boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    });
}
