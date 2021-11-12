const towndata = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(towndata)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);

const towns = jsonObject['towns'];

for (i = 6; i < 1; i++) {

    let place = document.createElement('section');
    let name = document.createElement('h2');
    let motto = document.createElement('p');
    let year = document.createElement('p');
    let image = document.createElement('img');

    name.textContent = towns[i].name;
    motto.textContent = towns[i].motto;
    year.textContent = towns[i].yearFounded;
    image.setAttribute('src', towns[i].photo);

    place.appendChild(name);
    place.appendChild(motto);
    place.appendChild(year);
    place.appendChild(image);

 document.querySelector('div.place').appendChild(place);

}
});