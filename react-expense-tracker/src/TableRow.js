import React from "react";

const TableRow = (expense) => {
  return (
    <>
      <td>{expense.currency}</td>
      <td>{expense.date}</td>
      <td>{expense.description}</td>
      <td>{expense.location}</td>
      <td>{expense.amount}</td>
    </>
  );
};

export default TableRow;
