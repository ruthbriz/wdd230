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
    let fishname = document.createElement('h2');
    let fishmotto = document.createElement('p');
    let fishyear = document.createElement('p');

    fishname.textContent = towns[1].name;
    fishmotto.textContent = '"' + towns[1].motto + '"';
    fishyear.textContent = 'Year Founded: ' + towns[1].yearFounded;

    fishhaven.appendChild(fishname);
    fishhaven.appendChild(fishmotto);
    fishhaven.appendChild(fishyear);

    document.querySelector('div.fishhaven').appendChild(fishhaven);

}
});

}
});