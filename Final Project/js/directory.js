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

    jmacksname.textContent = businesses[0].name;
    jmackswebsite.textContent = 'Website'+ ': ' + businesses[0].website;
    jmackscontact.textContent = 'Contact' + ': ' + businesses[0].contact;

    jmacks.appendChild(h2);
    jmacks.appendChild(website);
    jmacks.appendChild(contact);
    
    document.querySelector('div.jmacks').appendChild(jmacks);

    let nursery = document.createElement('section');
    let nurseryname = document.createElement('h2');
    let nurserywebsite = document.createElement('p');
    let nurserycontact = document.createElement('p');

    nurseryname.textContent = businesses[1].name;
    nurserywebsite.textContent = 'Website'+ ': ' + businesses[1].website;
    nurserycontact.textContent = 'Contact' + ': ' + businesses[1].contact;

    nursery.appendChild(h2);
    nursery.appendChild(website);
    nursery.appendChild(contact);
    
    document.querySelector('div.nursery').appendChild(nursery);

    let bricks = document.createElement('section');
    let bricksname = document.createElement('h2');
    let brickswebsite = document.createElement('p');
    let brickscontact = document.createElement('p');

    bricksname.textContent = businesses[2].name;
    brickswebsite.textContent = 'Website'+ ': ' + businesses[2].website;
    brickscontact.textContent = 'Contact' + ': ' + businesses[2].contact;

    bricks.appendChild(h2);
    bricks.appendChild(website);
    bricks.appendChild(contact);
    
    document.querySelector('div.bricks').appendChild(bricks);
    }
    });