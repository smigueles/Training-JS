// Despues de tanto video es probable que estes con ganas de programar un poco. La idea es que ahora ejercites un poco los conceptos que estuviste viendo.
// Para estos ejercicios tuvimos en cuenta aquellas cosas con las que te podes llegar a encontrar con regularidad.
// Acordate de consultar cualquier duda :)

import { test_ejercicio1 } from "./tests.js";

// Podes probar estos ejercicios con la consola
// Para mostrar algo en la consola usamos la función: console.log().

// Podes declarar y usar todas las funciones auxiliares que quieras.
// Podes (y te recomiendo) renombrar las variables (y algunas funciones) de entradas a cosas más declarativas ;)

// Ejercicio 1:
const sumatoria = (a) => {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    count += a[i];
  }
  return count;
};

const reverso = (a) => {
  for (let i = 0; i < a.length / 2; i++) {
    let temp = a[i];
    let invertedIndex = a.length - i - 1;
    a[i] = a[invertedIndex];
    a[invertedIndex] = temp;
  }
  return a;
};

const rotaciones = (a, n) => {
  const newA = [];
  let time = 0;
  if (a.length !== 0) {
    while (time < n) {
      newA.push(a.shift());
      time++;
    }
    return a.concat(newA);
  } else {
    return a;
  }
};

const mesetaMasLarga = (a) => {
  let cont = [];
  let total = 1;
  if (a.length !== 0) {
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] == a[i + 1]) {
        total++;
      } else {
        cont.push(total);
        total = 1;
      }
    }
    return Math.max(...cont);
  } else {
    return 0;
  }
};

test_ejercicio1(sumatoria, reverso, mesetaMasLarga, rotaciones);
