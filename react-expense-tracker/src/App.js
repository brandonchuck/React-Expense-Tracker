// import logo from "./logo.svg";
import "./App.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import React, { useState } from "react";

function App() {
  const [expenseList, setExpenseList] = useState([]); // an array of exense objects

  return (
    <div className="App">
      <h1>React Expense Tracker</h1>
      <ExpenseForm setExpenseList={setExpenseList} />
      <ExpenseTable expenseList={expenseList} />
    </div>
  );
}

export default App;
