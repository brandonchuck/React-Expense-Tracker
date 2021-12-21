// import logo from "./logo.svg";
import "./App.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

function App() {
  const [expense, setExpense] = useState({
    currency: "",
    date: "",
    description: "",
    location: "",
    amount: "",
  });

  return (
    <div className="App">
      <h1>React Expense Tracker</h1>
      <ExpenseForm expense={expense} setExpense={setExpense} />
    </div>
  );
}

export default App;
