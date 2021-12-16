const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Sta. Barbara,PH&units=imperial&appid=94c91cdf1598c682eab6d60fbe9ff1bf";
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
  
  document.getElementById('current').textContent = jsObject.weather[0].main;
  document.getElementById('high').textContent = jsObject.main.temp;
  document.getElementById('humidity').textContent = jsObject.main.humidity;

  document.querySelector(".closebtn").addEventListener("click", function () {
    this.closest(".alert").remove();
    });
    
  let current = document.getElementById('current');
    if(current != "Clouds") {
    const banner = document.querySelector("#banner")
    banner.remove()
    }
  });