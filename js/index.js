const $tips = document.querySelectorAll("button[data-tip-percentage]");
const $numberOfPeople = document.getElementById("number-of-people");
const $customTip = document.getElementById("custom-tip");
const $billAmount = document.getElementById("bill-amount");
const $tipAmount = document.getElementById("tip-amount");
const $totalAmount = document.getElementById("total-amount");
const $resetButton = document.getElementById("reset");

let tipPercentage = 0,
  tipAmountValue = 0,
  totalAmountValue = 0;

$tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    removeActiveTipColor();
    $customTip.value = "";
    tip.classList.add("active");
    tipPercentage = tip.dataset.tipPercentage;
  });
});

$customTip.addEventListener("input", () => {
  removeActiveTipColor();
  tipPercentage = $customTip.value;
});

$numberOfPeople.addEventListener("input", () => {
  if ($numberOfPeople.value == 0) {
    $numberOfPeople.classList.add("error");
    document.querySelector(".error-message").classList.add("show");
    return;
  }

  $numberOfPeople.classList.remove("error");
  document.querySelector(".error-message").classList.remove("show");

  tipAmountValue = (($billAmount.value * (tipPercentage / 100)) / $numberOfPeople.value).toFixed(2);
  totalAmountValue = (Number($billAmount.value / $numberOfPeople.value) + Number(tipAmountValue)).toFixed(2);

  $tipAmount.textContent = `$${tipAmountValue}`;
  $totalAmount.textContent = `$${totalAmountValue}`;
});

$resetButton.addEventListener("click", () => {
  removeActiveTipColor();
  $billAmount.value = "";
  $numberOfPeople.value = "";
  $customTip.value = "";
  $tipAmount.textContent = "$0.00";
  $totalAmount.textContent = "$0.00";
});

const removeActiveTipColor = () => {
  $tips.forEach((tip) => tip.classList.remove("active"));
};


