const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  // remove old total row if exists
  const oldTotal = document.getElementById("total");
  if (oldTotal) oldTotal.remove();

  // get all prices
  const prices = document.querySelectorAll(".prices");
  let sum = 0;

  prices.forEach((price) => {
    sum += Number(price.innerText);
  });

  // create new row
  const table = document.querySelector("table");
  const row = document.createElement("tr");
  row.id = "total";

  const cell = document.createElement("td");
  cell.colSpan = 2;
  cell.innerText = sum;

  row.appendChild(cell);
  table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);
