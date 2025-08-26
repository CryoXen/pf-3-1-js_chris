// Función que suma dos números
export function addTwoNumbers(a, b) {
  return(a + b);
}

// Función que resta dos números
export function subtractTwoNumbers(a, b) {
  return(a - b);
}

// Función que divide dos números
export function divideTwoNumbers(a, b) {
  return(a / b);
}

// Función que suma tres números
export function addThreeNumbers(a, b, c) {
  return(a + b + c);
}

// Función que encadena operadores 
export function chainOperations(a, b, c, ) {
  return((a + b) / c);
}


//Se llaman las funciones, con los valores a operar
//para ver su funcionamiento en consola
addTwoNumbers(2,3);
subtractTwoNumbers(5,3);
divideTwoNumbers(10,2);
addThreeNumbers(1,2,3);
chainOperations(1,2,3);

//Funciones implementadas con prompt y alert, tambien incluyendo un switch
//para seleccionar la operación a realizar (Algo mas dinamico y bonioy :3 )

const option = prompt(`Selecciona la operación que deseas realizar:\n
  1. Sumar dos números \n
  2. Restar dos números \n
  3. Dividir dos números \n
  4. Sumar tres números \n
  5. Operación encadenada`);

  switch(option) {
    case '1':
     const num1 = +prompt("ingresa el primer número:");
     const num2 = +prompt("ingresa el segundo número:");
     alert(`El resultado de la suma es: ${addTwoNumbers(num1,num2)}`);
     break;
    case '2':
     const num3 =  +prompt("ingresa el primer número:");
     const num4 = +prompt("ingresa el segundo número:");
     alert(`El resultado de la resta es: ${subtractTwoNumbers(num3,num4)}`)
     break
     case '3':
     const num5 = +prompt("ingresa el primer número:")
     const num6 = +prompt("ingresa el segundo número:")
     alert(`El resultado de la división es: ${divideTwoNumbers(num5, num6)}`)
     break
     case '4':
     const numero1 = +prompt("ingresa el primer número:")
     const numero2 = +prompt("ingresa el segundo número:")
     const numero3 = +prompt("ingresa el tercer número:")
     alert(`El resultado de la suma es: ${addThreeNumbers(numero1, numero2, numero3)}`)
     break
     case '5':
     const numero4 = +prompt("ingresa el primer número:")
     const numero5 = +prompt("ingresa el segundo número:")
     const numero6 = +prompt("ingresa el tercer número:")
     alert(`El resultado de la operación encadenada es: ${chainOperations(numero4, numero5, numero6)}`)
     break
     default:
     alert("Opción no válida, ingresa un número del 1 al 5")};