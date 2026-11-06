// object prototype inheritance
// mewriskan properti dan method dari object parent ke object child

// object parent
const user = {
  name: "Fani Al",
  age: 30,
};

// object inheritance
const admin = {
  __proto__: user, // mewarisi properti dan method dari object user
  role: "admin",
  sayHello: function () {
    return `Hallo, nama saya "${this.name}", saya disini sebagai ${this.role}`;
  },
};

const guest = {
  __proto__: user, // mewarisi properti dan method dari object user
  role: "guest",
  sayHello: function () {
    return `Hallo, nama saya "${this.name}", saya disini sebagai ${this.role}`;
  },
};

console.log(admin.age); // ketika nama properti tidak ada di object, maka secara otomatis akan mengecek dulu ke object prototype nya, jika tidak ada juga maka akan mengembalikan undefined
console.log(admin.name);
console.log(admin.sayHello());
console.log(guest.sayHello());

const animal = {
  jumps: null,
};
const rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // true
console.log(rabbit.__proto__.jumps); // null
delete rabbit.jumps;

console.log(rabbit.jumps); // null
delete rabbit.jumps;

console.log(rabbit.jumps); // null (tetap null dan bukan undefined, karena command delete hanya menghapus properti dari object itu sendiri, bukan object inheritance-nya);
delete animal.jumps; // tapi jika yang dihapus adalah properti dari object inheritance-nya, maka akan mengembalikan undefined

console.log(rabbit.jumps); // undefined
