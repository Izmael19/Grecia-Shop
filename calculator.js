let equal = document.getElementById("equal")
let rest = document.getElementById("reset")

function numbers(value) {
    document.getElementById("resultado").value += value;
}
function operation(oper) {
    var oper = document.getElementById("resultado").value;
    if (oper == 0) {
        document.getElementById("resultado").value = "Without Calc";

    } else {
        document.getElementById("resultado").value = eval(oper);
    }
}

function reset() {
    document.getElementById("resultado").value = "";
}

const btns = document.querySelectorAll('button[id^=b]')

btns.forEach(btn => {

    btn.addEventListener('click', event => {
        numbers(event.target.textContent);
    });

});

equal.addEventListener("click", () => operation())
rest.addEventListener("click", () => reset())
