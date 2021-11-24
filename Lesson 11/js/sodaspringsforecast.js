const forecast = "https://api.openweathermap.org/data/2.5/forecast?q=Soda Springs&units=imperial&appid=94c91cdf1598c682eab6d60fbe9ff1bf";
fetch(forecast)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  const daynames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const one = new Date(jsObject.list[0].dt_txt);
  const two = new Date(jsObject.list[4].dt_txt);
  const three = new Date(jsObject.list[12].dt_txt);
  const four = new Date(jsObject.list[20].dt_txt);
  const five = new Date(jsObject.list[28].dt_txt);

  const dateone = daynames[one.getDay()];
  const datetwo = daynames[two.getDay()];
  const datethree = daynames[three.getDay()];
  const datefour = daynames[four.getDay()];
  const datefive = daynames[five.getDay()];

  document.getElementById('mon').textContent = dateone;
  document.getElementById('day1').textContent = jsObject.list[0].main.temp;
  const weather1 = 'https://openweathermap.org/img/wn/' + jsObject.list[0].weather[0].icon + '@2x.png';
  document.getElementById('weather1').setAttribute('src', weather1);

  document.getElementById('tue').textContent = datetwo;
  document.getElementById('day2').textContent = jsObject.list[4].main.temp;
  const weather2 = 'https://openweathermap.org/img/wn/' + jsObject.list[4].weather[0].icon + '@2x.png';
  document.getElementById('weather2').setAttribute('src', weather2);

  document.getElementById('wed').textContent = datethree;
  document.getElementById('day3').textContent = jsObject.list[12].main.temp;
  const weather3 = 'https://openweathermap.org/img/wn/' + jsObject.list[12].weather[0].icon + '@2x.png';
  document.getElementById('weather3').setAttribute('src', weather3);

  document.getElementById('thur').textContent = datefour;
  document.getElementById('day4').textContent = jsObject.list[20].main.temp;
  const weather4 = 'https://openweathermap.org/img/wn/' + jsObject.list[20].weather[0].icon + '@2x.png';
  document.getElementById('weather4').setAttribute('src', weather4);

  document.getElementById('fri').textContent = datefive;
  document.getElementById('day5').textContent = jsObject.list[28].main.temp;
  const weather5 = 'https://openweathermap.org/img/wn/' + jsObject.list[28].weather[0].icon + '@2x.png';
  document.getElementById('weather5').setAttribute('src', weather5);
  });