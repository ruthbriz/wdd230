const towndata = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(towndata)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);

const towns = jsonObject['towns'];

for (i = 0; i < 3; i++) {

    let place = document.createElement('section');
    let name = document.createElement('h2');
    let motto = document.createElement('p');
    let year = document.createElement('p');

    name.textContent = towns[0].name;
    motto.textContent = '"' + towns[0].motto + '"';
    year.textContent = 'Year Founded: ' + towns[0].yearFounded;
    name.textContent = towns[1].name;
    motto.textContent = '"' + towns[1].motto + '"';
    year.textContent = 'Year Founded: ' + towns[1].yearFounded;

    place.appendChild(name);
    place.appendChild(motto);
    place.appendChild(year);

 document.querySelector('div.place').appendChild(place);

}
});