// Polymorphism: The ability of something to be displayed in more than one form
// defining a parent with default attributes and methods
function BankAccount(agency, account, balance) {
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}

BankAccount.prototype.withdraw = function(value) {
    if (this.balance < value) {
        return `Insufficient balance to withdraw, current Balance: $${this.balance}`
    }

    this.balance -= value;
    console.log(`Current balance after withdraw: ${this.balance}`)
}
BankAccount.prototype.deposit = function(value) {
    this.balance += value
    console.log(`Current balance after the deposit: ${this.balance}`)
}

// Specializing the BankAccount to Checking account which has a limit

function CheckingAccount(agency, account, balance, limit) {
    BankAccount.call(this, agency, account, balance)
    this.limit = limit
}

CheckingAccount.prototype = Object.create(BankAccount.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

CheckingAccount.prototype.withdraw = function(value) {
    if (value > this.balance + this.limit) {
        return `Insufficient balance to withdraw: $${this.balance + this.limit}`
    }

    this.balance -= value;
    console.log(`Current balance after withdraw, current Balance: $${this.balance + this.limit}`)
}

const ca = new CheckingAccount(10, 11, 1000, 200);

function SavingsAccount(agency, account, balance) {
    BankAccount.call(this, agency, account, balance)
}

SavingsAccount.prototype = Object.create(BankAccount.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

const sa = new SavingsAccount(10, 11, 1000);
console.log(sa.withdraw(1201))
