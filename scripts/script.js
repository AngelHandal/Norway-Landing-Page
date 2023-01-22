//get all sections
const section1 = document.getElementById("section-1");
const section2 = document.getElementById("section-2");
const section3 = document.getElementById("section-3");
const section4 = document.getElementById("section-4");


//listen wheeldonw (mouse)
document.addEventListener("mousewheel", (event) => {
  // check if the event happened
  if (event.wheelDelta < 0) {
    //remove the class "active" from section 1
    section1.classList.remove("active");
    //add the class "active" to section 2
    section2.classList.add("active");
  }
});

let buyTicketButton = document.getElementById("buy-ticket-button");

buyTicketButton.addEventListener("click", function() {
  window.location.href = "https://www.booking.com/";
});