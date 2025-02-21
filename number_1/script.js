document.getElementById("calculateBtn").onclick = function () {
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;

    document.getElementById("result").textContent = num1 + num2;
};
