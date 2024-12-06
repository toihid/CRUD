console.log("aaaaaaaaa");
async function fetchProducts(url) {
  try {
    const resp = await fetch(url);
    if (!resp) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
    const products = await resp.json();
    return await products;
  } catch (err) {
    console.error("Error fetching products:", error);
  }
}
fetchProducts("http://localhost:3030/api/products/").then((product) => {
  tableRow(product);
});

const tableBody = document.querySelector("tbody");

const tableRow = (data) => {
  data.forEach((row) => {
    const tr = document.createElement("tr");
    tr.appendChild(tableCol(row.name));
    tr.appendChild(tableCol(row.description));
    tr.appendChild(tableCol(row.price));
    tr.appendChild(tableCol(row.quantity));
    tr.appendChild(actionsBtnCol());
    tableBody.appendChild(tr);
  });
};
const tableCol = (col) => {
  const td = document.createElement("td");
  td.textContent = col;
  return td;
};

const actionsBtnCol = () => {
  const td = document.createElement("td");
  td.textContent = "coming soon";
  return td;
};
