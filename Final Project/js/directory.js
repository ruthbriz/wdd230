const data = "https://ruthbriz.github.io/wdd230/json/directory.json";

fetch(data)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const businesses = jsonObject['businesses'];

for (let i = 0; i < businesses.length; i++ ) {

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let website = document.createElement('p');
    let contact = document.createElement('p');
    let image = document.createElement('img');
    
    h2.textContent = businesses[i].name;
    website.textContent = 'Website'+ ': ' + businesses[i].website;
    contact.textContent = 'Contact' + ': ' + businesses[i].contact;
    image.setAttribute('src', businesses[i].imageurl);
    
    card.appendChild(h2);
    card.appendChild(website);
    card.appendChild(contact);
    card.appendChild(image);
    
    document.querySelector('div.cards').appendChild(card);
    }
    });