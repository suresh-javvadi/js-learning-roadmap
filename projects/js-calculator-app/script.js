const display = document.getElementById("display");
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");
const operators = ["+", "-", "×", "÷", "%"];

function tokenize(expression) {
  return expression.split(/(?=[+\-×÷%])|(?<=[+\-×÷%])/);
}

function calculate(tokens) {
  if (!tokens || tokens.length === 0) return "";

  // Handle percent
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "%") {
      if (i > 0 && typeof tokens[i - 1] === "number") {
        tokens[i - 1] = tokens[i - 1] / 100;
        tokens.splice(i, 1);
        i--;
      } else {
        return "Error";
      }
    }
  }

  // × and ÷
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    if (token === "×" || token === "÷") {
      const prev = stack.pop();
      const next = tokens[++i];
      if (token === "×") stack.push(prev * next);
      else {
        if (next === 0) return "Error";
        stack.push(prev / next);
      }
    } else {
      stack.push(token);
    }
  }

  // + and -
  let resultVal =
    typeof stack[0] === "number" ? stack[0] : parseFloat(stack[0]);
  for (let i = 1; i < stack.length; i += 2) {
    const operator = stack[i];
    const next =
      typeof stack[i + 1] === "number"
        ? stack[i + 1]
        : parseFloat(stack[i + 1]);
    if (operator === "+") resultVal += next;
    if (operator === "-") resultVal -= next;
  }
  return Math.round(resultVal * 1e10) / 1e10;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnText = button.textContent;

    // If digit or dot entered
    if ((btnText >= "0" && btnText <= "9") || btnText === ".") {
      display.value += btnText;

      // Only calculate for a valid expression ending in a number
      let expr = display.value;
      // Last character must be a digit or dot
      const lastChar = expr.slice(-1);
      if ((lastChar >= "0" && lastChar <= "9") || lastChar === ".") {
        // Make sure expression does not end in operator
        let tokens = tokenize(expr);
        if (
          tokens &&
          tokens.length > 0 &&
          !operators.includes(tokens[tokens.length - 1]) &&
          tokens.length >= 3 // At least x op y
        ) {
          tokens = tokens.map((token) =>
            operators.includes(token) ? token : parseFloat(token)
          );
          let ans = calculate(tokens);
          // Only show if not error and not empty
          result.value = ans === "Error" ? "Error" : ans;
        }
      }
    }

    // Operator
    else if (operators.includes(btnText)) {
      const lastChar = display.value.slice(-1);
      // Prevent two consecutive operators
      if (operators.includes(lastChar)) {
        display.value = display.value.slice(0, -1) + btnText;
      } else if (display.value !== "") {
        display.value += btnText;
      }
    }

    // Equals
    else if (btnText === "=") {
      let expr = display.value;
      let tokens = tokenize(expr);
      if (tokens) {
        tokens = tokens.map((token) =>
          operators.includes(token) ? token : parseFloat(token)
        );
        let calcResult = calculate(tokens);
        result.value = "";
        display.value = calcResult === "Error" ? "" : calcResult.toString();
      }
    }

    // Clear
    else if (btnText === "C") {
      display.value = "";
      result.value = "";
    }

    // Backspace
    else if (btnText === "←") {
      display.value = display.value.slice(0, -1);
      result.value = "";
    }

    // Square root
    else if (btnText === "√") {
      if (display.value !== "") {
        let expr = display.value;
        let tokens = tokenize(expr);
        let last = tokens.pop();
        if (!isNaN(last)) {
          if (parseFloat(last) < 0) {
            result.value = "Error";
            return;
          }
          let root = Math.sqrt(parseFloat(last)).toString();
          tokens.push(root);
          display.value = tokens.join("");
          if (tokens) {
            tokens = tokens.map((token) =>
              operators.includes(token) ? token : parseFloat(token)
            );
            let ans = calculate(tokens);
            result.value = ans === "Error" ? "Error" : ans;
          }
        }
      }
    }
  });
});
