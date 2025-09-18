const button = document.getElementById("convert-btn");
const number = document.getElementById("number");
const output = document.getElementById("output");

const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
];

button.addEventListener("click", () => {
    if (number.value === "") {
        output.classList.remove("hidden", false);
        output.classList.toggle("alert", true);
        output.innerText = "Please enter a valid number";
    }
    else if (parseInt(number.value) <= 0) {
        output.classList.remove("hidden", false);
        output.classList.toggle("alert", true);
        output.innerText = "Please enter a number greater than or equal to 1";
    }
    else if (parseInt(number.value) >= 4000) {
        output.classList.remove("hidden", false);
        output.classList.toggle("alert", true);
        output.innerText = "Please enter a number less than or equal to 3999";
    }
    else {
        output.classList.remove("hidden", false);
        output.classList.toggle("alert", false);
        let result = "";
        let num = number.value
        for (const {value, numeral} of romanNumerals) {
            while (num >= value) {
                result += numeral;
                num -= value;
            }
        }
        output.innerText = result;
    }
    return;
});