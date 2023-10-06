// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  var containerEl = $(".container-lg")
  var buttonEl = $(".btn")
  // var dataArray = [];


  function getData() {
    // for (var i = 0, len = localStorage.length; i < len; ++i) {
    //   console.log(localStorage.getItem(localStorage.key(i)));
    // }

    for (let i = 9; i < 18; i++) {
      // console.log("hour-" + i);
      var storedHour = "hour-" + i;
      console.log(localStorage.getItem(storedHour));
      var storedText = localStorage.getItem(storedHour);
      var rowID = "#" + storedHour;
      // console.log(typeof(storedText));
      if (storedText != null) {
        $(rowID).children("textarea").val(storedText);
      }


    }
    // console.log(localStorage.getItem("hour-9"));
  }

  getData();
  // var storedHour = "#" + "hour-" + 9;
  // console.log(typeof(storedHour));
  // $(storedHour).children("textarea").val("hi");
  // $("#hour-9").children("textarea").val("hi");



  var today = dayjs();

  function displayDate() {
    $('#currentDay').text(today.format('dddd, MMMM D YYYY'));
    
  }

  // Display current date on page load
  displayDate();

  // setInterval to update date every 15 min
  setInterval(function() {
    displayDate();
    updateTime();
  }, 900000);






  // function to update the time by comparing current hour with block hour
  function updateTime() {

    var currentHour = today.format("ha");

    // convert currentHour to military time
    if (currentHour == "12am") {
      currentHour = 0;
    } else if (currentHour == "1am") {
      currentHour = 1;
    } else if (currentHour == "2am") {
      currentHour = 2;
    } else if (currentHour == "3am") {
      currentHour = 3;
    } else if (currentHour == "4am") {
      currentHour = 4;
    } else if (currentHour == "5am") {
      currentHour = 5;
    } else if (currentHour == "6am") {
      currentHour = 6;
    } else if (currentHour == "7am") {
      currentHour = 7;
    } else if (currentHour == "8am") {
      currentHour = 8;
    } else if (currentHour == "9am") {
      currentHour = 9;
    } else if (currentHour == "10am") {
      currentHour = 10;
    } else if (currentHour == "11am") {
      currentHour = 11;
    } else if (currentHour == "12pm") {
      currentHour = 12;
    } else if (currentHour == "1pm") {
      currentHour = 13;
    } else if (currentHour == "2pm") {
      currentHour = 14;
    } else if (currentHour == "3pm") {
      currentHour = 15;
    } else if (currentHour == "4pm") {
      currentHour = 16;
    } else if (currentHour == "5pm") {
      currentHour = 17;
    } else if (currentHour == "6pm") {
      currentHour = 18;
    } else if (currentHour == "7pm") {
      currentHour = 19;
    } else if (currentHour == "8pm") {
      currentHour = 20;
    } else if (currentHour == "9pm") {
      currentHour = 21;
    } else if (currentHour == "10pm") {
      currentHour = 22;
    } else if (currentHour == "11pm") {
      currentHour = 23;
    }


    for (let i = 9; i < 18; i++) {
      var hourID = "#hour-" + i;
      var blockHour = i;
      
      if (blockHour < currentHour) {
        // past
      } else if (blockHour == currentHour) {
        // present
      } else {
        // future
      }
    }
    
    


  }

  updateTime();
  // const ampm2military = ampm => ampm ? dayjs(`1/1/1 ${ampm}`).format("HH:mm:00") : null;

  // console.log(ampm2military("1:24 PM"));


  // Event listeners
  containerEl.on("click", ".btn", function (event) {
    // console.log($(this));
    var parentEl = $(this).parent();
    var hour = parentEl.attr("id");
    var description = parentEl.children("textarea").val();
    // var dataObj = {
    //   hour: hour,
    //   description: description
    // }

    localStorage.setItem(hour, description);



    // if (event.target.matches(".btn") ) {
    //   var parentEl = $(this).parent();
    //   console.log($(this));
    //   console.log(parentEl);
    //   var hour = parentEl.attr("id");
    //   var description = parentEl.children("textarea").val();
    // } else {
    //   console.log('icon');
    //   console.log(this);
    // }
  })




});
