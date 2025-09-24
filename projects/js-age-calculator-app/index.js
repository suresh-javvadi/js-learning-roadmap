const dob = document.getElementById("dob");
const toDate = document.getElementById("toDate");
const age = document.getElementById("age");
const calBtn = document.getElementById("calculate");

let timer;

function calculate() {
  if (!dob.value || !toDate.value) {
    age.textContent = "Please select both dates.";
    return;
  }

  const birthDate = new Date(dob.value);
  birthDate.setHours(0, 0, 0, 0);

  const untilDate = new Date(toDate.value);
  untilDate.setHours(0, 0, 0, 0);

  if (timer) clearInterval(timer);

  function updateAge() {
    const now = new Date();

    // Difference in milliseconds from DOB to current time
    const diffMs = now - birthDate;

    // Total units
    const totalSeconds = Math.floor(diffMs / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths =
      (untilDate.getFullYear() - birthDate.getFullYear()) * 12 +
      (untilDate.getMonth() - birthDate.getMonth());

    // Years, months, days based on DOB and To Date
    let years = untilDate.getFullYear() - birthDate.getFullYear();
    let months = untilDate.getMonth() - birthDate.getMonth();
    let days = untilDate.getDate() - birthDate.getDate();

    if (days < 0) {
      const prevMonth = new Date(
        untilDate.getFullYear(),
        untilDate.getMonth(),
        0
      ).getDate();
      days += prevMonth;
      months -= 1;
    }

    if (months < 0) {
      months += 12;
      years -= 1;
    }

    // Live hours, minutes, seconds since To Date
    const liveDiffMs = now - untilDate;
    const liveSeconds = Math.floor(liveDiffMs / 1000);
    const liveMinutes = Math.floor(liveSeconds / 60);
    const liveHours = Math.floor(liveMinutes / 60);

    age.innerHTML = `
      <strong>Detailed Age:</strong><br>
      ${years} Years, ${months} Months, ${days} Days, ${liveHours} Hours, ${
      liveMinutes % 60
    } Minutes, ${liveSeconds % 60} Seconds<br>
      Total Months: ${totalMonths}<br>
      Total Weeks: ${totalWeeks}<br>
      Total Days: ${totalDays}<br>
      Total Hours: ${totalHours}<br>
      Total Minutes: ${totalMinutes}<br>
      Total Seconds: ${totalSeconds}
    `;
  }

  updateAge(); // immediate update
  timer = setInterval(updateAge, 1000); // update every second
}

calBtn.addEventListener("click", calculate);
