import React from "react";
import ReactDOM from "react-dom";

// Method for creating a table row
function createTableRow() {
  let tableRow = document.createElement("tr");
  tableRow.className = "table-row";
  return tableRow;
}

function createCell(name) {
  let cell = document.createElement("td");
  cell.textContent = name;
  cell.className = "table-cell";
  return cell;
}

function createDeleteButton() {
  let deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  return deleteButton;
}
// Method for creating a data cell

// Method for creating a delete button

// this needs to be called onSubmit??? but it is part of a different component
function addExpenseRow(props) {
  let expense = props.expense;
  let table = document.getElementById("table-body");

  let row = createTableRow();
  let currencyCell = createCell(expense.currency);
  let dateCell = createCell(expense.date);
  let descriptionCell = createCell(expense.description);
  let locationCell = createCell(expense.location);
  let amountCell = createCell(expense.amount);
  let deleteCell = createDeleteButton();

  row.appendChild(currencyCell);
  row.appendChild(dateCell);
  row.appendChild(descriptionCell);
  row.appendChild(locationCell);
  row.appendChild(amountCell);
  row.appendChild(deleteCell);

  table.appendChild(row);
}

export default function ExpenseTable(props) {
  console.log(props.expense);
  let expense = props.expense;
  return (
    <div>
      <table className="expense-table">
        <thead>
          <tr>
            <td className="header">Currency</td>
            <td className="header">Date</td>
            <td className="header">Description</td>
            <td className="header">Location</td>
            <td className="header">Amount</td>
          </tr>
        </thead>
        <tbody id="table-body">
          <tr>
            <td>{expense.currency}</td>
            <td>{expense.location}</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
