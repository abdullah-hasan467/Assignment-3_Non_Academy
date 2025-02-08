function generateTable() {
  let num = document.getElementById("numberInput").value;
  let errorMessage = document.getElementById("errorMessage");
  let output = document.getElementById("tableOutput");

  errorMessage.innerHTML = "";
  output.innerHTML = "";

  if (num === "" || isNaN(num)) {
    errorMessage.innerHTML = "Please enter a valid number!";
    return;
  }

  num = Number(num);

  if (num <= 0) {
    errorMessage.innerHTML = "Please enter a number greater than 0!";
    return;
  }

  let tableHTML = `<h3>Multiplication Table for ${num}</h3>`;
  tableHTML += "<table>";
  tableHTML += "<tr><th>Multiplier</th><th>Result</th></tr>";

  for (let i = 1; i <= 10; i++) {
    tableHTML += `<tr><td>${num} × ${i}</td><td>${num * i}</td></tr>`;
  }

  tableHTML += "</table>";
  output.innerHTML = tableHTML;
}

function clearTable() {
  document.getElementById("numberInput").value = ""; // Clear input field
  document.getElementById("errorMessage").innerHTML = ""; // Clear error message
  document.getElementById("tableOutput").innerHTML = ""; // Clear table output
}
