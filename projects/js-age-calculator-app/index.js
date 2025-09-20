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
  if (selectedDOB.length !== 3 || selectedToDate.length !== 3) {
    age.textContent = "Please select both dates.";
    return;
  }

  let [dobYear, dobMonth, dobDay] = selectedDOB;
  let [toYear, toMonth, toDay] = selectedToDate;

  if (
    toYear < dobYear ||
    (toYear === dobYear && toMonth < dobMonth) ||
    (toYear === dobYear && toMonth === dobMonth && toDay <= dobDay)
  ) {
    age.textContent = "Date of birth must be earlier than 'Age Until' date";
    return;
  }

  let years = toYear - dobYear;
  let months = toMonth - dobMonth;
  let days = toDay - dobDay;

  if (days < 0) {
    const prevMonth = new Date(toYear, toMonth - 1, 0).getDate();
    days += prevMonth;
    months -= 1;

    console.log(prevMonth);
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  age.textContent = `Your age: ${years} Years ${months} Months ${days} Days`;
}

calBtn.addEventListener("click", calculate);
