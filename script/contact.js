$(function () {
  $("#wedding").on("focus", function () {
    $("#wedding").addClass("border-pink bg-check");
    $("#party").removeClass("border-pink bg-check");
    $("#photoshoot").removeClass("border-pink bg-check");
  });

  $("#party").on("focus", function () {
    $("#wedding").removeClass("border-pink bg-check");
    $("#photoshoot").removeClass("border-pink bg-check");
    $("#party").addClass("border-pink bg-check");
  });

  $("#photoshoot").on("focus", function () {
    $("#wedding").removeClass("border-pink bg-check");
    $("#party").removeClass("border-pink bg-check");
    $("#photoshoot").addClass("border-pink bg-check");
  });

  $("#call").on("click", function () {
    $("#callNumber").removeClass("invisible").addClass("visible");
    $("#whatsNumber").removeClass("visible").addClass("invisible");
    $("#smsNumber").removeClass("visible").addClass("invisible");
    $("#emailText").removeClass("visible").addClass("invisible");
  });

  $("#whats").on("click", function () {
    $("#whatsNumber").removeClass("invisible").addClass("visible");
    $("#callNumber").removeClass("visible").addClass("invisible");
    $("#smsNumber").removeClass("visible").addClass("invisible");
    $("#emailText").removeClass("visible").addClass("invisible");
  });

  $("#sms").on("click", function () {
    $("#smsNumber").removeClass("invisible").addClass("visible");
    $("#whatsNumber").removeClass("visible").addClass("invisible");
    $("#callNumber").removeClass("visible").addClass("invisible");
    $("#emailText").removeClass("visible").addClass("invisible");
  });

  $("#email").on("click", function () {
    $("#emailText").removeClass("invisible").addClass("visible");
    $("#whatsNumber").removeClass("visible").addClass("invisible");
    $("#smsNumber").removeClass("visible").addClass("invisible");
    $("#callNumber").removeClass("visible").addClass("invisible");
  });
});
