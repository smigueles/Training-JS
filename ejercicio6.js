//Ejercicio 6
import { menu1, menu2, menu3, object1 } from "./aux.js";

const listar = (o) => {
  return Object.keys(o)
    .map((key) => key + ": " + o[key])
    .join(", ");
};

const invertir = (o) => {
  let arrKeys = Object.keys(o);
  let auxObj = {};
  for (let key of arrKeys) {
    auxObj[o[key]] = key;
  }
  return auxObj;
};

// Usa los objetos de referencia (object1 y object2).
const ordenarPorId = (arrObj) => {
  return arrObj.sort((a, b) => {
    return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
  });
};

// Usa los menues de referencia (menu1 y menu2)
const imprimirArbol = (menu) => {
  return menu.map((option) => {
    console.log(`Option: ${option.title} \n ${option.onSelected}`);
    return imprimirArbol(option.subOptions);
  });
}; //recursividad

// Usa el menu de referencia (menu3)
const primerElemento1 = (menu) => {
  let el;
  menu.forEach((option) => {
    if (option.visible) {
      el = primerElemento(option.subOptions);
    }
  });
  return el;
};

// Para este ejrcicio no hay tests automaticos :O
