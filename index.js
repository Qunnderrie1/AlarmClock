var timeText = document.getElementById('timeText');
var alarmSetUpText = document.getElementById('alarmSetUpText')
var setBtn = document.getElementById('setBtn')
const audio = new Audio ('./mixkit-warning-alarm-buzzer-991.wav')
audio.loop = true;
var alarmTime = null;
var alarmTimeout = null;

// Create a function to update the time 
function updateTime(){
    var date = new Date().toLocaleTimeString();
    timeText.textContent = date
}

// Create a function to set alarm
function setAlarm(){

    if(alarmTime){
        const current = new Date();
        console.log("Current Time:" + current)
        const timeToAlarm = new Date(alarmTime);
        console.log("Time To Alarm Time:" + timeToAlarm)
        if(timeToAlarm > current){
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout)
        }
        alarmSetUpText.textContent = "Alarm has been set to: "  + timeToAlarm.toLocaleTimeString()

    }
}
// Create a function to get the user alarm time
function setAlarmTime(value){
    alarmTime = value
}

// Create a function to clear alarm
function clearAlarm(){
    audio.pause();

    if(alarmTimeout){
        clearInterval(alarmTimeout);
        alarmSetUpText.textContent = "Set Alarm Clock For: ";

    }
}
setInterval(updateTime , 1000)