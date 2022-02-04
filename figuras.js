console.group("Cuadrado");
const ladoCuadrado = 5;

console.log("Los lados del cuadrado: " + ladoCuadrado);

const perimetroCuadrado = ladoCuadrado => ladoCuadrado * 4;
console.log("El perimetro es: " + perimetroCuadrado(ladoCuadrado) + " cm")

const areaCuadrado = ladoCuadrado => ladoCuadrado ** 2;
console.log("El perimetro es: " + areaCuadrado(ladoCuadrado) + " cm2")
console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}