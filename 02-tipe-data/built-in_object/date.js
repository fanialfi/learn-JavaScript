// date built-in object
// merepresentasikan tanggal dan waktu yang dimulai sejak 1 Januari 1970 UTC
// terdiri dari 8 bagian yang bisa diambil nilai local-nya atau nilai utc-nya
// year, month, date, hours, minutes, seconds, milliseconds, day
// object Date itu tidak menyimpan informasi tentang zona waktu, object Date menyimpan informasi waktu dalam suatu angka milidetik yang dihitung sejak 1 januari 1970 UTC
const date = new Date();
console.log(date.getUTCFullYear()); // mengambil nilai tahun UTC

// Konstruktor Date bisa menerima beberapa argumen
/*
new Date() // jika tidak diberi parameter, maka akan mengambil waktu saat ini
new Date(value)
new Date(dateString)
new Date(dateObject)

new Date(year, monthIndex) // monthIndex dimulai dari 0, jadi 0 = Januari
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
*/

// contoh menggunakan new Date(value)
const dateInt = Math.floor(new Date(2005, 10).getTime() / 1000.0); // mengambil nilai waktu dalam bentuk integer method getTime() mengembalikan nilai dalam bentuk milisecond, dibagi 1000 agar menjadi detik
console.log(dateInt);
const date1 = new Date(dateInt);
console.log(date1);

// contoh menggunakan new Date(dateString)
const dateParse = Date.parse("2005-11-14"); // Date.parse() adalah static method yang mengembalikan nilai waktu dalam bentuk milisecond, dan cara penggunaannya tidak sama dengan new Date
const stringDate = "2005-11-14T07:30:33.000+07:00";
/*
format penulisan
YYYY-MM-DDTHH:mm:ss.sssZ
YYYY = tahun dengan format 4 digit
MM = bulan dengan format 2 digit
DD = tanggal dengan format 2 digit
T = pemisah antara tanggal dan waktu
HH = jam dengan format 2 digit (00-23)
mm = menit dengan format 2 digit (00-59)
ss = detik dengan format 2 digit (00-59)
sss = milidetik dengan format 3 digit (000-999)
Z = zona waktu dalam bentuk +hh:mm atau -hh:mm
*/
const dateString = new Date(stringDate);
console.log(Math.floor(dateString.getTime() / 1000.0)); // mengambil nilai waktu dalam bentuk milisecond

// static method Date yang mengembalikan nilai waktu dalam bentuk milidetik
const dateNow = Date.now(); // mengembalikan nilai waktu saat ini dalam bentuk milidetik
const dateParse2 = Date.parse("2005-11-14T07:30:33.000+07:00"); // mengembalikan nilai waktu dalam bentuk milidetik
console.table([dateNow, dateParse2]);
