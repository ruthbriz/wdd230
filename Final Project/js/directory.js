const data = "https://ruthbriz.github.io/wdd230/json/directory.json";

fetch(data)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const businesses = jsonObject['businesses'];

for (let i = 0; i < 1; i++ ) {

    let jmacks = document.createElement('section');
    let jmacksname = document.createElement('h2');
    let jmackswebsite = document.createElement('p');
    let jmackscontact = document.createElement('p');
    let image = document.createElement('img');

    jmacksname.textContent = businesses[i].name;
    jmackswebsite.textContent = 'Website'+ ': ' + businesses[i].website;
    jmackscontact.textContent = 'Contact' + ': ' + businesses[i].contact;
    image.setAttribute('src', businesses[i].imageurl);

    jmacks.appendChild(h2);
    jmacks.appendChild(website);
    jmacks.appendChild(contact);
    
    document.querySelector('div.jmacks').appendChild(jmacks);
    }
    });