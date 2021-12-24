import React from "react";
import DeleteButton from "./DeleteButton";

const ExpenseTable = ({ expenseList, saveExpense, getExpenseArray }) => {
  function formatAmount(amount) {
    return `$${amount}`;
  }

  function formatCurrency(currency) {
    switch (currency) {
      case "cash":
        return <i class="bi bi-cash-coin"></i>;
      case "credit":
        return <i class="bi bi-credit-card-2-back"></i>;
      case "crypto":
        return <i class="bi bi-currency-bitcoin"></i>;
      case "check":
        return <i class="bi bi-card-heading"></i>;
      case "Other":
        return "Other";
      default:
        return null;
    }
  }

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
          {expenseList.map((expense) => {
            return (
              <tr key={expense.id}>
                <td>{formatCurrency(expense.currency)}</td>
                <td>{expense.date}</td>
                <td>{expense.description}</td>
                <td>{expense.location}</td>
                <td>{formatAmount(expense.amount)}</td>
                <DeleteButton
                  expense={expense}
                  saveExpense={saveExpense}
                  getExpenseArray={getExpenseArray}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
