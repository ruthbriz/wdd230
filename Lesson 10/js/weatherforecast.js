const forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=94c91cdf1598c682eab6d60fbe9ff1bf";
fetch(forecast)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);

  const daynames = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const dayNames = daynames[jsObject.list[0].dt_txt];
  document.getElementById("mon").textContent = dayNames;
  document.getElementById('day1').textContent = jsObject.list[0].main.temp;
  const weather1 = 'http://openweathermap.org/img/wn/' + jsObject.list[0].weather[0].icon + '@2x.png';
  document.getElementById('weather1').setAttribute('src', weather1);

  document.getElementById('day2').textContent = jsObject.list[1].main.temp;
  const weather2 = 'http://openweathermap.org/img/wn/' + jsObject.list[1].weather[0].icon + '@2x.png';
  document.getElementById('weather2').setAttribute('src', weather2);

  document.getElementById('day3').textContent = jsObject.list[2].main.temp;
  const weather3 = 'http://openweathermap.org/img/wn/' + jsObject.list[2].weather[0].icon + '@2x.png';
  document.getElementById('weather3').setAttribute('src', weather3);

  document.getElementById('day4').textContent = jsObject.list[3].main.temp;
  const weather4 = 'http://openweathermap.org/img/wn/' + jsObject.list[3].weather[0].icon + '@2x.png';
  document.getElementById('weather4').setAttribute('src', weather4);

  document.getElementById('day5').textContent = jsObject.list[4].main.temp;
  const weather5 = 'http://openweathermap.org/img/wn/' + jsObject.list[4].weather[0].icon + '@2x.png';
  document.getElementById('weather5').setAttribute('src', weather5);
  });