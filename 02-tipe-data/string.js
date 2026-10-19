// tipe data string
// digunakan untuk menyimpan data yang akan direpresentasikan berupa teks

// membuat string dengan tanda kutip satu
const string1 = "Belajar JavaScript";

// membuat string dengan tanda kutip dua
const string2 = "Belajar JavaScript";
const nama = "alfi";

// membuat string dengan tanda kutip backtick
const string3 = `Belajar JavaScript
yang sedang belajar JavaScript adalah ${nama}`;

// membuat string dengan menggunakan object constructor
const string4 = new String("Belajar JavaScript with gua"); // mengembalikan nilai string yang dibungkus dalam object
console.log(string4);

// mengakses sebuah character dalam string
console.log(string1.charAt(4)); // mengembalikan karakter pada index ke-4 yang dimulai dari 0
console.log(typeof string4); // mengembalikan karakter pada index ke-4 yang dimulai dari 0
