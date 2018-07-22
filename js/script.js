window.onload = function () {
    var oClock = document.getElementById('clock');
    var aImg = oClock.getElementsByClassName('num');

    function toNum(number) {
        if (number < 10) {
            return '0' + number;
        }
        else {
            return "" + number;
        }
    };

    function tick() {
        var time = new Date();
        var time1 = toNum(time.getFullYear()) + toNum(time.getMonth() + 1)
            + toNum(time.getDate()) + toNum(time.getHours())
            + toNum(time.getMinutes()) + toNum(time.getSeconds());
        for (var i = 0; i < aImg.length; i++) {
            aImg[i].src = 'images/' + time1[i] + '.png';
        }
        aImg.innerHTML = time1;
    };

    window.setInterval(tick, 100);
    tick();

    var day = new Date().getDay();
    var week_pic = new Array();
    var i = 0;
    i++;
    switch (day) {
        case 0:
            week_pic[i] = "./images/seven.png";
            break;
        case 1:
            week_pic[i] = "./images/one.png";
            break;
        case 2:
            week_pic[i] = "./images/two.png";
            break;
        case 3:
            week_pic[i] = "./images/three.png";
            break;
        case 4:
            week_pic[i] = "./images/four.png";
            break;
        case 5:
            week_pic[i] = "./images/five.png";
            break;
        case 6:
            week_pic[i] = "./images/six.png";
            break;
    };
    document.getElementById('week').src = week_pic[day];
};





