const towndata = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(towndata)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);

const towns = jsonObject['towns'];

for (i = 6; i < 1; i++) {

    let preston = document.createElement('section');
    let name = document.createElement('h2');
    let motto = document.createElement('p');
    let year = document.createElement('p');

    name.textContent = towns[i].name;
    motto.textContent = towns[i].motto;
    year.textContent = towns[i].yearFounded;

    preston.appendChild(name);
    preston.appendChild(motto);
    preston.appendChild(year);

 document.querySelector('div.preston').appendChild(preston);

}
});