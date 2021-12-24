import React from "react";

const DeleteButton = ({ expense, saveExpense, getExpenseArray }) => {
  const removeExpense = (e) => {
    e.target.parentElement.parentElement.remove();
    let expenseArray = getExpenseArray();
    expenseArray = expenseArray.filter((exp) => {
      return exp.id !== expense.id;
    });
    saveExpense(expenseArray);
  };

  return (
    <td>
      <button className="delete-button" onClick={removeExpense}>
        X
      </button>
    </td>
  );
};

export default DeleteButton;
