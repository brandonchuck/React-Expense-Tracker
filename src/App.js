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

  useEffect(() => {
    let expenseArray = getExpenseArray();
    setExpenseList(expenseArray);
  }, []);

  const expense = {
    id: Math.floor(Math.random() * 1000),
    currency: currency,
    date: date,
    description: description,
    location: location,
    amount: amount,
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setExpenseList([...expenseList, expense]);
    addNewExpenseToLocalStorage(expense);
  };

  function getExpenseArray() {
    return JSON.parse(localStorage.getItem("expenseArray")) || [];
  }

  function saveExpensesToLocalStorage(expenseList) {
    localStorage.setItem("expenseArray", JSON.stringify(expenseList));
  }

  function addNewExpenseToLocalStorage(expense) {
    let expenseArray = getExpenseArray();
    expenseArray.push(expense);
    saveExpensesToLocalStorage(expenseArray);
  }

  return (
    <div className="App">
      <h1 id="title">React Expense Tracker</h1>
      <div>
        <div className="container">
          <form className="form" onSubmit={handleFormSubmit}>
            <div className="form-group row">
              <div className="col-sm-6">
                <label className="col-form-label" htmlFor="currency">
                  Currency:
                </label>
                <div>
                  <select
                    className="form-control"
                    onChange={(e) => setCurrency(e.target.value)}
                    value={currency}
                    type="text"
                    name="currency"
                    id="currency"
                    required
                  >
                    <option value="">Select Currency</option>
                    <option value="cash">Cash</option>
                    <option value="credit">Credit Card</option>
                    <option value="crypto">Cryptocurrency</option>
                    <option value="check">Check</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="col-sm-6">
                <label className="col-form-label" htmlFor="date">
                  Date:
                </label>

                <div>
                  <input
                    className="form-control"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    name="date"
                    type="date"
                    id="date"
                    required
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <label className="col-form-label" htmlFor="description">
                  Description:
                </label>

                <input
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  placeholder="For what?"
                  type="text"
                  name="description"
                  id="description"
                  required
                />
              </div>

              <div className="col-sm-6">
                <label className="col-form-label" htmlFor="location">
                  Location:
                </label>
                <input
                  className="form-control"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                  placeholder="Where?"
                  name="location"
                  type="text"
                  id="location"
                  required
                />
              </div>

              <div className="col-sm-6">
                <label className="col-form-label" htmlFor="amount">
                  Amount:
                </label>
                <input
                  className="form-control"
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                  placeholder="How much?"
                  name="amount"
                  type="number"
                  step="0.2"
                  id="amount"
                  required
                />
              </div>

              <div className="col-sm-12">
                <input
                  className="form-control"
                  value="Add Expense"
                  type="submit"
                  id="add-expense-btn"
                />
              </div>
            </div>
          </form>
          <ExpenseTable
            expenseList={expenseList}
            saveExpense={saveExpensesToLocalStorage}
            getExpenseArray={getExpenseArray}
            setExpenseList={setExpenseList}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
