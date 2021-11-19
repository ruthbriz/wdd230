const forecast = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=94c91cdf1598c682eab6d60fbe9ff1bf";
fetch(forecast)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);

  document.getElementById('day1').textContent = jsObject.list[0].main.temp;
  const image1 = jsObject.list[0].weather[0].icon;
  document.getElementById('weather1').setAttribute('src', image1);
  });