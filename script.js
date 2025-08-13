// HOW IT WORKS 
document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll(".how-it-works .docs-list li");
  let index = 0;

  function showNext() {
    items.forEach(li => li.style.opacity = "0");
    items[index].style.opacity = "1";
    index = (index + 1) % items.length;
  }

  setInterval(showNext, 3000); // switch every 3 seconds
});









//LOAN CALCULATOR
function calculateLoan() {
  let amountInput = document.getElementById("amount");
  let monthsInput = document.getElementById("months");

  let amount = parseFloat(amountInput.value);
  let months = parseInt(monthsInput.value);

  if (amount < 500) {
    amount = 500;
    amountInput.value = 500;
  }

  if (months < 1) {
    months = 1;
    monthsInput.value = 1;
  }

  // Example calculation (30% interest simple calculation)
  let interestRate = 0.30;
  let total = amount + (amount * interestRate);
  let monthly = total / months;

  document.getElementById("result").textContent =
    `Total repayment: ZAR ${total.toFixed(2)} 
    | Monthly: ZAR ${monthly.toFixed(2)}`;
}
