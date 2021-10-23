const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const d = new Date();
const dayName = daynames[d.getDay()];

  if (DayName == "Friday"){
	  document.getElementById("banner");
  document.querySelector(".closebtn").addEventListener("click", function () {
	this.closest(".alert").remove();
  });
}
  else{
	  document.getElementById("banner").style.display = "none";
	  )
  }