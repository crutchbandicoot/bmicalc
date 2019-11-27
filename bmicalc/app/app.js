//Function
const handleSubmit = (e) => {
  e.preventDefault();

  // Query Selectors
  const height = document.querySelector("#height-input").value;
  const weight = document.querySelector("#weight-input").value;
  const bmiDisplay = document.querySelector("#bmi-display");
  const scale = document.querySelector("#bmi-scale");

  //BMI formula
  const bmi = weight / height ** 2;

  //BMI Display
  bmiDisplay.textContent = Math.round(bmi);

  if (bmi <= 18.5) {
    scale.textContent = "Underweight";
  } else if (bmi <= 25) {
    scale.textContent = "Normal";
  } else if (bmi <= 30) {
    scale.textContent = "Overweight";
  } else {
    scale.textContent = "Obese";
  }
};

//Event Listners
document.addEventListener("submit", handleSubmit);
