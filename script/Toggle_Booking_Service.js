//Toggle the service list of booking section. Set the display from none to block and vice versa.

var serviceButton = document.querySelector(".open-booking-service");

serviceButton.addEventListener("click", function () {
  var optionsList = document.querySelector(".service-list");
  optionsList.classList.toggle("hidden");
});
