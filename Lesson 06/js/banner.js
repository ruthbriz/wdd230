document.querySelector(".closebtn").addEventListener("click", function () {
	this.closest(".alert").remove();
  });
  
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const today = new Date();
const dayName = daynames[today.getDay()];
if(dayName = Friday) {
  document.getElementById("banner")
  banner.remove()
}
else{
	document.getElementById("banner").style.display = "none";
}