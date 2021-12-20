import React, { useState } from "react";
import ExpenseTable from "./ExpenseTable";

export default function ExpenseForm() {
  const [expense, setExpense] = useState({
    currency: "",
    date: "",
    description: "",
    location: "",
    amount: "",
  });

  // This function DOES NOT WORK for onChange? Example: currency onChange? Why?
  const handleChange = (e) => {
    setExpense(() => ({ ...expense, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = document.querySelector(".expense-form");
    form.reset();
  };

  // Should each input be its own component and then we pass the expense object to it via props?
  return (
    <div>
      <div className="form-container">
        <form className="expense-form">
          <label htmlFor="currency">Currency: </label>
          <select
            onChange={(e) =>
              setExpense({ ...expense, currency: e.target.value })
            }
            // onChange={handleChange}
            value={expense.currency}
            type="text"
            id="currency"
          >
            <option value="cash">Cash</option>
            <option value="credit">Credit Card</option>
            <option value="crypto">Cryptocurrency</option>
            <option value="check">Check</option>
          </select>
          <br />

          <label htmlFor="date">Date: </label>
          <input
            onChange={(e) => setExpense({ ...expense, date: e.target.value })}
            value={expense.date}
            type="date"
            id="date"
          />
          <br />

          <label htmlFor="description">Description: </label>
          <input
            onChange={(e) =>
              setExpense({ ...expense, description: e.target.value })
            }
            value={expense.description}
            type="text"
            id="description"
          />
          <br />

          <label htmlFor="location">Location: </label>
          <input
            onChange={(e) =>
              setExpense({ ...expense, location: e.target.value })
            }
            value={expense.location}
            type="text"
            id="location"
          />
          <br />

          <label htmlFor="amount">Amount: </label>
          <input
            onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
            value={expense.amount}
            type="number"
            step="0.2"
            id="amount"
          />
          <br />

          <button type="submit" onSubmit={handleSubmit}>
            Add Expense
          </button>
        </form>
        <ExpenseTable expense={expense} />
      </div>
    </div>
  );
}
