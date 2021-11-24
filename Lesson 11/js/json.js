const towndata = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(towndata)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);

const towns = jsonObject['towns'];

for (i = 0; i < 1; i++) {

    let sodasprings = document.createElement('section');
    let sodaname = document.createElement('h2');
    let sodamotto = document.createElement('p');
    let sodayear = document.createElement('p');
    let sodapopulation = document.createElement('p');
    let sodaannualrain = document.createElement('p');

    sodaname.textContent = towns[0].name;
    sodamotto.textContent = '"' + towns[0].motto + '"';
    sodayear.textContent = 'Year Founded: ' + towns[0].yearFounded;
    sodapopulation.textContent = 'Population: ' + towns[0].currentPopulation;
    sodaannualrain.textContent = 'Annual Rain Fall: ' + towns[0].averageRainfall;

    sodasprings.appendChild(sodaname);
    sodasprings.appendChild(sodamotto);
    sodasprings.appendChild(sodayear);
    sodasprings.appendChild(sodapopulation);
    sodasprings.appendChild(sodaannualrain);

    document.querySelector('div.sodasprings').appendChild(sodasprings);

    let fishhaven = document.createElement('section');
    let fishname = document.createElement('h2');
    let fishmotto = document.createElement('p');
    let fishyear = document.createElement('p');
    let fishpopulation = document.createElement('p');
    let fishannualrain = document.createElement('p');

    fishname.textContent = towns[2].name;
    fishmotto.textContent = '"' + towns[2].motto + '"';
    fishyear.textContent = 'Year Founded: ' + towns[2].yearFounded;
    fishpopulation.textContent = 'Population: ' + towns[2].currentPopulation;
    fishannualrain.textContent = 'Annual Rain Fall: ' + towns[2].averageRainfall;

    fishhaven.appendChild(fishname);
    fishhaven.appendChild(fishmotto);
    fishhaven.appendChild(fishyear);
    fishhaven.appendChild(fishpopulation);
    fishhaven.appendChild(fishannualrain);

    document.querySelector('div.fishhaven').appendChild(fishhaven);
    
    let preston = document.createElement('section');
    let prestonname = document.createElement('h2');
    let prestonmotto = document.createElement('p');
    let prestonyear = document.createElement('p');
    let prestonpopulation = document.createElement('p');
    let prestonannualrain = document.createElement('p');

    prestonname.textContent = towns[6].name;
    prestonmotto.textContent = '"' + towns[6].motto + '"';
    prestonyear.textContent = 'Year Founded: ' + towns[6].yearFounded;
    prestonpopulation.textContent = 'Population: ' + towns[6].currentPopulation;
    prestonannualrain.textContent = 'Annual Rain Fall: ' + towns[6].averageRainfall;

    preston.appendChild(prestonname);
    preston.appendChild(prestonmotto);
    preston.appendChild(prestonyear);
    preston.appendChild(prestonpopulation);
    preston.appendChild(prestonannualrain);

    document.querySelector('div.preston').appendChild(preston);

}
});