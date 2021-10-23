document.querySelector(".closebtn").addEventListener("click", function () {
	this.closest(".alert").remove();
  });
  

const d = new Date();
const daynames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = daynames[d.getDay()];
if(dayName == Friday) {
  document.getElementById("banner").style.display = "block";
  banner.remove();
}
else{
	document.getElementById("banner").style.display = "none";
}