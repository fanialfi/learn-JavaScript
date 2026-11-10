// set adalah koleksi dari beberapa value yang unik tanpa duplikasi jadi tidak bisa ada 2 value yang sama
// bagaimana jika ada nilai yang duplikat?
const myArryNumber = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
const mySet = new Set(myArryNumber); // secara otomatis nilai yang duplikat akan dihapus
console.log(myArryNumber);
console.log(mySet);

// value dari set dapat berisi tipe data apapun
const myArryAny = [
  1,
  2,
  3,
  true,
  true,
  false,
  false,
  { name: "fani", age: 19 },
  [1, 2, 3, 3, 4],
  "fani",
];
const mySetAny = new Set(myArryAny);
console.log(myArryAny, myArryAny.length);
console.log(mySetAny);

// element element set dapat diiterasi
// cara pertama
// tidak membuat set baru, tapi memodifikasi set
mySetAny.forEach((value, key, set) => {
  console.log(`key : ${key} value : ${value}`);
});

// membuat sebuah set hanya berisi angka genap
const setGenap = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
setGenap.forEach((value, key, set) => {
  if (value % 2 === 1) {
    console.log("benar");
    set.delete(key);
  }
});
console.log(setGenap);

// menambahkan isi dari set
setGenap.add(11);
console.log(setGenap);

// menghapus semua element set
mySet.clear();
mySetAny.clear();
setGenap.clear();

console.log(mySet); // objectnya masih ada, tapi isinya kosong
