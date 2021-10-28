function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById("currentdate").textContent = fulldate;

document.querySelector(".closebtn").addEventListener("click", function () {
	this.closest(".alert").remove();
  });
  
  const friday = new Date();
  if(friday.getDay() != 5) {
	const banner = document.querySelector("#banner")
	banner.remove()
  }
  
  WebFont.load({
    google: {
      families: [
         "Oswald, Lato"
      ]
    }
  });  