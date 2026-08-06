$(function () {
  //Add border and check icon
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

  $("#makeup").on("focus", function () {
    $("#hairstyle").removeClass("border-pink bg-check");
    $("#makeup").addClass("border-pink bg-check");
  });

  $("#hairstyle").on("focus", function () {
    $("#makeup").removeClass("border-pink bg-check");
    $("#hairstyle").addClass("border-pink bg-check");
  });

  // Show phone number / email once at a time
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

  // Subtract extra person
  $(".sub-btn").on("click", function () {
    const target = $(this).data("target");
    let count = Number($(target).text()) || 0;

    if (count > 0) {
      count -= 1;
      $(target).text(count);
    }
  });

  // Add extra person
  $(".add-btn").on("click", function () {
    const target = $(this).data("target");
    let count = Number($(target).text());

    count += 1;
    $(target).text(count);
  });
});
