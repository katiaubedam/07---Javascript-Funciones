let num1 = parseInt(prompt("Escribe un número"))
let num2 = parseInt(prompt("Escribe un número"))

function esMayor(num1, num2) {
    if (num1 > num2) {
        return true
    } else {
        return false
    }
}

esMayor(num1, num2) ? console.log("El primer número es más grande") : console.log("El primer número no es más grande")