function Bank(bankName, balance = 0) {
  this.bankName = bankName;
  this.balance = balance;
}

Bank.prototype.deposit = function (amount) {
  this.balance += Number(amount);
  return `Saldo anda sekarang ${this.balance}`;
};

Bank.prototype.withdraw = function (amount) {
  if (this.balance >= Number(amount)) {
    this.balance -= Number(amount);
  } else {
    console.log("Saldo tidak cukup");
  }
};

Bank.prototype.getBalance = function () {
  return `Saldo anda sekarang ${this.balance}`;
};

const bca = new Bank("BCA", 0);

function User(name, address, age, bank) {
  this.name = name;
  this.address = address;
  this.age = age;
  this.bank = bank;
}

User.prototype.great = function () {
  return "hallo " + this.name;
};

const alfi = new User("Alfi", "Karanganyar", 19, bca);
