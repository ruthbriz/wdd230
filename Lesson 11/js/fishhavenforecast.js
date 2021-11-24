const forecast = "https://api.openweathermap.org/data/2.5/forecast?q=Fish Haven&units=imperial&appid=94c91cdf1598c682eab6d60fbe9ff1bf";
fetch(forecast)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);

  const daynames = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const monday = daynames[jsObject.list[0].dt_txt];
  document.getElementById("mon").textContent = monday;
  document.getElementById('day1').textContent = jsObject.list[0].main.temp;
  const weather1 = 'https://openweathermap.org/img/wn/' + jsObject.list[0].weather[0].icon + '@2x.png';
  document.getElementById('weather1').setAttribute('src', weather1);

  const tuesday = daynames[jsObject.list[1].dt_txt];
  document.getElementById("mon").textContent = tuesday;
  document.getElementById('day2').textContent = jsObject.list[1].main.temp;
  const weather2 = 'https://openweathermap.org/img/wn/' + jsObject.list[1].weather[0].icon + '@2x.png';
  document.getElementById('weather2').setAttribute('src', weather2);

  const wednesday = daynames[jsObject.list[2].dt_txt];
  document.getElementById("mon").textContent = wednesday;
  document.getElementById('day3').textContent = jsObject.list[2].main.temp;
  const weather3 = 'https://openweathermap.org/img/wn/' + jsObject.list[2].weather[0].icon + '@2x.png';
  document.getElementById('weather3').setAttribute('src', weather3);

  const thursday = daynames[jsObject.list[3].dt_txt];
  document.getElementById("mon").textContent = thursday;
  document.getElementById('day4').textContent = jsObject.list[3].main.temp;
  const weather4 = 'https://openweathermap.org/img/wn/' + jsObject.list[3].weather[0].icon + '@2x.png';
  document.getElementById('weather4').setAttribute('src', weather4);

  const friday = daynames[jsObject.list[4].dt_txt];
  document.getElementById("mon").textContent = friday;
  document.getElementById('day5').textContent = jsObject.list[4].main.temp;
  const weather5 = 'https://openweathermap.org/img/wn/' + jsObject.list[4].weather[0].icon + '@2x.png';
  document.getElementById('weather5').setAttribute('src', weather5);
  });