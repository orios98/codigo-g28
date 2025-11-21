// 4 formas de crear funciona 

// 1 clasica
function procesarPago(monto, dni, tieneDescuento) {
  // bloque de codigo que tendremos para esta funcion
  // al monto vamos a sumarle IGV
  // retornar un string que diga el monto final + dni
  let montoFinal = monto + (monto * 0.18)
  if (tieneDescuento) {
    // restar al monto funal un 10%
    montoFinal = montoFinal - (montoFinal * 0.1)
  }
  return "El monto final es: " + montoFinal + ", DNI: " + dni
}

// por defecto NO se ejecuta
// para que la funcion se ejecute tiene que ser llamada
// y como se llama?
console.log(procesarPago(450, "72812323", true))
console.log(procesarPago(500, "10021345", false))
console.log(procesarPago())