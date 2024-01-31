const config = {
  enableTime: true,
  dateFormat: "Y/m/d G:i K",
  defaultDate: new Date(),
  minDate: "today",
  maxDate: "2024/12/31",
  minTime: "9:30",
  maxTime: "17:00",
};
flatpickr("#date", config);
