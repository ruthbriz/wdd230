function visitCounter(){
    const count = document.querySelector('visit');
if (count == null || count == "null")  {
    visit = 0;
} else{
    visit = parseInt(count);
}
count++;
lblCounter = document.getElementById("lblCounter");
lblCounter.innerHTML = "You have been here " + visit + " times";
localStorage.setItem("visit", visit);
}