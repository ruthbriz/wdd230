const towndata = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(towndata)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);

const towns = jsonObject['towns'];

for (i = 0; i < 3; i++) {

    let springsoda = document.createElement('section');
    let springname = document.createElement('h2');
    let springmotto = document.createElement('p');
    let springyear = document.createElement('p');

    springname.textContent = towns[0].name;
    springmotto.textContent = '"' + towns[0].motto + '"';
    springyear.textContent = 'Year Founded: ' + towns[0].yearFounded;

    springsoda.appendChild(springname);
    springsoda.appendChild(springmotto);
    springsoda.appendChild(springyear);

    let fishhaven = document.createElement('section');
    let fishname = document.createElement('h2');
    let fishmotto = document.createElement('p');
    let fishyear = document.createElement('p');

    fishname.textContent = towns[1].name;
    fishmotto.textContent = '"' + towns[1].motto + '"';
    fishyear.textContent = 'Year Founded: ' + towns[1].yearFounded;

    fishhaven.appendChild(fishname);
    fishhaven.appendChild(fishmotto);
    fishhaven.appendChild(fishyear);

 document.querySelector('div.place').appendChild(place);

}
});