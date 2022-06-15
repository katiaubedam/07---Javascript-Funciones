let euros = parseInt(prompt("Introduce la cantidad de euros"))
let moneda = prompt("Introduce la moneda a la que quieres convertirlo: (D)ólares, (Y)enes, (L)ibras")
moneda = moneda.charAt(0).toUpperCase()

cambioMoneda(euros, moneda)

function cambioMoneda(euros, moneda) {
    const cambioLibras = 0.86
    const cambioYenes = 129.852
    const cambioDolares = 1.28611
    let resultado

    if (moneda === "D") {
        resultado = euros * cambioDolares
        alert (`${euros}€ = ${resultado}$`)

    } else if (moneda === "Y") {
        resultado = euros * cambioYenes
        alert (`${euros}€ = ${resultado}¥`)

    } else if (moneda === "L") {
        resultado = euros * cambioLibras
        alert (`${euros}€ = ${resultado}£`)
        
    } else {
        alert(`La moneda introducida no es válida`)
    }
}