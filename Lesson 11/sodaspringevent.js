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
    let sodaeventone = document.createElement('p');
    let sodaeventtwo = document.createElement('p');
    let sodaeventthree = document.createElement('p');

    sodaeventone.textContent = towns[0].events[0];
    sodaeventtwo.textContent = towns[0].events[1];
    sodaeventthree.textContent = towns[0].events[2];

    town.appendChild(sodaeventone);
    town.appendChild(sodaeventtwo);
    town.appendChild(sodaeventthree);

    document.querySelector('div.town').appendChild(town);

}
});