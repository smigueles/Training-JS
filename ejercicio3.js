// Ejercicio 3:
import { test_ejercicio3 } from "./tests.js";
import {
  column,
  diagonal,
  trueDiagonal,
  arrayCopier,
  correctOrder,
} from "./aux1.js";

// No te preocupes por la complejidad temporal de estas funciones
const maximo = (M = [[]]) => {
  const vector = [];
  if (M.length !== 0 && M[0].length !== 0) {
    for (let x = 0; x < M.length; x++) {
      for (let y = 0; y < M[x].length; y++) {
        vector.push(M[x][y]);
      }
    }
    return Math.max(...vector);
  } else {
    return -1;
  }
};

const multiplicarMatrices = (M = [[]], W = [[]]) => {
  let fil_m1 = M.length;
  let col_m1 = M[0].length;
  let col_m2 = W[0].length;

  let multiplicacion = new Array(fil_m1);
  for (let x = 0; x < multiplicacion.length; x++) {
    multiplicacion[x] = new Array(col_m2).fill(0);
  }
  for (let x = 0; x < multiplicacion.length; x++) {
    for (let y = 0; y < multiplicacion[x].length; y++) {
      for (let z = 0; z < col_m1; z++) {
        multiplicacion[x][y] = multiplicacion[x][y] + M[x][z] * W[z][y];
      }
    }
  }
  return multiplicacion;
};

const esDegrade = (M) => {
  if (M[0].length === 0) return true;
  if (M[0].length !== 0) {
    if (trueDiagonal(M)) {
      if (diagonal(M).length === 1 && M.length > 1) {
        M[0] = column(M);
      }
      for (let i = 0; i < M.length; i++) {
        const arrayAux = arrayCopier(M, i);
        const orderedArray = correctOrder(M[i]);
        for (let j = 0; j < arrayAux.length; j++) {
          if (arrayAux[j] !== orderedArray[j]) {
            return false;
          }
        }
      }
      return true;
    } else {
      return false;
    }
  }
};

const esDamero = (M = [[]]) => {
  if (M[0].length === 0) return false;
  if (M.length === 1) return true;

  for (let x = 0; x < M.length; x++) {
    for (let y = 0; y < M[x].length; y++) {
      if (M[x][y] === M[x +1][y]) return false;
      else return true;
    }
  }
};

const esDameroRegular = (M = [[]]) => {
  return M.length === M[0].length && esDamero(M);
};

test_ejercicio3(
  maximo,
  multiplicarMatrices,
  esDegrade,
  esDamero,
  esDameroRegular
);
