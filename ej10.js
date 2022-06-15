const triangulo = 1
const circulo = 2
const cuadrado = 3

let figura = parseInt(prompt("Indica qué figura quieres calcular:\n1 - Triángulo\n2 - Círculo\n3 - Cuadrado"))

if (figura === triangulo) {
    let base = parseInt(prompt("Indica la base"))
    let altura = parseInt(prompt("Indica la altura"))

    alert(`El área del triángulo es ${areaTriangulo(base, altura)}`)

} else if (figura === circulo) {
    let radio = parseInt(prompt("Indica el radio"))

    alert(`El área del cículo es ${areaCirculo(radio)}`)

} else if (figura === cuadrado) {
    let lado = parseInt(prompt("Indica el lado"))

    alert(`El área del cuadrado es ${areaCuadrado(lado)}`)
    
} else {
    alert(`Valor no válido!`)
}

function areaTriangulo(base, altura) {
    return parseInt((base * altura) / 2)
}

function areaCirculo(radio) {
    return parseInt((radio**2) * Math.PI)
}

function areaCuadrado(lado) {
    return parseInt(lado * lado)
}