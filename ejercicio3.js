// Ejercicio 3:
import { test_ejercicio3 } from "./tests.js";

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

const column = (M = [[]]) => {
  const aColumn = [];
  for (let i = 0; i < M.length; i++) {
    aColumn.push(M[i][0]);
  }
  return aColumn;
};

const arrayCopier = (M = [[]], i = 0) => {
  const copy = [];
  for (let x = 0; x < M[i].length; x++) {
    copy[x] = M[i][x];
  }
  return copy;
};

const correctOrder = (a = []) => {
  return a.sort((a, b) => {
    return a - b;
  });
};

const diagonal = (M = [[]]) => {
  const arrAux = [];
  for (let x = 0; x < M.length; x++) {
    for (let y = 0; y < M[x].length; y++) {
      if (x === y) {
        arrAux.push(M[x][y]);
      }
    }
  }
  return arrAux;
};

const diagonalIsTrue = (a = []) => {
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] !== a[i + 1]) {
      return false;
    }
  }
  return true;
};

const esDegrade = (M = [[]]) => {
  if (M[0].length === 0) return true;
  if (M[0].length !== 0) {
    const arrayDiagonal = diagonal(M);
    if (diagonalIsTrue(arrayDiagonal)) {
      if (arrayDiagonal.length === 1 && M.length > 1) {
        const oneColumn = column(M);

        M[0] = oneColumn;
      }
      for (let i = 0; i < M.length; i++) {
        const arrayCopy = arrayCopier(M, i);
        let arrayOrden = correctOrder(M[i]);
        for (let i = 0; i < arrayCopy.length; i++) {
          if (arrayCopy[i] !== arrayOrden[i]) {
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
      if (M[0][x] === M[1][x]) return false;
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
