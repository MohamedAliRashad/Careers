$("document").ready(function () {
  var arButton = $("#ar-btn");
  var enButton = $("#en-btn");
  var arTickets = $(".ar-ticket");
  var Tickets = $(".ticket");

  enButton.on("click", () => {
    enButton.css("display", "none");
    arButton.css("display", "inline-block");
    Tickets.css("display", "flex");
    arTickets.css("display", "none");
  });

  arButton.on("click", () => {
    enButton.css("display", "inline-block");
    arButton.css("display", "none");
    Tickets.css("display", "none");
    arTickets.css("display", "flex");
  });
});
