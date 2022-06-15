let num = parseInt(prompt("Escribe un número"))

num >= 0 ? alert(`${num} tiene ${cifrasNum(num)} cifra(s)`) : alert("No se aceptan números negativos!")

function cifrasNum(num) {
    return num.toString().length
}