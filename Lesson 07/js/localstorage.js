function countVisits(){
    str_count = localStorage.getItem("count");
    //get a numeric value from str_count, put it in count
    if (str_count == null || str_count == "null"){
      count = 0;
    } else {
      count = parseInt(str_count);
    } // end if
    //increment count
    count++;
    //display count
    lblCounter = document.getElementById("lblCounter");
    lblCounter.innerHTML = "You have been here " + count + " times";
    //store count
    localStorage.setItem("count", count);
  } // end count