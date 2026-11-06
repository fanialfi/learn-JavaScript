// isNaN() function, digunakan untuk mengecek apakah sebuah nilai adalah NaN

const number = Number("12n3");
if (isNaN(number)) {
  console.log("Nilai bukan angka");
} else {
  console.log(`nilai adalah angka : ${number}`);
}
