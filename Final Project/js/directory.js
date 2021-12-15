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
    let jmackscontactone = document.createElement('p');
    let jmackscontacttwo = document.createElement('p');
    let jmackscontactthree = document.createElement('p');
    
    jmacksname.textContent = businesses[0].name;
    jmackswebsite.textContent = 'Website'+ ': ' + businesses[0].website;
    jmackscontactone.textContent = 'Phone' + ': ' + businesses[0].contact[0];
    jmackscontacttwo.textContent = 'Telephone' + ': ' + businesses[0].contact[1];
    jmackscontactthree.textContent = 'Email' + ': ' + businesses[0].contact[2];
    
    jmacks.appendChild(jmacksname);
    jmacks.appendChild(jmackswebsite);
    jmacks.appendChild(jmackscontactone);
    jmacks.appendChild(jmackscontacttwo);
    jmacks.appendChild(jmackscontactthree);
    
    document.querySelector('div.jmacks').appendChild(jmacks);

    let nursery = document.createElement('section');
    let nurseryname = document.createElement('h2');
    let nurserywebsite = document.createElement('p');
    let nurserycontactone = document.createElement('p');
    
    nurseryname.textContent = businesses[1].name;
    nurserywebsite.textContent = 'Website'+ ': ' + businesses[1].website;
    nurserycontactone.textContent = 'Phone' + ': ' + businesses[1].contact;
    
    nursery.appendChild(nurseryname);
    nursery.appendChild(nurserywebsite);
    nursery.appendChild(nurserycontactone);
    
    document.querySelector('div.nursery').appendChild(nursery);

    let bricks = document.createElement('section');
    let bricksname = document.createElement('h2');
    let brickswebsite = document.createElement('p');
    let brickscontactone = document.createElement('p');
    let brickscontacttwo = document.createElement('p');
    
    bricksname.textContent = businesses[2].name;
    brickswebsite.textContent = 'Website'+ ': ' + businesses[2].website;
    brickscontactone.textContent = 'Email' + ': ' + businesses[2].contact[0];
    brickscontacttwo.textContent = 'Facebook' + ': ' + businesses[2].contact[1];
    
    bricks.appendChild(bricksname);
    bricks.appendChild(brickswebsite);
    bricks.appendChild(brickscontactone);
    bricks.appendChild(brickscontacttwo);
    
    document.querySelector('div.bricks').appendChild(bricks);

    let gourmet = document.createElement('section');
    let gourmetname = document.createElement('h2');
    let gourmetwebsite = document.createElement('p');
    let gourmetcontactone = document.createElement('p');
    let gourmetcontacttwo = document.createElement('p');
    let gourmetcontactthree = document.createElement('p');
    
    gourmetname.textContent = businesses[3].name;
    gourmetwebsite.textContent = 'Website'+ ': ' + businesses[3].website;
    gourmetcontactone.textContent = 'Phone' + ': ' + businesses[3].contact[0];
    gourmetcontacttwo.textContent = 'Email' + ': ' + businesses[3].contact[1];
    gourmetcontactthree.textContent = 'Facebook' + ': ' + businesses[3].contact[2];
    
    gourmet.appendChild(gourmetname);
    gourmet.appendChild(gourmetwebsite);
    gourmet.appendChild(gourmetcontactone);
    gourmet.appendChild(gourmetcontacttwo);
    gourmet.appendChild(gourmetcontactthree);
    
    document.querySelector('div.gourmet').appendChild(gourmet);
    }
    });