"use strict";
var boxes = document.querySelectorAll('.box');
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
checkBoxes();
window.addEventListener('scroll', checkBoxes);
