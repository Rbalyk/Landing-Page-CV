$(document).ready(function () {

  //Check field
  $('#ss-form .form-control').focus(function () {
    $(this).parents('.form-group').addClass('has-label');
  }).blur(function () {
    if ($(this).val() == '') {
      $(this).parents('.form-group').removeClass('has-label');
    }
  });


  //Form Validation
  var frm = $('#ss-form');
  frm.validate();

  $('#ss-submit').click(function (ev) {
    frm.validate();
    if ($('#ss-form').valid()) {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: frm.serialize(),
        success: function () {
          alert('Thank you for your submission');
        },
        beforeSend: function () {
          $('body').addClass("ss-submit-progress");
          $('.ss-submit-progress').css('cursor', 'progress');
        },
        complete: function () {
          $('.ss-submit-progress').removeAttr('style');
          $('body').removeClass("ss-submit-progress");
        }
      });
      frm[0].reset();
    } else {
      alert("Incorrectly filled form");
      $('#ss-form').valid();
    }
    ev.preventDefault();
    return false;
  });

  $('input').on('change',function () {
    if ($('#ss-form').valid()) {
      $('#ss-submit').css('opacity','1');
    }
  });
  $('textarea').on('change',function () {
    if ($('#ss-form').valid()) {
      $('#ss-submit').css('opacity','1');
    }
  });
});