const towndata = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(towndata)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);

const towns = jsonObject['towns'];

for (i = 2; i < 1; i++) {

    let fishhaven = document.createElement('section');
    let name = document.createElement('h2');
    let motto = document.createElement('p');
    let year = document.createElement('p');
    let image = document.createElement('img');

    name.textContent = towns[2].name;
    motto.textContent = towns[2].motto;
    year.textContent = towns[2].yearFounded;
    image.setAttribute('src', towns[2].photo);

    fishhaven.appendChild(name);
    fishhaven.appendChild(motto);
    fishhaven.appendChild(year);
    fishhaven.appendChild(image);

 document.querySelector('div.fishhaven').appendChild(fishhaven);

}
});