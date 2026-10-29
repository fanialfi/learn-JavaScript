console.log(global);
console.log("\n");
console.log(globalThis);

// secara umum `globalThis` digunakan untuk menggantikan cara penulisan untuk mengakses global object tergantung environment javascript dijalankan,
// misalnya javascript dijalankan di browser, maka global object adalah window, maka bisa digantikan dengan globalThis
// misalnya javascript dijalankan di nodejs, maka global object adalah global, maka bisa digantikan dengan menggunakan globalThis
