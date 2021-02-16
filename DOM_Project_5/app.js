const convertBtn = document.getElementById("convert-btn");
const inputTemp = document.getElementById("temp-cel");
const outputTemp = document.getElementById("temp-fah");
const headingDiv = document.getElementById("heading");
const headerDiv = document.getElementById("header-div");


convertBtn.addEventListener('click', convertToFahrenheit);

function convertToFahrenheit(e) {
    e.preventDefault();
    let tempInCelsius = parseFloat(inputTemp.value);
    if(isNaN(tempInCelsius)) {
        raiseError();
        inputTemp.value="";
    }
    else {
        let tempInFahrenheit = (tempInCelsius * 9/5) + 32;
        outputTemp.value = tempInFahrenheit;
    }
}

function raiseError() {
    /*
    <div class="alert alert-danger" role="alert">
                        A simple danger alert—check it out!
                    </div>
    */

    const errorDiv = document.createElement("div");
    errorDiv.className="alert alert-danger mt-5 text-center";
    errorDiv.appendChild(document.createTextNode("Temperature input is invalid. Enter integer or float"));
    headerDiv.insertBefore(errorDiv, headingDiv.nextSibling);

    setTimeout(removerError, 3000);
}

function removerError() {
    headingDiv.nextSibling.style.display = "none";
}