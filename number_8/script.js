

function checkEvenOrOdd() {
    let number = document.getElementById("numberInput").value;

    // Convert the input value to a number
    number = Number(number);

    // Check if the input is empty or not a valid number
    if (isNaN(number) || number === "") {
        document.getElementById("result").innerText = "Please enter a number!";
    } else if (number % 2 === 0) {
        document.getElementById("result").innerText = "Even";
    } else {
        document.getElementById("result").innerText = "Odd";
    }
}
