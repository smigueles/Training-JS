import { test_ejercicio5 } from "./tests.js";

// Ejercicio 5
const capitalizar = (string) => {
  return string
    .trim()
    .toLowerCase()
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
};

const inverso = (str) => {
  let arr = str.split(" ");
  return arr.reverse().join(" ");
};

const sanitizar = (s, w) => {
  let regexp = new RegExp(w, "g");
  return s
    .trim()
    .replace(/\w\S*/g, (w) => w.replace(regexp, (w) => w.replace(/\w/g, "#")));
};

const contarArrays = (arr1, arr2) => {
  let counterArray = [];
  for (let i = 0; i < arr2.length; i++) {
    let n = 0;
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[i]) n++;
    }
    counterArray.push(n);
  }
  return counterArray;
};

const esSubSecuencia = (s1, s2) =>{
	let regexp = new RegExp(s2)
  return regexp.test(s1)
}

test_ejercicio5(capitalizar, inverso, sanitizar, contarArrays, esSubSecuencia);
