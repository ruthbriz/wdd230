
let t = document.querySelector("temp");
let s = document.querySelector("windspeed");

if (t <= 10 && s >= 4.8){
let f = 35.74+(0.6215*t)-35.75*(Math.pow(s,0.16))+0.4275*(t*Math.pow(s, 0.16));
document.getElementById("windchill").innerHTML = f + " °F";
}
else {
document.getElementById("windchill").innerHTML = "N/A!";
}