const dob = document.getElementById("dob");
const toDate = document.getElementById("toDate");
const age = document.getElementById("age");
const calBtn = document.getElementById("calculate");
let selectedDOB = [];
let selectedToDate = [];

dob.addEventListener("change", (e) => {
  selectedDOB = e.target.value.split("-").map(Number);
});

toDate.addEventListener("change", (e) => {
  selectedToDate = e.target.value.split("-").map(Number);
});

function calculate() {
  let years = selectedToDate[0] - selectedDOB[0];
  let months = selectedToDate[1] - selectedDOB[1];
  let days = selectedToDate[2] - selectedDOB[2];

  if (years < 0) {
    age.textContent = "Date of birth must be earlier than age until";
    return;
  }

  if (years === 0 && months <= 0 && days <= 0) {
    age.textContent = "Date of birth must be earlier than age until";
    return;
  }

  age.textContent = `Your age: ${years} Years ${months} Months ${days} Days`;
}

calBtn.addEventListener("click", () => calculate());
