// sebuah tipe data yang digunakan untuk menyimpan banyak data, dimana di disetiap data memiliki penanda yang disebut index
// isi data dari array bisa apa saja

const arry = new Array(1, 2, 3, 4, 5);
const arry2 = [1, 2, 3, 4, 5];

// cara mengakses data pada array
console.log(arry[0]);
arry[0] = 100; // mengubah isi data array
console.log(arry);

arry.push("6", "7", "8", "9", "10", true, false, null, undefined, {
  name: "Fani",
  age: 20,
});
console.table(arry);

// instance method
// Aray.at() => mengembalikan nilai dari index tertentu, akan mengembalikan nilai undefined jika index tidak ada
arry.forEach((value, index) => {
  if (arry.at(index) === value) {
    console.log(`index ke-${index} nilainya : ${value}`);
  } else {
    console.log(`index ke-${index}
nilainya : ${arry.at(index)}`);
  }
});

// menggabungkan 2 array
const arry3 = arry.concat(arry2);
console.log(arry3);

// mengubah isi array menjadi string
const arry5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arry5.join(","));

// mencari index dari sebuah nilai pada array
const role = ["admin", "user", "superadmin"];
// jika value ada didalam array maka akan mengembalikan index dari value tersebut, tapi jika tidak ada maka akan mengembalikan nilai -1
// console.log(role.indexOf("guest"));
// console.log(role.indexOf("superadmin"));
if (role.indexOf("admin") !== -1) {
  console.log(
    `hallo ${role.at(role.indexOf("admin"))} selamat datang didalam sistem`,
  );
} else {
  console.log("maaf anda tidak diizinkan masuk kedalam sistem");
}

// mmebuat array baru hasil dari eksekusi function callback
const mapped = arry5.map((item) => {
  return item * 5; // tidak hanya perkalian saja yang bisa dilakukan disini
});
console.log(mapped);

// menghapus value array paling akhir
const poped = mapped.pop(); // mereturn value yang di hapus
console.log(poped);
console.log(mapped);

const fruits = ["apel", "kelengkeng", "melon"];
const fruit = fruits.pop();
console.log(fruit, fruits);

// menambahkan element ke array di bagian paling belakang
const fruitsLength = fruits.push(fruit);
if (fruits.length === fruitsLength) {
  console.log("panjang true");
  for (let index = 0; index < fruitsLength; index++) {
    console.log(fruits[index]);
  }
}
