let wakeUp = 7;
let lunch = 12;
let bedTime = lunch + 9;
let clickTime;
let noon = 12;
let evening = 17;


let showCurrentTime = function(){
    let clock = document.getElementById("clock");
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";

    // Setting hours
    if (hours >= noon) {
        meridian = "PM";
    }
    if (hours > noon){
        hours = hours - 12;
    }

    // Setting minutes
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    // Setting seconds
    if (seconds < 10){
        seconds = "0" + seconds;
    }

    let clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;

    // display the time on the webpage
    clock.innerText = clockTime;
};
// Getting the clock to modify messages and images 
let updatedClock = function(){
    let time = new Date().getHours();
    let imageText;
    let image = document.getElementById("dogImage");

    let timeEventJS = 
    document.getElementById("timeEvent");

    if (time == clickTime){
        image = document.getElementById("dog").innerHTML = "<img src = './img/birthday.jpg' />"; 
        imageText = "Happy Birthday to you!!";
        document.getElementById("birthdaysong").play();
    }
    else if ( time == wakeUp){
        image = document.getElementById("dog").innerHTML = "<img src ='./img/wakeup.jpg' />";
        imageText = "Wake Up!!";

    }
    else if ( time == lunch){
        image = document.getElementById("dog").innerHTML = "<img src ='./img/lunch.jpg' />";
        imageText = "Let's get lunch";

    }
    else if ( time == bedTime){
        image = document.getElementById("dog").innerHTML = "<img src ='./img/two.jpg' />";
        imageText = "Sweet dreams";
        bedTimeEvent();

    }
    else if ( time < noon){
        image = document.getElementById("dog").innerHTML = "<img src ='./img/one.jpg' />";
        imageText = "Good morning";

    }
    else if ( time >= evening){
        image = document.getElementById("dog").innerHTML = "<img src ='./img/gevening.jpg' />";
        imageText = "Good evening";

    }
    else { 
        image =  document.getElementById("dog").innerHTML = "<img src ='./img/gafternoon.jpg' />";
        imageText = "Good afternoon";
    } 
    // getting the audio to play
    
    console.log(imageText);
    timeEventJS.innerText = imageText;
    
    showCurrentTime();
};
updatedClock();
// Getting the clock to tick-tock per second
let perSecond = 1000;
setInterval(updatedClock, perSecond);

// Activating the click btn (click time) to work
let clickBtn = document.getElementById("clickButton");

let clickEvent = function(){
    if(clickTime < 0){
        clickTime = new Date().getHours();
        clickButton.innerText = "Event Over";
        clickButton.style.backgroundColor = "cornsilk";
    }
    else{ 
        clickTime = -1;
        clickButton.innerText = "Happy Birthday";
        clickButton.style.backgroundColor = "green";
    }

};

clickBtn.addEventListener("click", clickEvent);
clickEvent();

// Activating the wakeUp selector
let wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

let wakeUpEvent = function(){
    wakeUp = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);



// Activating the lunch selector
let lunchTimeSelector = document.getElementById("lunchTimeSelector");
let lunchEvent = function(){
    lunch = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener("change", lunchEvent);


// Activating the bedTime selector
let bedTimeSelector = document.getElementById("bedTimeSelector");
let bedTimeEvent = function(){
    bedTime = bedTimeSelector.value;
};
bedTimeSelector.addEventListener("change", bedTimeEvent);
