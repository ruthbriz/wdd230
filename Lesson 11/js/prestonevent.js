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
    let prestoneventone = document.createElement('p');
    let prestoneventtwo = document.createElement('p');
    let prestoneventthree = document.createElement('p');

    prestoneventone.textContent = towns[6].events[0];
    prestoneventtwo.textContent = towns[6].events[1];
    prestoneventthree.textContent = towns[6].events[2];

    town.appendChild(prestoneventone);
    town.appendChild(prestoneventtwo);
    town.appendChild(prestoneventthree);

    document.querySelector('div.town').appendChild(town);

}
});