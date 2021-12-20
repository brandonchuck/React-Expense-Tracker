import React, { useState } from "react";
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
    currency: "",
    date: "",
    description: "",
    location: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = document.querySelector(".expense-form");
    form.reset();
  };

  return (
    <div>
      <div className="form-container">
        <form className="expense-form">
          <label htmlFor="description">Description: </label>
          <input
            onChange={(e) =>
              setExpense({ ...expense, description: e.target.value })
            }
            value={expense.description}
            id="description"
          ></input>
          <br />

          <label htmlFor="currency">Currency: </label>
          <select
            onChange={(e) =>
              setExpense({ ...expense, currency: e.target.value })
            }
            value={expense.currency}
            id="currency"
          >
            <option>Cash</option>
            <option>Credit Card</option>
            <option>Cryptocurrency</option>
            <option>Check</option>
          </select>
          <br />

          <label htmlFor="location">Location: </label>
          <input
            onChange={(e) =>
              setExpense({ ...expense, location: e.target.value })
            }
            value={expense.location}
            id="location"
          ></input>
          <br />

          <label htmlFor="amount">Amount: </label>
          <input
            onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
            value={expense.amount}
            id="amount"
          ></input>
          <br />

          <button onSubmit={handleSubmit}>Add Expense</button>
        </form>
        <ExpenseTable expense={expense} />
      </div>
    </div>
  );
}
