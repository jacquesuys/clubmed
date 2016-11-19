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
    title: /(Mr?s?)/i,
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

  var validate = function() {
    var isValid = true;

    $('.error').text('');

    var title = $('[name="title"]');
    if ( !regex.isTitle( title.val() ) ) {
      title.parent().find('.error').text('Title Please');
      isValid = false;
    }

    var firstname = $('[name="firstname"]');
    if ( !regex.isText( firstname.val() ) ) {
      firstname.parent().find('.error').text('Firstname Please');
      isValid = false;
    }

    var surname = $('[name="surname"]');
    if ( !regex.isText( surname.val() ) ) {
      surname.parent().find('.error').text('Surname Please');
      isValid = false;
    }

    var dob = $('[name="dob"]');
    if ( !regex.isDate( dob.val() ) ) {
      dob.parent().parent().find('.error').text('Date of Birth Please');
      isValid = false;
    }

    var client = $('[name="client"]');
    if ( !regex.isNumber( client.val() ) && client.val().length ) {
      client.parent().find('.error').text('Only a Number Please');
      isValid = false;
    }

    var tel = $('[name="tel"]');
    if ( !regex.isTel( tel.val() ) ) {
      tel.parent().find('.error').text('Valid Telephone Number Please');
      isValid = false;
    }

    var email = $('[name="email"]');
    if ( !regex.isEmail( email.val() ) ) {
      email.parent().find('.error').text('Valid Email Please');
      isValid = false;
    }

    var arrival = $('[name="arrival"]');
    if ( !regex.isDate( arrival.val() ) ) {
      arrival.parent().parent().find('.error').text('Date of Arrival Please');
      isValid = false;
    }

    var favourite = $('[name="favourite"]');
    if ( !regex.isText( favourite.val() ) ) {
      favourite.parent().find('.error').text('Make a Selection Please');
      isValid = false;
    }

    var further = $('[name="further"]');
    if ( !regex.isText( further.val() ) ) {
      further.parent().find('.error').text('Make a Selection Please');
      isValid = false;
    }

    var villa = $('[name="villa"]');
    if ( !regex.isText( villa.val() ) ) {
      villa.parent().find('.error').text('Make a Selection Please');
      isValid = false;
    }

    var flights = $('[name="flights"]');
    if ( !regex.isText( flights.val() ) ) {
      flights.parent().find('.error').text('Make a Selection Please');
      isValid = false;
    }

    var duration = $('[name="duration"]');
    if ( !regex.isText( duration.val() ) ) {
      duration.parent().find('.error').text('Make a Selection Please');
      isValid = false;
    }

    var adults = $('[name="adults"]');
    if ( !adults.val().length ) {
      adults.parent().find('.error').text('Make a Selection Please');
      isValid = false;
    }

    var children = $('[name="children"]');
    if ( !children.val().length ) {
      children.parent().find('.error').text('Make a Selection Please');
      isValid = false;
    }

    return isValid;
  }

  $('form').on('submit', function(e) {
    
    // We intercept the data, 
    // perform our own regex validation due to date selectors

    e.preventDefault();
    var url = $(this).attr('action');
    var data = $(this).serialize();

    console.log( validate() );

    if ( validate() ) {

      $.ajax({
        type: "POST",
        url: url,
        data: data,
        dataType: "JSON",
        success: function() {
          console.log(data);
        },
        error: function(error) {
          console.log(data);
        }
      });

      $('#myModal').modal('show');

      $(this).removeClass('errors');

    } else {

      $(this).addClass('errors');
    }
  });
});
