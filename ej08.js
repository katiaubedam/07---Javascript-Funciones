let num = parseInt(prompt("Escribe un número"))

alert(`El factorial de ${num} es ${factorial(num)}`)

function factorial(num) {
    if (num === 0) return 0

    let resultado = 1
    for (let i = 1; i <= num; i++) {
        resultado *= i
    }

    return resultado
}