// Object math hanya berkerja dengan tipe data Number, dan tidak dapat digunakan untuk tipe data lain seperti bigint

// Math.abs() adalah sebuah static method, jadi cara pemanggilannya adalah dengan menggunakan nama class Math, bukan dengan membuat object baru dari class Math
// secara garis besar method ini digunakan untuk mengubah nilai negatif menjadi positif, dan nilai positif tetap positif
// meskipun didalamnya berupa sting, akan tetap bisa

console.log("Math.abs()");
console.log(Math.abs("-5"), typeof Math.abs("-5")); // 5 number
console.log(Math.abs("5"), typeof Math.abs("5")); // 5 number

console.log("\nMath.cbrt()");
// Math.cbrt() digunakan untuk menghitung akar pangkat 3 dari sebuah angka,
// menghitung panjang sisi sebuah kubus dengan volume 125 cm3
const volume = 125;
const sisiKubus = Math.cbrt(volume);
console.log(
  `Panjang sisi kubus dengan volume ${volume} cm3 adalah ${sisiKubus} cm`,
);

console.log("\nMath.ceil()");
// Math.ceil() digunakan untuk membulatkan angka ke atas, misal 5.1 menjadi 6, 5.9 menjadi 6, dan 5.0 tetap menjadi 5
console.log(Math.ceil(5.1)); // 6
console.log(Math.ceil(5.9)); // 6
console.log(Math.ceil(5.0)); // 5
console.log(Math.ceil(-5.1)); // -5 dan bukan -6

console.log("\nMath.floor()");
// Math.floor() digunakan untuk membulatkan angka ke bawah, misal 5.1 menjadi 5, 5.9 menjadi 5, dan 5.0 tetap menjadi 5
console.log(Math.floor(5.1)); // 5
console.log(Math.floor(5.9)); // 5
console.log(Math.floor(5.0)); // 5
console.log(Math.floor(-5.1)); // -6 dan bukan -5

console.log("\nMath.random()");
// Math.random() digunakan untuk menghasilkan angka random antara 0 (inklusif) dan 1 (eksklusif)
// membuat angka random antara 1 dan 10
const randomNumber = Math.round(Math.random() * 10);
console.log(`Angka random antara 1 dan 10: ${randomNumber}`);
