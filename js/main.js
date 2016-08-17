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

    // The regexes
    var title = /(Mr?s?)/g;
    var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var word = /\w+/gi; // this needs more work
    var tel = /\b\d{3}[-.\s]?\d{3}[-.\s]]?\d{4}\b/;
    var number = /[0-9]/g;

    var regex = {
      isText: function(str) {
        return word.test(str);
      },
      isEmail: function(email) {
        return email.test(email);
      },
      isTel: function(tel) {
        return tel.test(tel);
      },
      isTitle: function(title) {
        return title.test(title);
      },
      isNumber: function(num) {
        return number.test(num);
      }
    }

    e.preventDefault();
    console.log($(this).serialize());
    // $('#myModal').modal('show');

    $(this).addClass('errors');
  });
});