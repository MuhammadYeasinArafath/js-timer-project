//timeNow section.

setInterval(func, 1000);

function func(){
    let d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
    document.getElementById("date").innerHTML = d.toLocaleDateString();
    document.getElementById("all").innerHTML = d.toString();
}
func();

//stop watch section.

window.onload = function(){
    var seconds = 00;
    var tens = 00;
    var OutputSeconds = document.getElementById("second");
    var OutputTens = document.getElementById("tens");
    var buttonStart = document.getElementById("btn-start");
    var buttonStop = document.getElementById("btn-stop");
    var buttonReset = document.getElementById("btn-reset");
    var Interval;

    buttonStart.addEventListener('click', () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);  // millisecond 10 = 0.01 second
    });

    buttonStop.addEventListener('click', () => {
        clearInterval(Interval);
    });

    buttonReset.addEventListener('click', () => {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        OutputSeconds.innerHTML = seconds;
        OutputTens.innerHTML = tens;
    });

    function startTimer(){
        tens++;
        if(tens <= 9){
            OutputTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            OutputTens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            OutputSeconds.innerHTML = "0" + seconds;
            tens = 0;
            OutputTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            OutputSeconds.innerHTML = seconds;
        }
    }
}


//count down section.


var countDownDate = new Date("january 1, 3050").getTime();
var x =setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;


        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);



        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;

        if(distance < 0){
                 document.getElementById('days').innerHTML = days;
                 document.getElementById('hours').innerHTML = hours;
                 document.getElementById('minutes').innerHTML = minutes;
                 document.getElementById('seconds').innerHTML = seconds;
        }




},1000);








