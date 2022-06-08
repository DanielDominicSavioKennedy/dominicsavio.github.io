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
    document.write(' <h3 class="b">' + greeting + '<br>' + 'Date:  ' + date + '<br>' + 'Time:  ' + asd + ' </ h3 > ');

}
q();




//window.alert("enter ok to continue");window.print();
/*for (let i =0;i<10;i++) {
    var now = new Date();
    document.write(now.getMilliseconds()+ "<br>");
}*/

function setRotattion() {
    var x = document.querySelector("#sun");
    var hour = now.getSeconds();
    var pos = (hour / 60 * 360);
    x.style.transform = "rotate(90deg)";
}

setRotattion();