document
  .getElementById("kirim-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;

    if (nama === "" || email === "" || alamat === "") {
      alert("Masukan data Dengan Lengkap");
    } else if (!email.endsWith("@gmail.com")) {
      alert("Email Salah");
      email = document.getElementById("email").value = "";
    } else {
      alert(
        "Data yang dikirim:\nNama: " +
          nama +
          "\nEmail: " +
          email +
          "\nAlamat: " +
          alamat
      );
      document.getElementById("nama").value = "";
      document.getElementById("email").value = "";
      document.getElementById("alamat").value = "";
    }
  });
