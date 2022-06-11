const x = document.getElementById("sun");
const text = document.getElementById("c");

let now = new Date();

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
    var hour = now.getSeconds();
    var pos = (hour / 60 * 360);
    x.style.transform = `rotate(${pos}deg)`;
}

q();
setRotattion();