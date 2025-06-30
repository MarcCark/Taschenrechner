
const display = document.getElementById("display");
const buttons = document.querySelectorAll("#calculator button");
let current = "";

buttons.forEach(btn => {
btn.addEventListener("click", () => {
    const val = btn.textContent;

    if (val === "C") {
    current = "";
    } else if (val === "=") {
    try {
        current = eval(current).toString();
    } catch {
        current = "Fehler";
    }
    } else {
    const operators = ['+', '-', '*', '/'];
    const lastChar = current.slice(-1);

    if (operators.includes(val)) {
        if (current === '') return;

        if (operators.includes(lastChar)) {
        current = current.slice(0, -1) + val;
        } else {
        current += val;
        }
    } else {
        current += val;
    }
    }

    display.textContent = current || "0";
});
});

