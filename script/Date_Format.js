const today = new Date().toISOString().split("T")[0];

const dateInput = document.querySelector(".datePicker");

dateInput.min = today;
dateInput.value = today;
