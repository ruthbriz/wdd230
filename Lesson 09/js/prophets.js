const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  const prophets = jsonObject['prophets'];


for (let i = 0; i < prophets.length; i++ ) {

let card = document.createElement('section');
let h2 = document.createElement('h2');
let place = document.createElement('p');
let date = document.createElement('p');
let orders = document.createElement('p');
let years = document.createElement('p');
let children = document.createElement('p');
let death = document.createElement('p');

h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
place.textContent = 'Date of Birth' + prophets[i].birthdate;
date.textContent = 'Place of Birth' + prophets[i].birthplace;
orders.textContent = 'Order' + prophets[i].order;
years.textContent = 'Length' + prophets[i].length;
children.textContent = 'Number Of Children' + prophets[i].numofchildren;
death.textContent = 'Death' + prophets[i].death;
image.setAttribute('src', prophets[i].imageurl);

card.appendChild(h2);
card.appendChild(date);
card.appendChild(place);
card.appendChild(orders);
card.appendChild(years);
card.appendChild(children);
card.appendChild(death);
card.appendChild(image);

document.querySelector('div.cards').appendChild(card);


}
});