const forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=94c91cdf1598c682eab6d60fbe9ff1bf";
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