// sebuah tempat yang digunakan untuk menyimpan sebuah nilai yang akan digunakan kembali di program yang lain
// untuk menggunakan variable, yang pertama kali adalah mendeklarasikannya,
// untuk mendeklarasikan variable, kita bisa menggunakan kata kunci var, let, atau const lalu diikuti dengan nama variable

let address; // mendeklarasikan variable
let myName = "Fani Alfirdaus"; // mendeklarasikan dan menginisialisasi variable
let myAge = 21;

// cara pendeklarasian variable juga bisa dilakukan dengan menggunakan keyword var, dan const
// pada awal mula javascript dibuat, keyword yang digunakan untuk mendeklarasikan sebuah variable hanyalah var, karena design ini membingungkan dan rawan kesalahan, maka dibuatlah keyword let dan const untuk mendeklarasikan variable

console.log(`Hallo nama saya ${myName} dan umur saya ${myAge} tahun`);
// untuk update value sebuah variable, kita bisa langsung menuliskan nama variable lalu diikuti dengan operator assignment (=) dan diikuti dengan value baru yang ingin kita masukkan ke dalam variable tersebut
myAge = 22;

console.log(`Hallo nama saya ${myName} dan umur saya ${myAge} tahun`);

// tipe tipe variable juga banyak, diatas tadi kita sudah menggunakan tipe data string dan number
let iAmLive = true; // tipe data boolean
let tes = 6 > 4; // kenyataannya tipe data boolean akan digunakan seperti ini
console.log(iAmLive, tes);

// tipe data variable
let myFamily = ["alfi", "audri", "pratista", "yuda", "suratno", "jiyem"]; // tipe data array
let myProfile = ["alfi", 21, "Karanganyar"]; // tipe data array juga bisa digunakan untuk menyimpan data dengan tipe data yang berbeda
console.log(myProfile);
console.log(myFamily[0]); // untuk mengakses data di dalam array, kita bisa menggunakan index dari data tersebut, index dimulai dari 0

// dynamic typing
// javascript itu dynamic typing language, jadi ketika mau membuat sebuah variable, kita tidak perlu menuliskan tipe data apa yang akan diguanakan divariable tersebut
// jika sewaktu waktu ingin mengubah isi dari variable juga bisa langsung sekalian mengubah tipe datanya
// misalnya waktu membuat sebuah variable tipe datanya adalah string lalu ingin diubah isinya dengan angka, seperti itu bisa di javascript
let myVariable = "fanialfi";
console.log("tipe variable : ", typeof myVariable);
myVariable = 1234;
console.log("tipe variable : ", typeof myVariable);

// Constant
// sama seperti variabel biasa, bedanya adalah nilai dari constant tidak bisa diubah,
// dan untuk pembuatannya itu sekalian diinisialisasikan beserta nilainya, tidak bisa dideklarasikan tanpa diinisialisasikan
// const myConstant; // error
const myConstant = "nilai tetap";
console.log(myConstant);
