/*Start Handling the Address bar */
$(".location").on("click", function () {
  $(".locationPage").fadeIn(500);
});
$(".locationCross").on("click", function () {
  $(".locationPage").fadeOut(500);
});

$(".locationSubmit").on("click", function (e) {
  e.preventDefault();
  if (
    $("#area").val() == "" ||
    $("#city").val() == "" ||
    $("#country").val() == ""
  ) {
    window.alert("please Fill In the fields below");
  } else {
    $(".location").html(
      $("#area").val() +
        " , " +
        $("#city").val() +
        " , " +
        $("#country").val() +
        ' <i class="fas fa-arrow-circle-down"></i>'
    );
    $(".locationPage").fadeOut(500, function () {
      $(".location").fadeIn(300);
    });
    $(".city").html($("#city").val());
    $(".address").html(
      $("#area").val() + " , " + $("#city").val() + " , " + $("#country").val()
    );
  }
});
/*End Handling the Address bar */

/*Start Handling the Landing Page */
$(".landingPageBotton").on("click", function () {
  $(".landingPage").css("display", "none");
  $(".card:first-of-type").fadeIn(1).addClass("animate__backInLeft");
  $(".card:nth-of-type(2)").addClass("animate__backInRight d-md-block");
  $(".mainTitle").fadeIn(1000);
  $(".signup").css("display", "inline");
  $(".login").css("display", "inline");
  $("footer").addClass("d-none");
  $(".summaryFooter").removeClass("d-none").addClass("d-md-none");
});

$(".brandName").on("click", function () {
  $(".landingPage").fadeIn(1000);
  $(".card:first-of-type").fadeOut(1);
  $(".card:nth-of-type(2)").removeClass("d-md-block");
  $(".mainTitle").fadeOut(1);
  $(".signup").fadeOut(1);
  $(".login").fadeOut(1);
  $("footer").removeClass("d-none");
  $(".summaryFooter").addClass("d-none").removeClass("d-md-none");
});

$(".summaryFooter").on("click", function () {
  $("#summaryCard").toggleClass("d-block summaryFade animate__backInUp");
});

/*End Handling the Landing Page */

/*Start Handling the input date and time */

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
  timeInNumbers + ":00" + " - " + (timeInNumbers + 1) + ":00"
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
/*Handling pickup Date and Time */

$(".pickupBox").on("click", function () {
  $(".pickupPage").fadeIn(500);
});
$(".pickupSubmit").on("click", function (e) {
  e.preventDefault();
  if ($(".pickUpdateChanger").val() != "") {
    $(".pickUpDate").html($(".pickUpdateChanger").val());
    $(".pickUpSummary").html($(".pickUpdateChanger").val());
  }
  if ($(".pickUptimeChanger").val() != "") {
    let choosenTimeString = $(".pickUptimeChanger").val();
    let choosenTimeInt = parseInt(choosenTimeString.substring(0, 3));
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
  }
  $(".pickupPage").fadeOut(500);
});
$(".pickupCross").on("click", function () {
  $(".pickupPage").fadeOut(500);
});

/*Handling dropOff Date and Time */

$(".dropOffBox").on("click", function () {
  $(".dropoffPage").fadeIn(500);
});
$(".dropoffSubmit").on("click", function (e) {
  e.preventDefault();
  if ($(".dropOffdateChanger").val() != "") {
    $(".dropOffDate").html($(".dropOffdateChanger").val());
    $(".dropOffSummary").html($(".dropOffdateChanger").val());
  } else {
  }

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
  $(".dropoffPage").fadeOut(500);
});
$(".dropoffCross").on("click", function () {
  $(".dropoffPage").fadeOut(500);
});

/*End Handling the input date and time */

/*Start Handling login Page */

$(".signup,.signupCross").on("click", function () {
  $(".signupPage").fadeToggle(500);
  $(".signupPage").css("height", $("html,body").innerHeight());
});
$(".login,.loginCross").on("click", function () {
  $(".loginPage").fadeToggle(500);
  $(".loginPage").css("height", $("html,body").innerHeight());
});
$(".signupSubmit").on("click", function (e) {
  e.preventDefault();
  let email = $("#signupEmail").val();
  let password = $("#signupPassword").val();
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (result) {
      $(".signupPage").fadeOut(1);
      $(".signup").fadeOut(1);
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
});

$(".loginSubmit").on("click", function (e) {
  e.preventDefault();
  let email = $("#loginEmail").val();
  let password = $("#loginPassword").val();
  // Set the tenant ID on Auth instance.
  firebase.auth().tenantId = null;

  // All future sign-in request now include tenant ID.
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (result) {
      // result.user.tenantId should be ‘TENANT_PROJECT_ID’.
      $(".loginPage").fadeOut(1);
      $(".login").fadeOut(1);
      $(".signup").fadeOut(1);
    })
    .catch(function (error) {
      // Handle error.
      var errorMessage = error.message;

      alert(errorMessage);
    });
});

$(window).on("resize", function () {
  $(".loginPage").css("height", $("html,body").innerHeight());
});

/*End Handling login Page */
