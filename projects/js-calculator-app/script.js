const display = document.getElementById("display");
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");
let currValue = "";
let prevValue = "";
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnText = button.textContent;
    const lastChar = display.value.slice(-1);

    if (
      (btnText === "+" ||
        btnText === "–" ||
        btnText === "×" ||
        btnText === "÷" ||
        btnText === "%") &&
      (lastChar === "+" ||
        lastChar === "–" ||
        lastChar === "×" ||
        lastChar === "÷" ||
        lastChar === "%")
    ) {
      display.value = display.value.slice(0, -1) + btnText;
      operator = btnText;
      return;
    }

    if (
      display.value === "" &&
      (btnText === "+" ||
        btnText === "–" ||
        btnText === "×" ||
        btnText === "÷" ||
        btnText === "%")
    ) {
      return;
    }

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
      currValue += btnText;
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

    if (prevValue !== "" && currValue !== "") {
      prevValue = parseFloat(prevValue);
      currValue = parseFloat(currValue);

      if (operator === "+") {
        result.value = prevValue + currValue;
      }
      if (operator === "–") {
        result.value = prevValue - currValue;
      }
      if (operator === "×") {
        result.value = prevValue * currValue;
      }
      if (operator === "÷") {
        if (currValue !== 0) {
          result.value = prevValue / currValue;
        } else {
          result.value = "Error";
        }
      }

      currValue = parseFloat(result.value);
      prevValue = "";
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

    if (btnText === "±") {
      if (currValue !== "") {
        currValue = (-parseFloat(currValue)).toString();

        const lastNumRegex = /[0-9.]+$/;
        display.value = display.value.replace(lastNumRegex, currValue);
      }
      return;
    }

    if (btnText === "=") {
      if (result.value === "") {
        return;
      }
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
