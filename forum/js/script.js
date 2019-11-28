// Validation
$(document).ready(function () {
  $('#form').submit(function () {
    var email = $('#email').val().length;
    var pass = $('#pass').val().length;

    if (email == 0) {
      $(".pemberitahuan-email").css('display', 'block');
      return false;
    } else if (pass < 6) {
      $(".pemberitahuan-pass").css('display', 'block');
      return false;
    }
  });
});

// Show Hidden Password
$(document).ready(function () {
  var cek = $('#pass-checkbox').val();
  $('#pass-checkbox').click(function () {
    if ($(this).is(':checked')) {
      $('#pass').attr('type', 'text');
    } else {
      $('#pass').attr('type', 'password');
    }
  });
});

// Function Show and Hidden Profile & edit
$(document).ready(function () {
  $('#edit').click(function () {
    $('#isi-profile').hide();
    $('#isi-edit').show();
  });
  $('#profile').click(function () {
    $('#isi-profile').show();
    $('#isi-edit').hide();
  })
});

//modal ganti password
$(document).ready(function () {
  $('#muncul').click(function () {
    $('.trans-modal').show();
  });
  $('#close').click(function () {
    $('.trans-modal').hide();
  });
  $('.trans-modal').click(function () {
    $('.trans-modal').hide();
  })
});

// modal konfirmasi edit
$(document).ready(function () {
  $('#muncullah').click(function () {
    $('.trans-modal-konfir').show();
  });
  $('#close').click(function () {
    $('.trans-modal-konfir').hide();
  });
  $('.trans-modal-konfir').click(function () {
    $('.trans-modal-konfir').hide();
  })
});


$('#form').submit(function () {
  var email = $('#email').val();
  var password = $('#pass').val();
  var email1 = "witsudi@gmail.com";
  var pass1 = "witsudi217";

  if (email != email1 || password != pass1) {
    alert("Email atau Password salah")
  } else if (email == email1 && password == pass1) {
    window.location.href = "/forum/index.html"
    alert("login Succesfull")
  }
})


$('.tombolsearch2').click(function () {
  $('.search2').toggle();
})