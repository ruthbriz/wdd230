function visitCounter(){
    const visits = document.querySelector('visit');
if (!visits) { visits = 1;
    document.getElementById('Visit').innerHTML = "You visited this page 1 time";
} else {
    visits = parseInt(visits) + 1;
    document.getElementById('Visit').innerHTML = "You visited this page" + visits + "time";
}
}