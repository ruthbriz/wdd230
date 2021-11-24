var n = localStorage.getItem('on_load_counter');
 
if (n === null) {
    n = 0;
}
 
n++;
 
localStorage.setItem("on_load_counter", n);

if (n == 1){
    document.getElementById('counter').innerHTML = 'You visted this site ' + n + ' time';
} else{
    document.getElementById('counter').innerHTML = 'You visted this site ' + n + ' times';
}
 
