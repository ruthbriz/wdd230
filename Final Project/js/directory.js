const data = "https://ruthbriz.github.io/wdd230/json/directory.json";

fetch(data)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const businesses = jsonObject['businesses'];

for (let i = 0; i < 1; i++ ) {

    //first business

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

// second business

    let nursery = document.createElement('section');
    let nurseryname = document.createElement('h2');
    let nurserywebsite = document.createElement('p');
    let nurserycontactone = document.createElement('p');
    let nurserycontacttwo = document.createElement('p');
    let nurserycontactthree = document.createElement('p');
    
    nurseryname.textContent = businesses[1].name;
    nurserywebsite.textContent = 'Website'+ ': ' + businesses[1].website;
    nurserycontactone.textContent = 'Phone' + ': ' + businesses[1].contact[1];
    nurserycontacttwo.textContent = 'Telephone' + ': ' + businesses[0].contact[2];
    nurserycontactthree.textContent = 'Email' + ': ' + businesses[0].contact[3];
    
    nursery.appendChild(nurseryname);
    nursery.appendChild(nurserywebsite);
    nursery.appendChild(nurserycontactone);
    nursery.appendChild(nurserycontacttwo);
    nursery.appendChild(nurserycontactthree);
    
    document.querySelector('div.nursery').appendChild(nursery);

//third business

    let bricks = document.createElement('section');
    let bricksname = document.createElement('h2');
    let brickswebsite = document.createElement('p');
    let brickscontactone = document.createElement('p');
    let brickscontacttwo = document.createElement('p');
    let brickscontactthree = document.createElement('p');
    
    bricksname.textContent = businesses[2].name;
    brickswebsite.textContent = 'Website'+ ': ' + businesses[2].website;
    brickscontactone.textContent = 'Email' + ': ' + businesses[2].contact[0];
    brickscontacttwo.textContent = 'Facebook' + ': ' + businesses[2].contact[1];
    brickscontactthree.textContent = 'Phone' + ': ' + businesses[0].contact[2];
    
    bricks.appendChild(bricksname);
    bricks.appendChild(brickswebsite);
    bricks.appendChild(brickscontactone);
    bricks.appendChild(brickscontacttwo);
    bricks.appendChild(brickscontactthree);
    
    document.querySelector('div.bricks').appendChild(bricks);

//fourth business

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

//fifth business

    let bakery = document.createElement('section');
    let bakeryname = document.createElement('h2');
    let bakerywebsite = document.createElement('p');
    let bakerycontactone = document.createElement('p');
    let bakerycontacttwo = document.createElement('p');
    let bakerycontactthree = document.createElement('p');
    
    bakeryname.textContent = businesses[4].name;
    bakerywebsite.textContent = 'Website'+ ': ' + businesses[4].website;
    bakerycontactone.textContent = 'Phone' + ': ' + businesses[4].contact[0];
    bakerycontacttwo.textContent = 'Email' + ': ' + businesses[4].contact[1];
    bakerycontactthree.textContent = 'Telephone' + ': ' + businesses[4].contact[2];
    
    bakery.appendChild(bakeryname);
    bakery.appendChild(bakerywebsite);
    bakery.appendChild(bakerycontactone);
    bakery.appendChild(bakerycontacttwo);
    bakery.appendChild(bakerycontactthree);
    
    document.querySelector('div.bakery').appendChild(bakery);

    //sixth business

    let takoyaki = document.createElement('section');
    let takoyakiname = document.createElement('h2');
    let takoyakiwebsite = document.createElement('p');
    let takoyakicontactone = document.createElement('p');
    let takoyakicontacttwo = document.createElement('p');
    let takoyakicontactthree = document.createElement('p');
    
    takoyakiname.textContent = businesses[5].name;
    takoyakiwebsite.textContent = 'Website'+ ': ' + businesses[5].website;
    takoyakicontactone.textContent = 'Phone' + ': ' + businesses[5].contact[0];
    takoyakicontacttwo.textContent = 'Email' + ': ' + businesses[4].contact[1];
    takoyakicontactthree.textContent = 'Telephone' + ': ' + businesses[4].contact[2];
    
    takoyaki.appendChild(takoyakiname);
    takoyaki.appendChild(takoyakiwebsite);
    takoyaki.appendChild(takoyakicontactone);
    
    document.querySelector('div.takoyaki').appendChild(takoyaki);

    //seventh business

    let food = document.createElement('section');
    let foodname = document.createElement('h2');
    let foodwebsite = document.createElement('p');
    let foodcontactone = document.createElement('p');
    let foodcontacttwo = document.createElement('p');
    let foodcontactthree = document.createElement('p');
    
    foodname.textContent = businesses[6].name;
    foodwebsite.textContent = 'Website'+ ': ' + businesses[6].website;
    foodcontactone.textContent = 'Facebook' + ': ' + businesses[6].contact[0];
    foodcontacttwo.textContent = 'Phone' + ': ' + businesses[6].contact[1];
    foodcontactthree.textContent = 'Email' + ': ' + businesses[6].contact[2];
    
    food.appendChild(foodname);
    food.appendChild(foodwebsite);
    food.appendChild(foodcontactone);
    food.appendChild(foodcontacttwo);
    food.appendChild(foodcontactthree);
    
    document.querySelector('div.food').appendChild(food);
    }
    });