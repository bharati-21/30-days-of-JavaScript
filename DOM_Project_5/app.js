const convertBtn = document.getElementById("convert-btn");
const inputTemp = document.getElementById("temp-cel");
const outputTemp = document.getElementById("temp-fah");

convertBtn.addEventListener('click', convertToFahrenheit);

function convertToFahrenheit(e) {
    e.preventDefault();
    let tempInCelsius = parseFloat(inputTemp.value);
    if(isNaN(tempInCelsius)) {
        alert("Please enter a valid temperature. Only Float or Integer values allowed");
        inputTemp.value="";
    }
    else {
        let tempInFahrenheit = (tempInCelsius * 9/5) + 32;
        outputTemp.value = tempInFahrenheit;
    }
}