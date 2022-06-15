let year = 0

do {
    year = Math.abs(parseInt(prompt("Introduce el año")))
    
    if (year != 0) esBisiesto(year) ? alert("El año es bisiesto") : alert("El año no es bisiesto")

} while (year != 0)


function esBisiesto(year) {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0) ) {
        return true
    } else {
        return false
    }
}
