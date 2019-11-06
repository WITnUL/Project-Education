var kesempatan_login = 5;
function cek_login() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  if (email == "witsudi217@gmail.com" && pass == "witsudy12345") {
    alert("Login Berhasil");
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
  } else {
    if (kesempatan_login == 0) {
      alert("Kesempatan login tidak tersedia");
    } else {
      kesempatan_login -= 1;
      alert("Login gagal, Tersisa " + kesempatan_login + " Kesempatan login");
      if (kesempatan_login == 0) {
        document.getElementById("email").disable = true;
        document.getElementById("pass").disable = true;
        document.getElementById("login").disable = true;
      }
    }
  }
}
