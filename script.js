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
