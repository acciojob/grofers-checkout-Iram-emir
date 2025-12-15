const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  
  const prices = document.querySelectorAll(".price");

  let total = 0;

  
  prices.forEach((price) => {
    total += Number(price.innerText);
  });

  // 3. table ko select karo
  const table = document.querySelector("table");

  // 4. new row banao
  const newRow = document.createElement("tr");

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; // 2 columns cover kare
  totalCell.innerText = `Total Price = Rs ${total}`;

  newRow.appendChild(totalCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
