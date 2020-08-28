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

$(".summaryFooter").on("click", function () {
  $("#summaryCard").toggleClass("d-block summaryFade animate__backInUp");
});

/*End Handling the Landing Page */
/*Handling the logout button */
$("#logoutButton ,#logoutButtonFinal").on("click", function () {
  $(".landingPage").fadeIn(500);
  $(".card:first-of-type").fadeOut(1).removeClass("animate__backInLeft");
  $(".card:nth-of-type(2)").removeClass("animate__backInRight d-block");
  $(".card:nth-of-type(3)").removeClass("animate__backInLeft d-md-block");
  $(".mainTitle").fadeOut(1);
  $(".signup").css("display", "inline");
  $(".login").css("display", "inline");
  $("footer").removeClass("d-none");
  $(".summaryFooter").addClass("d-none").removeClass("d-md-none");
  $("#logoutButton").css("display", "none");
  $("#summaryCard").removeClass("d-block summaryFade animate__backInUp");
  $(".finalPage").css("display", "none");
});
/*End Handling the logout button */

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
  $(".signupp").css("visibility", "hidden");
  $(".loading").css("display", "inline-block");
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (result) {
      $(".signupPage").fadeOut(1);
      $(".signup").fadeOut(1);
      $(".loading").css("display", "none");
      $(".signupp").css("visibility", "visible");
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      $(".loading").css("display", "none");
      $(".signupp").css("visibility", "visible");

      alert(errorMessage);
    });
});
$(".loginSubmit").on("click", function (e) {
  e.preventDefault();
  let email = $("#loginEmail").val();
  let password = $("#loginPassword").val();
  $(".loginn").css("visibility", "hidden");
  $(".loading").css("display", "inline-block");
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
      $(".landingPage").css("display", "none");
      $(".card:first-of-type").fadeIn(1).addClass("animate__backInLeft");
      $(".card:nth-of-type(3)").addClass("animate__backInRight d-md-block");
      $(".mainTitle").fadeIn(1000);
      $(".signup").css("display", "inline");
      $(".login").css("display", "inline");
      $("footer").addClass("d-none");
      $(".summaryFooter").removeClass("d-none").addClass("d-md-none");
      $("#logoutButton").css("display", "flex");
      $(".loading").css("display", "none");
      $(".loginn").css("visibility", "visible");
    })
    .catch(function (error) {
      // Handle error.
      var errorMessage = error.message;
      $(".loading").css("display", "none");
      $(".loginn").css("visibility", "visible");
      alert(errorMessage);
    });
});

/*End Handling login Page*/
$("#next").on("click", function () {
  $("#maincard").fadeOut(1);
  $(".card:nth-of-type(2)").addClass("animate__backInLeft d-block");
  $(".step1").css({ color: "#ffbd69", backgroundColor: "#ececec" });
  $(".step2").css({ backgroundColor: "#ffbd69", color: "#ececec" });
});
$("#back").on("click", function () {
  $("#maincard").fadeIn(1);
  $(".card:nth-of-type(2)").removeClass("animate__backInLeft d-block");
  $(".step1").css({ backgroundColor: "#ffbd69", color: "#ececec" });
  $(".step2").css({ color: "#ffbd69", backgroundColor: "#ececec" });
});

/*Start Handling the payment Page */
$("input[type=radio]").on("change", function () {
  if ($("#cash").is(":checked")) {
    $(".paymentoptions input[type=text],.paymentoptions input[type=number]")
      .fadeOut(10)
      .removeAttr("required");
  } else {
    $(".paymentoptions input[type=text],.paymentoptions input[type=number]")
      .fadeIn(10)
      .attr("required");
  }
});
var totalItemsSum = 0;
var oneItemPerPrice;
var price = [10, 15, 12, 17, 19, 29, 230, 28, 30, 260];
var allItemsPerPrice = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

$(".orderedItem").on("change", function () {
  totalItemsSum = 0;
  var itemSelected = $(this).attr("data-class");
  oneItemPerPrice = $(this).val() * price[itemSelected];
  allItemsPerPrice[itemSelected] = oneItemPerPrice;
  for (let i = 0; i < price.length; i++) {
    totalItemsSum = totalItemsSum + allItemsPerPrice[i];
  }
  $("#finalPrice").html(totalItemsSum);
});
var numbers = [];

$(".paymentoptions button[type=submit]").on("click", function (e) {
  e.preventDefault();
  var db = firebase.firestore();
  for (var i = 0; i < price.length; i++) {
    numbers[i] = $(".orderedItem[data-class=" + [i] + "]").val();
  }

  var x = 0;

  //Add a document with The ID of the user.
  db.collection(firebase.auth().W)
    .add({
      pickup: $(".pickUpSummary").text(),
      dropoff: $(".dropOffSummary").text(),
      instructions: $("textarea").val(),
      address: $(".address").text(),
      price: $("#finalPrice").html(),
      order: {
        "Deep Cleaning": numbers[0],
        "Home Cleaning": numbers[1],
        "Carpet Cleaning": numbers[2],
        "Mattress Cleaning": numbers[3],
        "Sofa Cleaning": numbers[4],
        "Curtain Cleaning": numbers[5],
        "Full Time Maid Services ": numbers[6],
        "Dry Cleaning/Laundry ": numbers[7],
        "A/C Cleaning Disinfection": numbers[8],
        "Service Household Chores": numbers[9],
      },
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      $(".finalPage").css("display", "block");
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});

/*End Handling the payment Page */
