const towndata = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(towndata)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);

const towns = jsonObject['towns'];

for (i = 0; i < 1; i++) {

    let town = document.createElement('div')
    let fisheventone = document.createElement('p');
    let fisheventtwo = document.createElement('p');
    let fisheventthree = document.createElement('p');
    let fisheventfour = document.createElement('p');

    fisheventone.textContent = towns[2].events[0];
    fisheventtwo.textContent = towns[2].events[1];
    fisheventthree.textContent = towns[2].events[2];
    fisheventfour.textContent = towns[2].events[3];

    town.appendChild(fisheventone);
    town.appendChild(fisheventtwo);
    town.appendChild(fisheventthree);
    town.appendChild(fisheventfour);

    document.querySelector('div.town').appendChild(town);

}
});