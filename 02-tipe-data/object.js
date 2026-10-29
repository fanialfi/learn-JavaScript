// tipe data object
const introduction = {
  name: "Fani Alfirdaus", // name adalah key, dan "Fani Alfirdaus" adalah value
  age: 20,
  address: {
    country: "Indonesia",
    province: "Jawa Tengah",
    regency: "Karanganyar",
    subdistrict: "Matesih",
    village: "Koripan",
  },
};

console.log(`hai nama saya ${introduction.name}
umur saya ${introduction.age}
dan alamat saya di ${introduction.address.country}`);

// membuat object dengan menggunakan constructor function
// mendefinisikan terlebih dahulu function constructornya
function User(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}
const alfi = new User("fani", 19, "Karanganyar");
const fani = new User("alfi", 19, "Karanganyar");
console.log(alfi);
console.log(fani);

// sebuah object juga bisa memiliki properti dimana isinya adalah object lain
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
const car1 = new Car("Ford", "Model T", 1908, alfi);
const car2 = new Car("Volkswagen", "Type 1 (Beetle/Kodok)", 1938, fani);
console.log(`isi dari object car1 adalah ${Object.keys(car1)}`); // mendapatkan semua key di sebuah object

// menghapus sebuah keys di object
const obj = {
  a: 1,
  b: 2,
};
console.log(obj);
delete obj.a;
console.log(obj);

// menggunakan square bracket [] sebagai key dinamis, semua operasi yang ada didalam [] akan dijalankan terlebih dahulu
const keranjang = {
  [Date.now()]: "timestamp", // kurung siku [] digunakan untuk memberikan sinyal kepada parser supaya mengevaluasi expresi didalam kurung siku yang nantinya digunaakn sebagai key
  // "item" + 1: "item1", // jika sebuah key object yang digunakan sifatnya dinamis maka tidak bisa langsung menulisnya begitu saja
  ["item_" + 1]: "ini item",
  name: ["fani " + "alfi"], // jika square bracket ([]) digunakan di value field maka tipe datanya akan menjadi array (object);
};
console.log(keranjang);

// mengecek sebuah key didalam object apakah ada, adalah dengan menggunakan in operator
if ("name" in keranjang) {
  console.log(`name ada dikeranjang, dan isinya adalah ${keranjang.name}`);
}
