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