import logo from "./logo.svg";
import "./App.css";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";

function App() {
  return (
    <div className="App">
      <h1>React Expense Tracker</h1>
      <ExpenseForm />
    </div>
  );
}

export default App;
