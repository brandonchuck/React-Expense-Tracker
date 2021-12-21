// import logo from "./logo.svg";
import "./App.css";
import ExpenseTable from "./ExpenseTable";
import React, { useState } from "react";

function App() {
  const [expenseList, setExpenseList] = useState([]);
  const [currency, setCurrency] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [amount, setAmount] = useState("");

  const expense = {
    currency: "",
    date: "",
    description: "",
    location: "",
    amount: "",
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setExpenseList([expense]);
    console.log(expenseList);
  };

  return (
    <div className="App">
      <h1>React Expense Tracker</h1>
      <div>
        <div className="form-container">
          <form className="expense-form" onSubmit={handleFormSubmit}>
            <label htmlFor="currency">Currency: </label>
            <select
              onChange={(e) => setCurrency(e.target.value)}
              value={currency}
              type="text"
              name="currency"
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
              onChange={(e) => setDate(e.target.value)}
              value={date}
              name="date"
              type="date"
              id="date"
            />
            <br />

            <label htmlFor="description">Description: </label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type="text"
              name="description"
              id="description"
            />
            <br />

            <label htmlFor="location">Location: </label>
            <input
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              name="location"
              type="text"
              id="location"
            />
            <br />

            <label htmlFor="amount">Amount: </label>
            <input
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              name="amount"
              type="number"
              step="0.2"
              id="amount"
            />
            <br />
            <input value="Add Expense" type="submit" />
          </form>
        </div>
      </div>
      <ExpenseTable expenseList={expenseList} />
    </div>
  );
}

export default App;
