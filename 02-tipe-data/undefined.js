// tipe data undefined
// merepresentasikan primitive value undefined
// sebuah variable yang didefinisikan menggunakan keyword let dan juga belum diinisialisasikan nilainya maka nilai defaultnya adalah undefined

const undfn = undefined;
console.log(undfn); // output: undefined

(() => {
  // jangan memberikan nama sebuah variable /pun nama sebuah parameter dengan nama undefined,
  // kadang kita bingung mau mengakses variable / parameter undefined, atau mau mengisi dengan tipe data undefined
  const undefined = "foo";
  console.log(undefined);
})();

console.log(typeof undefined);
