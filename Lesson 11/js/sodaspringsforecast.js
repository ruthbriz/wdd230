const forecast = "https://api.openweathermap.org/data/2.5/forecast?q=Soda Springs&units=imperial&appid=94c91cdf1598c682eab6d60fbe9ff1bf";
fetch(forecast)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);


  document.getElementById('day1').textContent = jsObject.list[0].main.temp;
  const weather1 = 'https://openweathermap.org/img/wn/' + jsObject.list[0].weather[0].icon + '@2x.png';
  document.getElementById('weather1').setAttribute('src', weather1);

  document.getElementById('day2').textContent = jsObject.list[1].main.temp;
  const weather2 = 'https://openweathermap.org/img/wn/' + jsObject.list[1].weather[0].icon + '@2x.png';
  document.getElementById('weather2').setAttribute('src', weather2);


  document.getElementById('day3').textContent = jsObject.list[2].main.temp;
  const weather3 = 'https://openweathermap.org/img/wn/' + jsObject.list[2].weather[0].icon + '@2x.png';
  document.getElementById('weather3').setAttribute('src', weather3);


  document.getElementById('day4').textContent = jsObject.list[3].main.temp;
  const weather4 = 'https://openweathermap.org/img/wn/' + jsObject.list[3].weather[0].icon + '@2x.png';
  document.getElementById('weather4').setAttribute('src', weather4);


  document.getElementById('day5').textContent = jsObject.list[4].main.temp;
  const weather5 = 'https://openweathermap.org/img/wn/' + jsObject.list[4].weather[0].icon + '@2x.png';
  document.getElementById('weather5').setAttribute('src', weather5);
  });