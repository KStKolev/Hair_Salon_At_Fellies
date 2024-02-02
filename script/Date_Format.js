//Create local date.

const currentDate = new Date();

/*
  Set the date, hours and minutes of the current date, 
  if the hours and minutes are before/after the work time of the hair salon.
*/
// Work time: 9:30AM - 5:00PM

if (currentDate.getHours() >= 17) {
  currentDate.setDate(currentDate.getDate() + 1);
  currentDate.setHours(9);
  currentDate.setMinutes(30);
} else if (
  (currentDate.getHours() < 9) |
  ((currentDate.getHours() === 9) & (currentDate.getMinutes() < 30))
) {
  currentDate.setHours(9);
  currentDate.setMinutes(30);
}

//Set configuration for the calendar.
const config = {
  enableTime: true,
  dateFormat: "Y/m/d h:i K",
  defaultDate: currentDate,
  minDate: currentDate,
  maxDate: "2024/12/31",
  minTime: "9:30",
  maxTime: "17:00",
};

flatpickr("#date", config);
