const numero = Number(prompt("Ingrese un número"))

const residuo = numero % 2;
if (residuo === 0) {
    console.log( "El numero", numero," es par");
} else {
    console.log( "El numero", numero," es impar");

}
