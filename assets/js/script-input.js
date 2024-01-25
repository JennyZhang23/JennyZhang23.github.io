var t = 0;
function myFunction() {
    var x = document.getElementById("frm1");
    hr = x.elements[0].value;
    min = x.elements[1].value;
    sec = x.elements[2].value;

    window.t = hr*3600 + min*60+sec;
    window.per = window.t;
    //document.getElementById("demo").innerHTML = hr*3600 + min*60+sec;
    timer();
}
function timer(){
    var temp = window.t;
    window.t = window.t-1;
    var h = Math.floor(temp/3600);
    var m = Math.floor((temp%3600)/60);
    var s = Math.floor((temp - h*3600 - m*60));
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("demo").innerHTML = h + ":" + m + ":" + s;

document.getElementById("progress-bar").style.willChange = "width, height";
document.getElementById("progress-bar").style.transition = "width 3s, height 3s";

   document.getElementById("progress-bar").style.width = (temp*100)/(window.per) + "%";
    document.getElementById("progress-bar").style.height = (temp*100)/(window.per) + "%";

    //document.getElementById("progress-bar").style.width = (temp*100)/(window.per) + "%";

    var t = setTimeout(timer,1000);

    if(temp<10){
        document.getElementById("progress-bar").style.backgroundColor = "red";
        document.getElementById("progress").style.borderColor = "red";
    }
    if (temp <0) {
        clearInterval(t);
        document.getElementById("demo").innerHTML = "EXPIRED";
        document.getElementById("demo").style.color = "red";
    }
}
function checkTime(i){
    if (i<10) { i = "0" + i }
    return i;
}

