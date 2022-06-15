let num1 = 0
let num2 = 0

do {
    num1 = parseInt(prompt("Escribe un número"))
    num2 = parseInt(prompt("Escribe otro número"))

    if (num2 !=0) alert(`La división entre los dos números es ${division(num1, num2)}`)

} while (num2 != 0)

function division(num1, num2) {
    return num1 / num2
}