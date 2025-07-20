// const insert = document.querySelector("#insert");

// // console.log("keylog:", insert);

// document.addEventListener("keydown", (e) => {
//   console.log("keydown eventListener:", e.key);

//   insert.innerHTML = `
//   <table >
//   <tr>
//   <th>Key</th>
//   <th>KeyCode</th>
//   <th>Code</th>
//   </tr>
//   <tr>
//   <td>${e.key}</td>
//   <td>${e.keyCode}</td>
//   <td>${e.code}</td>
//   </tr>
//   </table>
//   `;
// });

const insert = document.querySelector("#insert");

document.addEventListener("keydown", (e) => {
  console.log("keydown eventListener:", e.key);

  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  `;

  // Append the new row to the table
  const table = insert.querySelector("table");
  if (table) {
    table.appendChild(newRow);
  } else {
    // If the table doesn't exist, create it and add the first row
    insert.innerHTML = `
      <table>
        <tr>
          <th>Key</th>
          <th>KeyCode</th>
          <th>Code</th>
        </tr>
        ${newRow.outerHTML}
      </table>
    `;
  }
});
