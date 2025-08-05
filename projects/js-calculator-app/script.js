const display = document.getElementById("display");
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");
let currValue = "";
let prevValue = "";
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnText = button.textContent;

    if (
      (btnText >= "0" && btnText <= "9") ||
      btnText === "." ||
      btnText === "+" ||
      btnText === "–" ||
      btnText === "×" ||
      btnText === "÷" ||
      btnText === "%"
    ) {
      display.value += btnText;
    }

    if ((btnText >= "0" && btnText <= "9") || btnText === ".") {
      currValue = parseFloat(btnText);
    } else if (
      btnText === "+" ||
      btnText === "–" ||
      btnText === "×" ||
      btnText === "÷" ||
      btnText === "%"
    ) {
      operator = btnText;
      prevValue = currValue;
      currValue = "";
    }

    if (operator === "+") {
      if (prevValue !== "" && currValue !== "") {
        result.value = prevValue + currValue;
        currValue = parseFloat(result.value);
        prevValue = "";
      }
    }

    if (operator === "–") {
      if (prevValue !== "" && currValue !== "") {
        result.value = prevValue - currValue;
        currValue = parseFloat(result.value);
        prevValue = "";
      }
    }

    if (operator === "×") {
      if (prevValue !== "" && currValue !== "") {
        result.value = prevValue * currValue;
        currValue = parseFloat(result.value);
        prevValue = "";
      }
    }

    if (operator === "÷") {
      if (prevValue !== "" && currValue !== "") {
        result.value = prevValue / currValue;
        currValue = parseFloat(result.value);
        prevValue = "";
      }
    }

    if (operator === "%") {
      if (prevValue !== "") {
        result.value = prevValue / 100;
        currValue = parseFloat(result.value);
        prevValue = "";
      }
    }

    if (operator === "%") {
      if (prevValue !== "") {
        result.value = prevValue / 100;
        currValue = parseFloat(result.value);
        prevValue = "";
      }
    }

    if (btnText === "C") {
      display.value = "";
      result.value = "";
      currValue = "";
      prevValue = "";
      operator = "";
    }

    if (btnText === "CE") {
      currValue = "";
      display.value = display.value.slice(0, -1);
      result.value = "";
    }

    if (btnText === "=") {
      display.value = result.value;
      currValue = parseFloat(result.value);
      prevValue = "";
      operator = "";
      result.value = "";
    }

    if (btnText === "←") {
      display.value = display.value.slice(0, -1);
      result.value = "";
    }
  });
});
