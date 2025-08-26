// Función que suma dos números
export function addTwoNumbers(a, b) {
  console.log(a + b);
}

// Función que resta dos números
export function subtractTwoNumbers(a, b) {
  console.log(a - b);
}

// Función que divide dos números
export function divideTwoNumbers(a, b) {
  console.log(a / b);
}

// Función que suma tres números
export function addThreeNumbers(a, b, c) {
  console.log(a + b + c);
}

// Función que encadena operadores 
export function chainOperations(a, b, c, ) {
  console.log((a + b) / c);
}


//Se llaman las funciones, con los valores a operar
//para ver su funcionamiento en consola
addTwoNumbers(2,3);
subtractTwoNumbers(5,3);
divideTwoNumbers(10,2);
addThreeNumbers(1,2,3);
chainOperations(1,2,3);