// console.log("Hello world")

const form = document.querySelector("#billForm");
const warn = document.querySelector("#warn");

const twoThos = document.querySelector("#twoThos");
const fivHun = document.querySelector("#fivHun");
const hun = document.querySelector("#hun");
const twent = document.querySelector("#twent");
const ten = document.querySelector("#ten");
const fiv = document.querySelector("#fiv");
const one = document.querySelector("#one");

var returnCash = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  returnCash = 0;
  const bill = this.bill.value;
  const paid = this.paid.value;

  // console.log(bill)
  // console.log(paid)

  if (bill === "" || paid === "") {
    warn.innerText = "Enter the fields correctly";
  } else if (bill < 0 || paid < 0) {
    warn.innerText = "Enter the fields correctly , cash connot be negative";
  } else if (bill - paid > 0) {
    warn.innerText = `Customer has to pay ${bill - paid} rupees more`;
  } else if (bill <= paid) {
    warn.innerText = `Returning amount : ${paid - bill}`;
    cashReturn(paid - bill);
  }
});

function cashReturn(amount) {
  // console.log("hello world")

  if (amount > 0) {
    returnCash = amount / 2000;
    amount = amount % 2000;
    twoThos.innerText = returnCash.toString().split(".")[0];
  }
  if (amount > 0) {
    returnCash = amount / 500;
    amount = amount % 500;
    fivHun.innerText = returnCash.toString().split(".")[0];
  }
  if (amount > 0) {
    returnCash = amount / 100;
    amount = amount % 100;
    hun.innerText = returnCash.toString().split(".")[0];
  }
  if (amount > 0) {
    returnCash = amount / 20;
    amount = amount % 20;
    twent.innerText = returnCash.toString().split(".")[0];
  }
  if (amount > 0) {
    returnCash = amount / 10;
    amount = amount % 10;
    ten.innerText = returnCash.toString().split(".")[0];
  }
  if (amount > 0) {
    returnCash = amount / 5;
    amount = amount % 5;
    fiv.innerText = returnCash.toString().split(".")[0];
  }
  if (amount > 0) {
    returnCash = amount / 1;
    amount = amount % 1;
    one.innerText = returnCash.toString().split(".")[0];
  }
}
