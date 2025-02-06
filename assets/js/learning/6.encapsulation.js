class BankAccount {
  #balance = 100; //(#diamankan, tidak bisa diakses diluar class)

  deposit(amount) {
    //this.#balance = this.#balance + amount; (sama penulisan)
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const accaountBCA = new BankAccount();
console.log(accaountBCA.getBalance());

accaountBCA.deposit(800);
console.log(accaountBCA.getBalance);
