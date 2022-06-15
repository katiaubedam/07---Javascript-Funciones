let num1 = parseInt(prompt("Escribe un número"))
let num2 = parseInt(prompt("Escribe otro número"))

let num3 = sumar(num1, num2)

console.log(num3)

function sumar(num1, num2) {
    return num1 + num2
}
