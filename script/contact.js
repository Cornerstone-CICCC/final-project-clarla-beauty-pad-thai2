$(function () {
  //Add border, check icon and show button
  $("#wedding").on("click", function () {
    $("#wedding").addClass("border-pink bg-check");
    $("#party").removeClass("border-pink bg-check");
    $("#photoshoot").removeClass("border-pink bg-check");
    $("#call-bride").show();
    $("#nextWedButton").show();
    $("#nextPartyButton").hide();
    $("#submitButton").hide();
  });

  $("#party").on("click", function () {
    $("#party").addClass("border-pink bg-check");
    $("#wedding").removeClass("border-pink bg-check");
    $("#photoshoot").removeClass("border-pink bg-check");
    $("#nextPartyButton").show();
    $("#call-bride").hide();
    $("#nextWedButton").hide();
    $("#submitButton").hide();
  });

  $("#photoshoot").on("click", function () {
    $("#photoshoot").addClass("border-pink bg-check");
    $("#wedding").removeClass("border-pink bg-check");
    $("#party").removeClass("border-pink bg-check");
    $("#submitButton").show();
    $("#call-bride").hide();
    $("#nextWedButton").hide();
    $("#nextPartyButton").hide();
  });

  $("#makeup").on("click", function () {
    $("#makeup").addClass("border-pink bg-check");
  });

  $("#hairstyle").on("click", function () {
    $("#hairstyle").addClass("border-pink bg-check");
  });

  $("#masterClass").on("click", function () {
    $("#masterClass").addClass("border-pink bg-check");
    $("#workshop").removeClass("border-pink bg-check");
    $("#beginner").removeClass("border-pink bg-check");
  });

  $("#workshop").on("click", function () {
    $("#workshop").addClass("border-pink bg-check");
    $("#masterClass").removeClass("border-pink bg-check");
    $("#beginner").removeClass("border-pink bg-check");
  });

  $("#beginner").on("click", function () {
    $("#beginner").addClass("border-pink bg-check");
    $("#masterClass").removeClass("border-pink bg-check");
    $("#workshop").removeClass("border-pink bg-check");
  });

  // Show phone number / email once at a time
  $("#call").on("click", function () {
    $("#callNumber").show();
    $("#whatsNumber").hide();
    $("#smsNumber").hide();
    $("#emailText").hide();
  });

  $("#whats").on("click", function () {
    $("#whatsNumber").show();
    $("#callNumber").hide();
    $("#smsNumber").hide();
    $("#emailText").hide();
  });

  $("#sms").on("click", function () {
    $("#smsNumber").show();
    $("#callNumber").hide();
    $("#whatsNumber").hide();
    $("#emailText").hide();
  });

  $("#email").on("click", function () {
    $("#emailText").show();
    $("#callNumber").hide();
    $("#whatsNumber").hide();
    $("#smsNumber").hide();
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
