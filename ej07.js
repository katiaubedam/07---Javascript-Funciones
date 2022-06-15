let num = parseInt(prompt("Escribe un número"))

esPar(num)? alert("El número es par") : alert("El número es impar")


function esPar(num) {
    return num % 2 === 0 ? true : false
}