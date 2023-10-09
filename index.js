const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;
const feetToMeter = 0.3048;
const gallonToLiter = 3.78541;
const poundToKilo = 0.453592;

const lengthP = document.querySelector("#length-p");
const volumeP = document.querySelector("#volume-p");
const massP = document.querySelector("#mass-p");

const inputEl = document.querySelector("#input-el");
const convertBtn = document.querySelector("#convert-btn");

convertBtn.addEventListener('click', function() {
  const inputValue = inputEl.value;
  
  const lengthResult = inputValue * meterToFeet;
  const volumeResult = inputValue * literToGallon;
  const massResult = inputValue * kilogramToPound;
  const feetResult = inputValue * feetToMeter;
  const gallonResult = inputValue * gallonToLiter;
  const poundResult = inputValue * poundToKilo;

  if (inputValue === "" || inputValue === "0") { 
    lengthP.textContent = "";
    volumeP.textContent = "";
    massP.textContent = "";
    window.alert("Please enter a value!");
  } else {
  
    lengthP.innerHTML = `${inputValue} meters = <strong>${lengthResult.toFixed(3)} feet</strong> | ${inputValue} feet = <strong>${feetResult.toFixed(3)} meters</strong>`;
    volumeP.innerHTML = `${inputValue} liters = <strong>${volumeResult.toFixed(3)} gallons</strong> | ${inputValue} gallons = <strong>${gallonResult.toFixed(3)} liters</strong>`;
    massP.innerHTML = `${inputValue} kilos = <strong>${massResult.toFixed(3)} pounds</strong> | ${inputValue} pounds = <strong>${poundResult.toFixed(3)} kilos</strong>`;
    
    lengthP.onclick = function() {
      alert("Don't click me, I'm afraid! I'm just a <p>!");
    };

    volumeP.onclick = function() {
      alert("Don't click me, I'm afraid! I'm just a <p>!");
    };

    massP.onclick = function() {
      alert("Don't click me, I'm afraid! I'm just a <p>!");
    };
  }
});


