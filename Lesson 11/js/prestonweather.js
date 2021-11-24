let t = document.querySelector("high");
let s = document.querySelector("windspeed");

if (t <= 10 && s >= 4.8 || t <= 50 && s >= 3.0){
let f = 35.74+(0.6215*t)-35.75*(Math.pow(s,0.16))+0.4275*(t*Math.pow(s, 0.16));
document.getElementById("windchill").innerHTML = f + " °C";
}
else {
document.getElementById("windchill").innerHTML = "N/A!";
}
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=94c91cdf1598c682eab6d60fbe9ff1bf";
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  
  document.getElementById('current').textContent = jsObject.weather[0].main;
  document.getElementById('high').textContent = jsObject.main.temp;
  document.getElementById('humidity').textContent = jsObject.main.humidity;
  document.getElementById('windspeed').textContent = jsObject.wind.speed;
  });