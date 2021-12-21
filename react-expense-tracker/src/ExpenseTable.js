import React from "react";
import TableRow from "./TableRow";

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
          <tr>
            {expenseList.map((expense) => {
              return <TableRow expense={expense} />;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
