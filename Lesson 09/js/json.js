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
    let sodasprings = document.createElement('h2');
    let sodamotto = document.createElement('p');
    let sodayear = document.createElement('p');
    let sodaimage = document.createElement('img');

    sodasprings.textContent = towns[i].name;
    sodamotto.textContent = towns[i].motto;
    sodayear.textContent = towns[i].yearFounded;
    sodaimage.setAttribute('src', towns[i].photo);

    place.appendChild(sodasprings);
    place.appendChild(sodamotto);
    place.appendChild(sodayear);
    place.appendChild(sodaimage);

 document.querySelector('div.place').appendChild(place);

}
});