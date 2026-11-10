const mySet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// melakukan iterasi menggunakan method bawaan Set.forEach
mySet.forEach((value, key, set) => {
  if (value % 2 === 1) {
    set.delete(key);
  }
});
console.log(mySet);

// melakukan iterasi menggunakan for of
const mySet2 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
for (const element of mySet2.values()) {
  if (element % 2 == 1) {
    mySet2.delete(element);
  }
}
console.log(mySet2);

// melakukan iterasi menggunakan do while loop
const myset3 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const iterataor = myset3.values();
let { value, done } = iterataor.next();

do {
  if (value % 2 === 1) {
    // obect setIterator hanya bisa diiterasi saja, tidak bisa dimodifikasi objectnya
    myset3.delete(value);
  }
  ({ value, done } = iterataor.next()); // jika tidak diberi kurung, maka {} dianggap sebagai block code
} while (!done);
console.log(iterataor);
console.log(myset3);
