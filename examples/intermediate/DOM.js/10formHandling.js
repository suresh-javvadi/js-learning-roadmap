const form1 = document.getElementById("form1");
const input1 = document.getElementById("input1");

// submit

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submited");
});

// input evnet
form1.addEventListener("input", () => {
  console.log(`input changed, input value is  ${input1.value}`); // fires when value of input change
});

//change event

form1.addEventListener("change", () => {
  console.log(`Final input after focus out`, input1.value); // fires when input loses focus
});

// focus & blur

input1.addEventListener("focus", () => console.log("Input focused"));
input1.addEventListener("blur", () => console.log("Input blured"));

// validation while submit

const myForm = document.getElementById("myForm");
const myUserName = document.getElementById("myUserName");
const myOutput = document.getElementById("myOutput");

const validateOutput = (e) => {
  e.preventDefault();
  const newvalue = myUserName.value.trim();

  if (newvalue === "") {
    console.log("Name is required");
    myOutput.textContent = "";
  } else {
    myOutput.textContent = `Hello ${newvalue}`;
  }
};

myForm.addEventListener("submit", (e) => validateOutput(e));

myForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page load

  const newvalue = myUserName.value.trim(); //Getting values from inputs.

  if (newvalue === "") {
    console.log("Name is required");
  } else {
    myOutput.textContent = `Hello ${newvalue}`;
  }
});
