function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById("currentdate").textContent = fulldate;

document.querySelector(".closebtn").addEventListener("click", function () {
	this.closest(".alert").remove();
  });
  
  const friday = new Date();
  if(friday.getDay() != 5) {
	const banner = document.querySelector("#banner")
	banner.remove()
  }

const forecast = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=94c91cdf1598c682eab6d60fbe9ff1bf";
fetch(forecast)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  
  document.getElementById('day1').textContent = jsObject.list[0].main.temp;

  document.getElementById('day2').textContent = jsObject.list[1].main.temp;

  document.getElementById('day3').textContent = jsObject.list[2].main.temp;

  document.getElementById('day4').textContent = jsObject.list[3].main.temp;

  document.getElementById('day5').textContent = jsObject.list[4].main.temp;
  });
  
  
let t = document.querySelector("high");
let s = document.querySelector("windspeed");

if (t <= 10 && s >= 4.8){
let f = 35.74+(0.6215*t)-35.75*(Math.pow(s,0.16))+0.4275*(t*Math.pow(s, 0.16));
document.getElementById("windchill").innerHTML = f + " °F";
}
else {
document.getElementById("windchill").innerHTML = "N/A!";
}

const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=94c91cdf1598c682eab6d60fbe9ff1bf";
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  
  document.getElementById('current').textContent = jsObject.weather[0].main;
  document.getElementById('high').textContent = jsObject.main.temp;
  document.getElementById('humidity').textContent = jsObject.main.humidity;
  document.getElementById('windspeed').textContent = jsObject.wind.speed;
  });