const forecast = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=94c91cdf1598c682eab6d60fbe9ff1bf";
fetch(forecast)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  });