
let equal = document.getElementById("equal")
let numm = [document.getElementById("0"),
document.getElementById("1"),
document.getElementById("2"),
document.getElementById("3"),
document.getElementById("4"),
document.getElementById("5"),
document.getElementById("6"),
document.getElementById("7"),
document.getElementById("8"),
document.getElementById("9"),
document.getElementById("+"),
document.getElementById("-"),
document.getElementById("/"),
document.getElementById("*"),
document.getElementById("<"),
document.getElementById(">"),
document.getElementById("."),
document.getElementById("reset")
]
var numero = ""

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
    document.getElementById("resultado").value = " ";
}
equal.addEventListener("click", () => operation());
numm[0].addEventListener("click", () => numbers(numm[0].textContent))
numm[1].addEventListener("click", () => numbers(numm[1].textContent))
numm[2].addEventListener("click", () => numbers(numm[2].textContent))
numm[3].addEventListener("click", () => numbers(numm[3].textContent))
numm[4].addEventListener("click", () => numbers(numm[4].textContent))
numm[5].addEventListener("click", () => numbers(numm[5].textContent))
numm[6].addEventListener("click", () => numbers(numm[6].textContent))
numm[7].addEventListener("click", () => numbers(numm[7].textContent))
numm[8].addEventListener("click", () => numbers(numm[8].textContent))
numm[9].addEventListener("click", () => numbers(numm[9].textContent))
numm[10].addEventListener("click", () => numbers(numm[10].textContent))
numm[11].addEventListener("click", () => numbers(numm[11].textContent))
numm[12].addEventListener("click", () => numbers(numm[12].textContent))
numm[13].addEventListener("click", () => numbers(numm[13].textContent))
numm[14].addEventListener("click", () => numbers(numm[14].textContent))
numm[15].addEventListener("click", () => numbers(numm[15].textContent))
numm[16].addEventListener("click", numero = numm)