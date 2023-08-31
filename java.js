const celsiusfield = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const temptype = document.querySelector("#temp-type");
window.addEventListener("load", () => {
    degree.value = "";
    celsiusfield.innerHTML = "";
})


convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();
    convertBtn.innerHTML = "<span><i class='fa fa-spinner fa-spin'></i>converting...</span>"
    setTimeout(() => {
        convertBtn.innerHTML = "<span>convert</span"
    }, 1000
    )
})
function convertToCelsius() {
    let inputValue = degree.value;
    setTimeout(() => {
        if (temptype.value === "fahrenheit") {
            const fahrenheittocelsius = (inputValue - 32) * (5 / 9);
            celsiusfield.innerHTML = `${fahrenheittocelsius.toFixed(3)} &deg;
        c`
        }
        else if (temptype.value === "kelvin") {
            const kelvintocelsius = inputValue - 273.15;
            celsiusfield.innerHTML = `${kelvintocelsius.toFixed(3)}&deg;c`;
        }
    }, 1100)
}