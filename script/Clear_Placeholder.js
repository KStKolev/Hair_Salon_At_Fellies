let bookingTextArea = document.getElementById("message");

bookingTextArea.addEventListener("click", function () {
  bookingTextArea.placeholder = "";
});

bookingTextArea.addEventListener("blur", function () {
  if (bookingTextArea.innerHTML === "") {
    bookingTextArea.placeholder = "Write here if you have any questions!";
  }
});
