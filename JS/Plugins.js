/*Start Handling the Address bar */
$(".location").on("click", function () {
  $(this).fadeOut(300, function () {
    $(
      ".hiddenTextArea,.hiddenTextCity,.hiddenTextCountry,.hiddenButton"
    ).fadeIn(1000);
  });
});

$(".hiddenButton").on("click", function () {
  if (
    $(".hiddenTextArea").val() == "" ||
    $(".hiddenTextCity").val() == "" ||
    $(".hiddenTextCountry").val() == ""
  ) {
    window.alert("please Fill In the fields below");
  } else {
    $(".location").html(
      $(".hiddenTextArea").val() +
        " , " +
        $(".hiddenTextCity").val() +
        " , " +
        $(".hiddenTextCountry").val() +
        ' <i class="fas fa-arrow-circle-down"></i>'
    );
    $(
      ".hiddenTextArea,.hiddenTextCity,.hiddenTextCountry,.hiddenButton"
    ).fadeOut(1000, function () {
      $(".location").fadeIn(300);
    });
    $(".city").html($(".hiddenTextCity").val());
    $(".address").html(
      $(".hiddenTextArea").val() +
        " , " +
        $(".hiddenTextCity").val() +
        " , " +
        $(".hiddenTextCountry").val()
    );
  }
});
/*End Handling the Address bar */

/*Start Handling the Time/Date bar */
let today = new Date();
let tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
let todayString = today.toString();
let tomorrowString = tomorrow.toString();

let timeInNumbers = parseInt(todayString.substring(15, 18));
timeInNumbers = timeInNumbers + 1;
let dateInNumbers = parseInt(todayString.substring(8, 11));
dateInNumbers = dateInNumbers + 1;
$(".pickUpDate").html(todayString.substring(0, 15));
$(".pickUpTime").html(
  timeInNumbers + " :00" + " - " + (timeInNumbers + 1) + ":00"
);
$(".dropOffDate").html(tomorrowString.substring(0, 15));

$(".dropOffTime").html(
  timeInNumbers + ":00" + " - " + (timeInNumbers + 1) + ":00"
);

$(".pickUpSummary").html(
  todayString.substring(0, 15) +
    " &nbsp; &nbsp;" +
    timeInNumbers +
    ":00" +
    " - " +
    (timeInNumbers + 1) +
    ":00"
);
$(".dropOffSummary").html(
  tomorrowString.substring(0, 15) +
    " &nbsp; &nbsp;" +
    timeInNumbers +
    ":00" +
    " - " +
    (timeInNumbers + 1) +
    ":00"
);
/*End Handling the Time/Date bar */
/*Start Handling the Landing Page */
$(".landingPageBotton").on("click", function () {
  $(".landingPage").css("display", "none");

  $(".card:first-of-type").fadeIn(1).css("left", "0");
  $(".card:nth-of-type(2)").fadeIn(1).css("right", "0");
  $(".mainTitle").fadeIn(1000);
});

$(".brandName").on("click", function () {
  $(".landingPage").fadeIn(1000);

  $(".card:first-of-type").fadeOut(1).css("left", "0");
  $(".card:nth-of-type(2)").fadeOut(1).css("right", "0");
  $(".mainTitle").fadeOut(1);
});
/*End Handling the Landing Page */

/*Start Handling the input date and time */

/*Handling pickup Date and Time */

$(".pickupBox").on("click", function () {
  $(".pickUpDate,.pickUpTime").fadeOut(300, function () {
    $(".pickUpdateChanger ,.pickUptimeChanger").fadeIn(300);
  });
});
$(".pickUpdateChanger ,.pickUptimeChanger").on("focusout", function () {
  if ($(".pickUpdateChanger").val() != "") {
    $(".pickUpDate").html($(".pickUpdateChanger").val());
  } else {
  }
  $(".pickUpdateChanger").fadeOut(300, function () {
    $(".pickUpDate").fadeIn(300);
  });

  if ($(".pickUptimeChanger").val() != "") {
    let choosenTimeString = $(".pickUptimeChanger").val();
    let choosenTimeInt = parseInt(choosenTimeString.substring(0, 3));
    console.log(typeof choosenTimeInt);
    let nextchoosenTimeInt = choosenTimeInt + 1;
    $(".pickUpTime").html(
      choosenTimeInt + ":00" + " - " + nextchoosenTimeInt + ":00"
    );
    $(".pickUpSummary").html(
      $(".pickUpdateChanger").val() +
        "&nbsp;&nbsp;&nbsp;" +
        choosenTimeInt +
        ":00" +
        " - " +
        nextchoosenTimeInt +
        ":00"
    );
  } else {
  }
  $(".pickUptimeChanger").fadeOut(300, function () {
    $(".pickUpTime").fadeIn(300);
  });
});

/*Handling dropOff Date and Time */

$(".dropOffBox").on("click", function () {
  $(".dropOffDate,.dropOffTime").fadeOut(300, function () {
    $(".dropOffdateChanger ,.dropOfftimeChanger").fadeIn(300);
  });
});
$(".dropOffdateChanger ,.dropOfftimeChanger").on("focusout", function () {
  if ($(".dropOffdateChanger").val() != "") {
    $(".dropOffDate").html($(".dropOffdateChanger").val());
  } else {
  }
  $(".dropOffdateChanger").fadeOut(300, function () {
    $(".dropOffDate").fadeIn(300);
  });

  if ($(".dropOfftimeChanger").val() != "") {
    let choosenTimeString = $(".dropOfftimeChanger").val();
    let choosenTimeInt = parseInt(choosenTimeString.substring(0, 3));
    let nextchoosenTimeInt = choosenTimeInt + 1;
    $(".dropOffTime").html(
      choosenTimeInt + ":00" + " - " + nextchoosenTimeInt + ":00"
    );
    $(".dropOffSummary").html(
      $(".dropOffdateChanger").val() +
        " &nbsp;&nbsp;&nbsp;" +
        choosenTimeInt +
        ":00" +
        " - " +
        nextchoosenTimeInt +
        ":00"
    );
  } else {
  }

  $(".dropOfftimeChanger").fadeOut(300, function () {
    $(".dropOffTime").fadeIn(300);
  });
});

/*End Handling the input date and time */
