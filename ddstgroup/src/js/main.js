'use strict';

//declare
const percentContainer = document.querySelectorAll('.progress__text');
let percent = 0;

//get percents
let percStatus = setInterval( function() {
        percent++;
        percentContainer.forEach(
            it => it.innerHTML = `${percent}`
        )
        if (percent == 100) {
            clearInterval(percStatus);
        }
}, 10);

