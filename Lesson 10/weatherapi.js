const apiURL = "https://api.openweathermap.org/94c91cdf1598c682eab6d60fbe9ff1bf";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });