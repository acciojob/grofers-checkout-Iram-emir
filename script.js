
const prices = document.querySelectorAll(".prices");

let total = 0;


prices.forEach((price) => {
  total += Number(price.innerText);
});


const table = document.querySelector("table");


const totalRow = document.createElement("tr");

// create single cell
const totalCell = document.createElement("td");
totalCell.colSpan = 2;
totalCell.innerText = `Total Price: ${total}`;

// append
totalRow.appendChild(totalCell);
table.appendChild(totalRow);
