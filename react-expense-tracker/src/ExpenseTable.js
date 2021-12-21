import React from "react";
// import TableRow from "./TableRow";

const ExpenseTable = ({ expenseList }) => {
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
                <td>{expense.currency}</td>
                <td>{expense.date}</td>
                <td>{expense.description}</td>
                <td>{expense.location}</td>
                <td>{expense.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
