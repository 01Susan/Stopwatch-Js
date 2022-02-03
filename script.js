// Firstly we are fetching the buttons

let [miliseconds,seconds,minutes,hours] = [0,0,0,0];
let int = null;
const refTimer = document.getElementById('displaytimer');
const starttimer = document.getElementById('start');
const pausetimer = document.getElementById('pause');
const resettimer = document.getElementById('reset');


starttimer.addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
    console.log(int);
});

pausetimer.addEventListener('click',()=>{
    clearInterval(int);
    console.log(int);

});

resettimer.addEventListener('click',()=>{
    clearInterval(int);
    [miliseconds,seconds,minutes,hours] =[0,0,0,0];
    refTimer.innerHTML = "00 : 00 : 00 : 000";
    console.log(int);

});

function displayTimer(){
    miliseconds+=10;
    if(miliseconds == 1000){
        miliseconds =0;
        seconds++;
        if(seconds == 60){
            seconds =0;
            minutes++;
            if(minutes  == 60){
                minutes =0;
                hours++
            }
        }
    }
let h = hours<10? "0"+hours : hours;
let m = minutes<10? "0"+minutes : minutes;
let s = seconds<10? "0"+seconds :seconds;
let ms = miliseconds<10?"00"+miliseconds:miliseconds <100?"0"+miliseconds: miliseconds;

refTimer.innerHTML =`${h} : ${m} : ${s} : ${ms}`;
}