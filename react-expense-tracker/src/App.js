import "./App.css";
import ExpenseTable from "./ExpenseTable";
import React, { useState, useEffect } from "react";

const App = () => {
  const [expenseList, setExpenseList] = useState([]);

  const [currency, setCurrency] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [amount, setAmount] = useState("");

  // Can I use useEffect as alternative to onLoad???
  useEffect(() => {
    let expenseArray = getExpenseArray();
    expenseArray.forEach((ex) => {
      setExpenseList([...expenseList, ex]);
    });
  });

  // set expense object onSubmit
  const expense = {
    id: Math.floor(Math.random() * 1000),
    currency: currency,
    date: date,
    description: description,
    location: location,
    amount: amount,
  };

  // adding expense to DOM and saving it to local storage
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setExpenseList([...expenseList, expense]); // update expenseList for DOM rendering
    addExpense(expense); // save new expense to local storage
  };

  // update
  function saveExpense(expenseList) {
    localStorage.setItem("expenseArray", JSON.stringify(expenseList));
  }

  // retreive expenseArray from local storage
  const getExpenseArray = () => {
    return JSON.parse(localStorage.getItem("expenseArray")) || [];
  };

  // add new expense to local storage
  function addExpense(expense) {
    let expenseArray = getExpenseArray(); // local storage expenseArray
    expenseArray.push(expense); // push new expense to array
    saveExpense(expenseArray); // save updated expenseList in local storage
  }

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
              required
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
              required
            />
            <br />

            <label htmlFor="description">Description: </label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type="text"
              name="description"
              id="description"
              required
            />
            <br />

            <label htmlFor="location">Location: </label>
            <input
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              name="location"
              type="text"
              id="location"
              required
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
              required
            />
            <br />
            <input value="Add Expense" type="submit" />
          </form>
        </div>
      </div>
      <ExpenseTable
        expenseList={expenseList}
        saveExpense={saveExpense}
        getExpenseArray={getExpenseArray}
      />
    </div>
  );
};

export default App;
