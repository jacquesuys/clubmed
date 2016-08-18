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

  var regex = {
    title: /(Mr?s?)/,
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    word: /[a-z]/i,
    tel: /\b\d{3}[-.\s]?\d{3}[-.\s]]?\d{4}\b/,
    date: /\d{2}[-\/]\d{2}[-\/]\d{4}[\s]\d{2}:\d{2}[\s][a|p]m/i,
    number: /[0-9]/g,
    isText: function(val) {
      return this.word.test(val);
    },
    isEmail: function(val) {
      return this.email.test(val);
    },
    isTel: function(val) {
      return this.tel.test(val);
    },
    isDate: function(val) {
      return this.date.test(val);
    },
    isTitle: function(val) {
      return this.title.test(val);
    },
    isNumber: function(val) {
      return this.number.test(val);
    }
  };

  $('form').on('submit', function(e) {
    // * = non hidden inputs

    // title
    // first name *
    // surname *
    // birth
    // client *
    // tel *
    // email *
    // favourite
    // afield
    // room
    // flights
    // duration
    // arrival
    // room
    // adults
    // children
    // mini *
    // petit *
    // baby *
    // agent
    // newsletter *

    e.preventDefault();
    console.log($(this).serialize());
    // $('#myModal').modal('show');

    $(this).addClass('errors');
  });
});
