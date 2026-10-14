const data = "ini adalah data tetap";
// data = "error"; // akan menjadi error karena mencoba mengubah nilai dari sebuah constant
console.log(data);

const profile = {
  name: "Fani Alfirdaus",
  address: "Indonesia",
};
profile.address = "Karanganyar"; // mengubah nilai dari property object
profile.age = 20;
// meskipun mengubah nilai dari sebuah property object, tapi constant masih merujuk pada object yang sama
console.log(profile);

const myArray = [1, 2, 3, 4, 5];
myArray.push(6);
// meskipun menambahkan data ke dalam array, tapi constant masih merujuk pada array yang sama
console.log(myArray);
