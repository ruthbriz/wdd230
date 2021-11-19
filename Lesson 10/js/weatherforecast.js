const forecast = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=94c91cdf1598c682eab6d60fbe9ff1bf";
fetch(forecast)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);

   const dayName =  [jsObject.list[0].dt_txt];
    document.getElementById('mon').textContent = dayName;
  document.getElementById('day1').textContent = jsObject.list[0].main.temp;
  const image1 = 'http://openweathermap.org/img/wn/10n@2x.png';
  document.getElementById('weather1').setAttribute('src', image1);

  document.getElementById('day2').textContent = jsObject.list[1].main.temp;
  const image2 = 'http://openweathermap.org/img/wn/04d@2x.png';
  document.getElementById('weather2').setAttribute('src', image2);

  document.getElementById('day3').textContent = jsObject.list[2].main.temp;
  const image3 = 'http://openweathermap.org/img/wn/13d@2x.png';
  document.getElementById('weather3').setAttribute('src', image3);

  document.getElementById('day4').textContent = jsObject.list[3].main.temp;
  const image4 = 'http://openweathermap.org/img/wn/13d@2x.png';
  document.getElementById('weather4').setAttribute('src', image4);

  document.getElementById('day5').textContent = jsObject.list[4].main.temp;
  const image5 = 'http://openweathermap.org/img/wn/10d@2x.png';
  document.getElementById('weather5').setAttribute('src', image5);
  });