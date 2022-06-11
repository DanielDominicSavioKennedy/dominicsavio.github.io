const x = document.getElementById("obj");
const text = document.getElementById("c");



function q() {
    var today = new Date();
    var date = today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear();
    var hourNow = today.getHours();
    var asd = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var greeting;
    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow >= 12) {
        greeting = ' Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome! ';
    }
    text.innerHTML = `<h3 class="b">  ${greeting} <br>  Date:    ${date}  <br>  Time:   ${asd}  </ h3 >`;

}

function setRotattion() {
    let now = new Date();
    var hour = now.getHours();
    var pos = (hour / 12 * 360);
    x.style.transform = `rotate(${pos}deg)`;
}

//q();

var interval2 = setInterval(q, 1000);
var interval1 = setInterval(setRotattion, 10000);
//setRotattion();