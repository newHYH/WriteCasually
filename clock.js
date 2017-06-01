/* 
* @Author: hyh
* @Date:   2017-06-01 15:58:18
* @Last Modified: hyh 2017-06-01 16:41:13
*/
var scaleDivs = document.querySelectorAll(".scale div");
for(var i = 0;i<scaleDivs.length;i++){
    scaleDivs[i].style.transform = "rotate("+i * 30 +"deg)";
    scaleDivs[i].firstChild.style.transform = "rotate(" + (-i * 30) + "deg)";
}
var hourDiv = document.getElementsByClassName("hour")[0];
var minuteDiv = document.getElementsByClassName("minute")[0];
var secondDiv = document.getElementsByClassName("second")[0];


function setRotate(){
    var date = new Date();
    var hour = date.getHours()%12;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if(second == 60){
        second = 0;
        minute++;
        if(minute == 60){
            minute = 0;
            hour++;
            if(hour == 13){
                hour = 0;
            }
        }
    }
    //一小时30度，一分钟是30/60min = 0.5度/分钟；
    hourDiv.style.transform = "rotate(" + (hour*30 + minute*0.5) + "deg)";
    minuteDiv.style.transform = "rotate(" + minute*6 + "deg)";
    secondDiv.style.transform = "rotate(" + second*6 + "deg)";
}
setRotate();
var timer = setInterval(function(){
    setRotate();
}, 1000)