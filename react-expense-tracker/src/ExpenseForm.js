import React, { useState } from "react";
import ReactDOM from "react-dom";
import ExpenseTable from "./ExpenseTable";

/*
    Component's Job:
    1. Create html form
    2. Create 4 inputs: currency, description, amount, date
    3. Create Submit button
    4. render this to screen

    Form's job:
    1. Listen for user input
*/

export default function ExpenseForm() {
  const [expense, setExpense] = useState({
    currency: null,
    date: null,
    description: null,
    location: null,
    amount: null,
  });

  // this will automatically bind
  const handleSubmit = (e) => {
    e.preventDefault();
    let form = document.getElementsByClassName("expense-form");

    expense.setExpense({
      currency: setExpense({ ...expense, currency }),
    });
  };

  return (
    <div>
      <div className="form-container">
        <form className="expense-form">
          Expense:
          <select>
            <option>Cash</option>
            <option>Credit Card</option>
            <option>Cryptocurrency</option>
            <option>Check</option>
          </select>
          Location: <input></input>
          <button onSubmit={handleSubmit}>Add Expense</button>
        </form>
        <ExpenseTable expense={this.state} />
      </div>
    </div>
  );
}
