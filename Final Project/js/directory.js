const data = "https://ruthbriz.github.io/wdd230/json/directory.json";

fetch(data)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);
    const businesses = jsonObject['businesses'];

for (let i = 0; i < 1; i++ ) {

    let business = document.createElement('section');
    let name = document.createElement('h2');
    let website = document.createElement('p');
    let contact = document.createElement('p');
    let image = document.createElement('img');

    name.textContent = businesses[i].name;
    website.textContent = 'Website'+ ': ' + businesses[i].website;
    contact.textContent = 'Contact' + ': ' + businesses[i].contact;
    image.setAttribute('src', businesses[i].logo);

    business.appendChild(h2);
    business.appendChild(website);
    business.appendChild(contact);
    business.appendChild(image);
    
    document.querySelector('div.business').appendChild(business);
    }
    });