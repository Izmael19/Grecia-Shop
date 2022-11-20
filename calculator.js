let equal = document.getElementById("equal")
let reset = document.getElementById("reset")
var number = ""

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

const btns = document.querySelectorAll('button[id^=button]')

btns.forEach(btn => {

   btn.addEventListener('click', event => {
        alert( event.target.textContent );
   });

});