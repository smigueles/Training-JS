let invoice = [];
let min;
const task = new Promise((res, rej) => {
  const docs = [
    { service: "Agua", id: "00056ABa753951", amount: 100 },
    { service: "Luz", id: "00057ABa753951", amount: 600 },
    { service: "Gas", id: "00058ABa753951", amount: 600 },
    { service: "Gas", id: "00059ABa753951", amount: 900 },
  ];
  setTimeout(() => {
    res(docs);
  }, 2000);
});

const render = (template, node) => {
  if (!node) return;
  node.innerHTML = typeof template === "function" ? template() : template;
};

const main = "<h1 id='title'>Factuweb</h1><h3 id='subtitle'>Tus facturas en la web</h3>"
render(
  main,
  document.querySelector("#main")
);

render("<p>Loading..</p>", document.querySelector("#invoice"));
task.then((res) => {
  invoice = res;
  invoice.forEach((i) => {
    i.recharge = calculateInterest(i.amount);
  });
  min = Math.min(...invoice.map((i) => i.amount));
  return render(createTable(invoice), document.querySelector("#invoice"));
});

const calculateInterest = (amount) => {
  const percentage = (amount * 3.5) / 100;
  const recharge = amount + percentage;
  return Math.floor(recharge);
};

const createTable = (array) => {
  const trTd = array
    .map(
      (bill) =>
        `<tr>
        <td> ${bill.service}</td><td>${bill.id}</td><td>$${bill.amount}</td><td>$${bill.recharge}</td>
      </tr>`
    )
    .join("");

  const table = `<table>
  <tr>
   <th>Servicio</th>
   <th>ID</th>
   <th>Monto</th>
   <th>Recargo por vencimiento</th>
  </tr>
  ${trTd}
  </table>`;

  return table;
};

const aviableInvoice = (amount) => {
  let aviable = [];
  let rest = amount;
  invoice.forEach((factura) => {
    if (factura.amount <= rest) {
      aviable.push(factura);
      rest = rest - factura.amount;
    }
  });
  return aviable;
};

//Evento para saber el monto del usuario
const userAmount = document.getElementById("amount");
let amount = 0;
userAmount.addEventListener("input", (e) => {
  amount = e.target.value;
});
//Evento del botón para poder ver facturas disponibles en base al monto que el usuario ingrese
const btn = document.getElementById("btn");
btn.addEventListener("click", () =>
  render(
    amount >= min
      ? createTable(aviableInvoice(amount))
      : "<h4>El monto es insuficiente para pagar alguna factura</h4>",
    document.querySelector("#aviable-invoice")
  )
);
