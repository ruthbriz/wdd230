const forecast = "https://api.openweathermap.org/data/2.5/forecast?q=Sta. Barbara, PH&units=imperial&appid=94c91cdf1598c682eab6d60fbe9ff1bf";
fetch(forecast)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);

  const daynames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const one = new Date(jsObject.list[0].dt_txt);
  const two = new Date(jsObject.list[8].dt_txt);
  const three = new Date(jsObject.list[16].dt_txt);

  const dateone = daynames[one.getDay()];
  const datetwo = daynames[two.getDay()];
  const datethree = daynames[three.getDay()];

  document.getElementById('mon').textContent = dateone;
  document.getElementById('day1').textContent = jsObject.list[0].main.temp;
  const weather1 = 'https://openweathermap.org/img/wn/' + jsObject.list[0].weather[0].icon + '@2x.png';
  document.getElementById('weather1').setAttribute('src', weather1);

  document.getElementById('tue').textContent = datetwo;
  document.getElementById('day2').textContent = jsObject.list[8].main.temp;
  const weather2 = 'https://openweathermap.org/img/wn/' + jsObject.list[4].weather[0].icon + '@2x.png';
  document.getElementById('weather2').setAttribute('src', weather2);

  document.getElementById('wed').textContent = datethree;
  document.getElementById('day3').textContent = jsObject.list[16].main.temp;
  const weather3 = 'https://openweathermap.org/img/wn/' + jsObject.list[16].weather[0].icon + '@2x.png';
  document.getElementById('weather3').setAttribute('src', weather3);
  });