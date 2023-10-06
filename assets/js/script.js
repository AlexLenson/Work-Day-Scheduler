$(function () {

  // Global variables
  var containerEl = $(".container-lg")
  var today = dayjs();


  // get text from local storage and add it to textarea element for the corresponding hour
  function getData() {

    for (let i = 9; i < 18; i++) {
      var storedHour = "hour-" + i;
      var storedText = localStorage.getItem(storedHour);
      var rowID = "#" + storedHour;
      
      if (storedText != null) {
        $(rowID).children("textarea").val(storedText);
      }
    }
  }

  // get data from local storage on page load so that data persists after page is closed
  getData();

  // Display date in the header
  function displayDate() {
    $('#currentDay').text(today.format('dddd, MMMM D YYYY'));
  }

  // Display current date on page load
  displayDate();

  // function to update the time by comparing current hour with block hour
  function updateTime() {

    // current hour (military time)
    currentHour = today.hour();

    // toggle background color for each block based on if time is past, present or future
    for (let i = 9; i < 18; i++) {
      var hourID = "#hour-" + i;
      var blockHour = i;

      if (blockHour < currentHour) {
        // past
        $(hourID).toggleClass("past");
      } else if (blockHour == currentHour) {
        // present
        $(hourID).toggleClass("present");
      } else {
        // future
        $(hourID).toggleClass("future");
      }
    }
  }

  // Update time on page load
  updateTime();

  // setInterval to update date and background colors every 15 min
  setInterval(function () {
    displayDate();
    updateTime();
  }, 900000);



  // Event listeners

  // when save button is clicked, send corresponding time and text to local storage
  containerEl.on("click", ".btn", function (event) {
    var parentEl = $(this).parent();
    var hour = parentEl.attr("id");
    var description = parentEl.children("textarea").val();

    localStorage.setItem(hour, description);

  })

});
