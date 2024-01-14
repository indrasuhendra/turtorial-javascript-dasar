// popup selmat datang!
alert(`Selamat datang di CODEBOX`)

// Menampilkan prompt untuk memasukkan nama dan usia
var nama = prompt("Masukkan nama Anda:");
var usia = prompt("Masukkan usia Anda:");

// Memeriksa apakah usia kurang dari 18 tahun
if (usia < 18) {
    alert("Maaf, Anda harus berusia 18 tahun atau lebih untuk melihat konten ini.");
    console.log("tidak dapat melihat")
} else {
    // Tampilkan konten jika usia memenuhi persyaratan
    alert("Selamat datang, " + nama + "! Anda dapat melihat konten ini.");
    console.log("boleh melihat")
}

 // Tampilan Hari
let now = new Date();
alert( now ); // tampilkan tanggal/waktu sekarang

console.log(`ini digunakan untuk debug, data kamu tidak akan disimpan ya.`)
