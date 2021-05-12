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
    console.log(
      `Option: ${option.title} \n ${
        option.onSelected
      } \n ${option.subOptions.map(
        (subO, i) =>
          `Sub Opcion ${i + 1}: ${subO.title} \n ${subO.subOptions.map(
            (subO, i) =>
              `SubSub ${i + 1}: ${subO.title} \n ${subO.subOptions.map(
                (subO, i) => `SubSubSub ${i}: ${subO.title} `
              )}`
          )}`
      )}`
    );
  });
};

// Usa el menu de referencia (menu3)
const primerElemento = (menu) => {
  const firstFilter = menu.find((o) => o.visible === true);
  const secondFilter = firstFilter.subOptions.find(
    (subO) => subO.visible === true
  );
  const thirdFilter = secondFilter.subOptions.find(
    (subO) => subO.visible === true
  );
  return thirdFilter;
};

// Para este ejrcicio no hay tests automaticos :O
