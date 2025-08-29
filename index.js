const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
console.log("hello wolrd");
console.log("If you want to help me to make the site better follow this link")
console.log("https://github.com/OrangeJuicy69/DumbDragon")
