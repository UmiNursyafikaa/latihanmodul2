function HasilPenjumlahan() {
  var angka1 = parseInt(document.getElementById("angka1").value);
  var angka2 = parseInt(document.getElementById("angka2").value);
  var hasil = angka1 + angka2;
  alert("Hasil Penjumlahan = " + hasil);
}
function Ulang() {
  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
}
