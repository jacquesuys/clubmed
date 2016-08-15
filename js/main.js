$(document).ready(function() {
  $('#datetimepicker1').datetimepicker();
  $('#datetimepicker2').datetimepicker();

  $('.dropdown a').on('click', function(e){
    e.preventDefault();
    var text = $(this).text();
    var $root = $(this).parent().parent().parent();
    
    $root.find('.btn').text(text);
    $root.parent().find('input[type="hidden"]').val(text);
  });

  $('form').on('submit', function(e) {
    // '/([0-9, A-Z])\w+/'
    e.preventDefault();
    console.log($(this).serialize());
    // $('#myModal').modal('show');

    $(this).addClass('errors');
  });
});