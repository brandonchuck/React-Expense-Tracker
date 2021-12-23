import React from "react";

// i have the expense how do i delete it from dom?? Use the expense.id property?? maybe use .filter() to remove by the expense.id onClick??

const DeleteButton = ({
  expense,
  expenseList,
  saveExpense,
  getExpenseArray,
}) => {
  function removeExpense(e) {
    e.target.parentElement.parentElement.remove(); // remove expense from DOM

    let expenseArray = getExpenseArray();
    expenseArray = expenseArray.filter((x) => {
      return x.id !== expense.id;
    });

    saveExpense(expenseArray);
  }

  return (
    <td>
      <button className="delete-button" onClick={(e) => removeExpense(e)}>
        X
      </button>
    </td>
  );
};

export default DeleteButton;
