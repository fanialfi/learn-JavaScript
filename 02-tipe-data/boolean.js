// tipe data boolean
// nilai boolean hanya memiliki dua nilai yaitu true dan false

const isTrue = true;
const isFalse = false;

const isTrue2 = isTrue === false;
const isFalse2 = isFalse === true;

console.table([isTrue, isFalse, isTrue2, isFalse2]);

// menghasilkan nilai boolean dari operasi relational (<, >, <=, >=) operasi equality (==, ===, !=, !==), dan operasi logical NOT
const isTrue3 = 1 < 2;
const isFalse3 = 1 > 2;
const isTrue4 = 1 <= 1;
const isWhat = !(1 >= 1 || 10 <= 100); // false

console.table([isTrue3, isFalse3, isTrue4, isWhat]);
