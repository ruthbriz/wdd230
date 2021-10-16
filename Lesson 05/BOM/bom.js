const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function() {
  let myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn).addEventListener("click", function (){
	  alert("Are you sure you want to delete " + myItem +"?");
  });
  listBtn.textContent = 'X';
  list.appendChild(listItem);
  listBtn.textContext.style.color = "red"
  listBtn.onclick = function(e) {
	list.removeChild(listItem);
  }
  input.focus();
}