import { test_ejercicio2 } from "./tests.js";

// Ejercicio 2:
const f1 = (arr = []) => {
  const newArr = [];
  if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      newArr.push(Math.trunc(arr[i] / 2));
    }
    return newArr;
  } else {
    return arr;
  }
};

// Para probar esta funcion podes usar faux1 y faux2 definidas en Aux.js
const f2 = (a = [], func) => {
  const array = [];
  if (a.lenght !== 0) {
    for (let i = 0; i < a.length; i++) {
      array.push(func(a[i]));
    }
    return array;
  } else {
    return [];
  }
};

const f3 = (a = [], n = 0) => {
  const newA = [];
  if (a.length !== 0) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] > n) {
        newA.push(a[i]);
      }
    }
    return newA;
  } else {
    return [];
  }
};

// Para probar esta funcion podes usar faux3 definida en Aux.js
const f4 = (a = [], func) => {
  const newA = [];
  if (a.length !== 0) {
    for (let i = 0; i < a.length; i++) {
      if (func(a[i])) {
        newA.push(a[i]);
      }
    }
    return newA;
  } else {
    return [];
  }
};

const f5 = (a = [], n = 0) => {
  let value = [];
  if (a.length !== 0) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] <= n) {
        value.push(a[i]);
      }
    }

    return value.shift();
  } else return -1;
};

// Para probar esta funcion podes usar faux3 definida en Aux.js
const f6 = (a, func) => {
  const value = [];
  for (let i = 0; i < a.length; i++) {
    if (func(a[i])) {
      value.push(a[i]);
      return value.shift();
    }
  }
  return -1;
};

test_ejercicio2(f1, f2, f3, f4, f5, f6);
