"use strict"

function updateTime(){
    // set the date to today
    let today = new Date();
    // using the variable today set variable date to: M - D - YYYY
    let date = (today.getMonth()+1) + " - " + today.getDate() + " - " + today.getFullYear();
    // using the variable today set variable time to: H:M:S
    let hour = "0" + today.getHours().toString()
    let minute = "0" + today.getMinutes().toString()
    let second = "0" + today.getSeconds().toString()
    let time = hour.slice(-2) + ":" +  minute.slice(-2) + ":" + second.slice(-2);


    document.getElementById("demo").innerHTML = time;
}


