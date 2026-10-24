// tipe data number

console.log(
  typeof 4,
  typeof 0.4,
  typeof 4e3,
  typeof 4e-3,
  typeof 0xff,
  typeof 0b1010,
  typeof 0o12,
); // number

const tabelPerbandingan = {
  "255 === 255.0 = ": 255 === 255.0, // perbandingan antara integer dengan float di javascript jika nilai numbernya sama maka akan bernilai true
  "255 === 0xff = ": 255 === 0xff, // perbandingan antara integer dengan hexadesimal di javascript jika nilai numbernya sama maka akan bernilai true
  "255 === 0b11111111 = ": 255 === 0b11111111, // perbandingan antara integer dengan binary di javascript jika nilai numbernya sama maka akan bernilai true
  "255 === 0o377 = ": 255 === 0o377, // perbandingan antara integer dengan octal di javascript jika nilai numbernya sama maka akan bernilai true
  "255n === 255 = ": 255n === 255, // perbandingan antara bigint dengan integer di javascript jika nilai numbernya sama maka akan bernilai false
};

/*
 * semua literal seperti 255, 0xff, 0b11111111, 0o377 saat dibaca oleh engine Javascript akan dikonversi menjadi number,
 * sehingga perbandingan antara literal-literal tersebut akan bernilai true.
 * Namun, jika dibandingkan dengan bigint (255n) maka akan bernilai false karena tipe datanya berbeda.
 */
console.table(tabelPerbandingan);

// KONVERSI STRING / VALUE YANG LAIN KE TIPE DATA NUMBER
const tabelKonversi = {
  // ketika parsing string ke number menggunakan constructor Number(), jika string yang dikonversi terdapat karakter selain angka
  // maka hasil konversinya akan menjadi NaN (Not a Number)
  "Number('n123') = ": Number("n123"),
  "Number('123n') = ": Number("123n"),
  "ParseInt('n123') = ": parseInt("n123"), // jika awal string sudah bukan karakter angka, maka hasil konversi akan menjadi NaN
  "ParseInt('123n') = ": parseInt("123n"),
  "ParseInt('1n2') = ": parseInt("1n2"), // jika ditengah tengah string ada karakter selain angka, maka hasil konversi akan berhenti di karakter tersebut
  // untuk konversi string ke number menggunakan parseFloat() akan sama seperti parseInt() hanya saja parseFloat() dapat mengkonversi angka desimal
};

console.table(tabelKonversi);
console.log("is NaN ? : ", Number.isNaN(Number("n1234")));
