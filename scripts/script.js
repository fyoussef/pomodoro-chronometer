let sec = 0;
let min = 0;

var chron;

function timer (){
    sec++

    if (sec == 59){
        sec = 0;
        min++
    }

    if(min == 25){
        alarmPlay()
        stp()
        sec = 0
    }

    var format = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec)

    document.getElementById("timer").innerText = format
}

function start () {
    
    chron = setInterval(() => {
        timer()
    },1000)

    document.getElementById("btn-start").classList.add("btn-none")
}

function stp(){
    clearInterval(chron)
    document.getElementById("btn-start").classList.remove("btn-none")

}

function reset(){
    clearInterval(chron)

    sec = 0;
    min = 0;

    document.getElementById("timer").innerText = "00:00"
    document.getElementById("btn-start").classList.remove("btn-none")

}

function alarmPlay(){
    let alarm = document.getElementById("alarm")

    alarm.play()
}