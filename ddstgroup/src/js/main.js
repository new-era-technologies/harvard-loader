'use strict';

//declare
const percentContainer = document.querySelectorAll('.progress__text'),
      prog1 = document.getElementById('prog1'),
      prog2 = document.getElementById('prog2'),
      prog3 = document.getElementById('prog3'),
      progress = document.querySelector('.progress'),
      progDone = document.querySelector('.progress--done'),
      report = document.querySelector('.report');
let percent = 0;


//animate content function
let animateElem = function (elem, condition) {
    elem.classList.add(condition);
    setTimeout(function () {
        elem.classList.add('show');
    }, 100);
}

//get percents and show/hide content
let percStatus = setInterval(function () {
    percent++;
    percentContainer.forEach(
        it => it.innerHTML = `${percent}%`
    )
    if (percent == 33) {
        animateElem(prog1, 'flex');
    }
    if (percent == 66) {
        animateElem(prog2, 'flex');
    }
    if (percent == 100) {
        animateElem(prog3, 'flex');
        clearInterval(percStatus);
        setTimeout(function () {
            progress.style.display = 'none';
            animateElem(progDone, 'block');
            animateElem(report, 'block');
        }, 1000);
    }
}, 20);
