//Author: Yasin Alper Bingül

//Get the name infos
let firstName = prompt("What is your name?")
let surname = prompt("What is your surname?")

//Set the name infos
let myName = document.querySelector("#myName")
myName.innerHTML = `${firstName} ${surname}`

//Get the clock infos
let clock = document.querySelector("#myClock")
function timeUnit(){
    let date = new Date();
    let day = ["Sunday", "Monday", "Thursday", "Wednesday", "Tuesday", "Friday", "Saturday"]
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + day[date.getDay()];
}

//Set the clock infos
function showTime(){
    clock.innerHTML=timeUnit();    
    setTimeout(showTime,1000);
}


