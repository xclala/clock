function getnow() {
    //获得当前时间，格式化时间
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let week = new Date().getDay();
    let date = now.getDate();
    let hour = now.getHours();
    if (hour < 10) {
        hour = "0" + hour;
    }
    let minute = now.getMinutes();
    if (minute < 10) {
        minute = "0" + minute;
    }
    let second = now.getSeconds();
    if (second < 10) {
        second = "0" + second;
    }
    switch (week) {
        case 0:
            week = "星期日";
            break;
        case 1:
            week = "星期一";
            break;
        case 2:
            week = "星期二";
            break;
        case 3:
            week = "星期三";
            break;
        case 4:
            week = "星期四";
            break;
        case 5:
            week = "星期五";
            break;
        case 6:
            week = "星期六";
            break;
    }
    let nowstr = year + "年" + month + "月" + date + "日 " + hour + ":" + minute + ":" + second + " " + week;
    //显示时间
    document.getElementById("nowspan").innerHTML = nowstr;
    //使时间动起来
    setTimeout("getnow()", 1000);
}