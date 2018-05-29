$('[data-toggle="tooltip"]').tooltip();
$('[data-toggle="popover"]').popover();

$('.collapsible').on('shown.bs.collapse',function(){
  var activeMenu = $('.collapsible > [aria-expanded="true"]');
  var inactiveMenus = $('.collapsible > [aria-expanded="false"]');

  activeMenu.parent().addClass('active');
  inactiveMenus.parent().removeClass('active');
});

$('.collapsible').on('hidden.bs.collapse',function(){
  var activeMenu = $('.collapsible > [aria-expanded="true"]');
  var inactiveMenus = $('.collapsible > [aria-expanded="false"]');

  activeMenu.parent().addClass('active');
  inactiveMenus.parent().removeClass('active');
});



$(function(){
  $('.navbar-toggle').click(function(){
    if($("#LEFTPANEL").hasClass('close-pane')){
      $( "#LEFTPANEL" ).animate({
        left: "+=300"
      }, 350, function() {
            // Animation complete.
      });
      $("#LEFTPANEL").removeClass('close-pane').addClass('open-pane');
    } else {   	
      $( "#LEFTPANEL" ).animate({
        left: "-=300"
      }, 350, function() {
            // Animation complete.
      });
      $("#LEFTPANEL").removeClass('open-pane').addClass('close-pane');
    }
  });
});




























function updateClock() {
  var currentTime = new Date();

  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();

  var currentYear = currentTime.getFullYear();

  var months = new Array(12);
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";

  var days = new Array(7);
    days[0] = "Sunday";
    days[1] = "Monday";
    days[2] = "Tuesday";
    days[3] = "Wednesday";
    days[4] = "Thursday";
    days[5] = "Friday";
    days[6] = "Saturday";

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    var greetings = (currentHours < 12) ? "morning" : "afternoon";

    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";

    // Convert the hours component to 12-hour format if needed
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

    // Convert an hours component of "0" to "12"
    currentHours = (currentHours == 0) ? 12 : currentHours;

    // Compose the string for display
    var currentTimeString = currentHours + ":" + currentMinutes;

    // Update the time display
    document.getElementById("clock").firstChild.nodeValue = currentTimeString;
    document.getElementById("greetings").firstChild.nodeValue = greetings;
    document.getElementById("timeOfDay").firstChild.nodeValue = timeOfDay;
    document.getElementById("day").firstChild.nodeValue = days[currentTime.getDay()] + ", " + currentTime.getDate() + " " + months[currentTime.getMonth()] + " " + currentTime.getFullYear();
    setTimeout("updateClock()",1000);
  }
updateClock()
