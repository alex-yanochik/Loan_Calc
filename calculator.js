window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}


function setupIntialValues() {
  const values = { amount: 0, years: 0, rate: 0 };
  const amountInput = document.getElementById("loan-amount");
  amountInput.value = values.amount;
  
  const yearsInput = document.getElementById("loan-years");
  yearsInput.value = values.years;

  const rateInput = document.getElementById("loan-rate");
  rateInput.value = values.rate;
  
  update();
}


function update() {
  let currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}


function calculateMonthlyPayment(values) {
  const p = values.amount;
  const i = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  const calc = ((p * i) / (1 - Math.pow((1 + i), -n))).toFixed(2);
  return calc;
}
    

function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = monthly;
}
