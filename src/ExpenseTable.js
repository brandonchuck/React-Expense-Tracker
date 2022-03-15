import React from "react";

const ExpenseTable = ({
  expenseList,
  setExpenseList,
  saveExpense,
  getExpenseArray,
}) => {
  function formatAmount(amount) {
    return `$${amount}`;
  }

  function formatCurrency(currency) {
    switch (currency) {
      case "cash":
        return <i className="bi bi-cash-coin"></i>;
      case "credit":
        return <i className="bi bi-credit-card-2-back"></i>;
      case "crypto":
        return <i className="bi bi-currency-bitcoin"></i>;
      case "check":
        return <i className="bi bi-card-heading"></i>;
      case "other":
        return "Other";
      default:
        return null;
    }
  }

  return (
    <div className="table-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Date</th>
            <th>Description</th>
            <th>Location</th>
            <th>Amount</th>
            <th id="remove-header">Remove</th>
          </tr>
        </thead>
        <tbody>
          {expenseList.map((expense) => {
            return (
              <tr key={expense.id}>
                <td>{formatCurrency(expense.currency)}</td>
                <td>{expense.date}</td>
                <td>{expense.description}</td>
                <td>{expense.location}</td>
                <td>{formatAmount(expense.amount)}</td>
                <td id="delete-btn-cell">
                  <button
                    className="button btn-danger"
                    id="delete-btn"
                    onClick={() => {
                      // remove expense row from table
                      setExpenseList(
                        expenseList.filter((exp) => {
                          return exp.id !== expense.id;
                        })
                      );

                      // remove from local storage
                      let expenseArray = getExpenseArray();
                      saveExpense(
                        expenseArray.filter((exp) => {
                          return exp.id !== expense.id;
                        })
                      );
                    }}
                  >
                    &times;
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
