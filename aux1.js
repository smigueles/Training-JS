export const faux1 = function (n) {
  return n % 3;
};
export const faux2 = function (n) {
  return n * n;
};
export const faux3 = function (n) {
  for (let i = 2; i < n; i++) if (n % i === 0) return false;
  return n > 1;
};

export const column = (M = [[]]) => {
  const aColumn = [];
  for (let i = 0; i < M.length; i++) {
    aColumn.push(M[i][0]);
  }
  return aColumn;
};

export const arrayCopier = (M = [[]], i = 0) => {
  const copy = [];
  for (let x = 0; x < M[i].length; x++) {
    copy[x] = M[i][x];
  }
  return copy;
};

export const correctOrder = (a = []) => {
  return a.sort((a, b) => {
    return a - b;
  });
};

export const diagonal = (M = [[]]) => {
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

export const trueDiagonal = (M) => {
  const auxArr = diagonal(M);

  for (let i = 0; i < auxArr.length - 1; i++) {
    if (auxArr[i] !== auxArr[i + 1]) {
      return false;
    }
  }
  return true;
};

export const object1 = [
  { title: "Ordenable 2", id: 2 },
  { title: "Ordenable 5", id: 5 },
  { title: "Ordenable 1", id: 1 },
  { title: "Ordenable 6", id: 6 },
  { title: "Ordenable 3", id: 3 },
  { title: "Ordenable 7", id: 7 },
  { title: "Ordenable 9", id: 9 },
  { title: "Ordenable 4", id: 4 },
  { title: "Ordenable 8", id: 8 },
];

export const menu1 = [
  {
    title: "NivelA",
    onSelected: "Inserte función aqui",
    subOptions: [
      { title: "NivelAA", onSelected: "Inserte función aqui", subOptions: [] },
      { title: "NivelAB", onSelected: "Inserte función aqui", subOptions: [] },
    ],
  },
];

export const menu2 = [
  {
    title: "NivelA",
    onSelected: "Inserte función aqui",
    subOptions: [
      {
        title: "NivelAA",
        onSelected: "Inserte función aqui",
        subOptions: [
          {
            title: "NivelAAA",
            onSelected: "Inserte función aqui",
            subOptions: [],
          },
        ],
      },
      {
        title: "NivelAB",
        onSelected: "Inserte función aqui",
        subOptions: [
          {
            title: "NivelABA",
            onSelected: "Inserte función aqui",
            subOptions: [],
          },
          {
            title: "NivelABB",
            onSelected: "Inserte función aqui",
            subOptions: [],
          },
          {
            title: "NivelABC",
            onSelected: "Inserte función aqui",
            subOptions: [],
          },
        ],
      },
    ],
  },
  {
    title: "NivelB",
    onSelected: "Inserte función aqui",
    subOptions: [
      {
        title: "NivelBA",
        onSelected: "Inserte función aqui",
        subOptions: [
          {
            title: "NivelBAA",
            onSelected: "Inserte función aqui",
            subOptions: [],
          },
        ],
      },
      { title: "NivelBB", onSelected: "Inserte función aqui", subOptions: [] },
    ],
  },
  {
    title: "NivelC",
    onSelected: "Inserte función aqui",
    subOptions: [
      {
        title: "NivelCA",
        onSelected: "Inserte función aqui",
        subOptions: [
          {
            title: "NivelCAA",
            onSelected: "Inserte función aqui",
            subOptions: [],
          },
          {
            title: "NivelCAB",
            onSelected: "Inserte función aqui",
            subOptions: [
              {
                title: "NivelCABA",
                onSelected: "Inserte función aqui",
                subOptions: [],
              }, // Todo para decir de que lado de la gral paz estaba.
            ],
          },
        ],
      },
    ],
  },
];

export const menu3 = [
  {
    title: "NivelA",
    onSelected: "Inserte función aqui",
    visible: false,
    subOptions: [
      {
        title: "NivelAA",
        onSelected: "Inserte función aqui",
        visible: true,
        subOptions: [
          {
            title: "NivelAAA",
            onSelected: "Inserte función aqui",
            visible: true,
            subOptions: [],
          },
        ],
      },
      {
        title: "NivelAB",
        onSelected: "Inserte función aqui",
        visible: false,
        subOptions: [],
      },
    ],
  },
  {
    title: "NivelB",
    onSelected: "Inserte función aqui",
    visible: true,
    subOptions: [
      {
        title: "NivelBA",
        onSelected: "Inserte función aqui",
        visible: false,
        subOptions: [],
      },
      {
        title: "NivelBB",
        onSelected: "Inserte función aqui",
        visible: true,
        subOptions: [
          {
            title: "NivelBBA",
            onSelected: "Inserte función aqui",
            visible: false,
            subOptions: [],
          },
          {
            title: "NivelBBB",
            onSelected: "Inserte función aqui",
            visible: true,
            subOptions: [],
          }, //Es esta la que deberia verse como primer visible (De hecho es la unica)
        ],
      },
    ],
  },
];
