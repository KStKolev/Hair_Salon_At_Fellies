var serviceButton = document.querySelector(".open-booking-service");

serviceButton.addEventListener("click", function () {
  var optionsList = document.querySelector(".service-list");
  if (optionsList.classList.contains("hidden")) {
    optionsList.classList.remove("hidden");
  } else {
    optionsList.classList.add("hidden");
  }
});

var bookingServices = Array.from(
  document.querySelectorAll(".service-list > li > button")
);

bookingServices.forEach((service) => {
  service.addEventListener("click", function () {
    serviceButton.innerHTML = service.innerHTML;
  });
});
