// tipe data bigInt
// salah satu tipe data primitif di JavaScript yang digunakan untuk merepresentasikan bilangan bulat yang sudah tidak bisa dijangkau lagi oleh tipe data Number.
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(typeof Number.MAX_SAFE_INTEGER);
// console.log("\n");
// console.log(Number.MAX_VALUE > Number.MAX_SAFE_INTEGER);

/*
 * tidak bisa mencampurkan tipe data BigInt dengan Number secara langsung, karena akan menghasilkan error.
 * Melakukan hal tersebut akan mengakibatkan hilangnya ketelitian matematis secara ambigu dan tanpa disadari
 */
// console.log(
//   typeof (() => {
//     return Number.MAX_SAFE_INTEGER + 1n;
//   })(),
// );

// membuat tipe data bigint adalah dengan menambahkan huruf n di akhir angka
const bigint1 = 1n;
console.table([typeof bigint1, bigint1]);

// Membuat tipe data bigint dengan menggunakan constructor BigInt()
const bigint2 = BigInt(1);
console.table([typeof bigint2, bigint2]);
