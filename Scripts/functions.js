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






























