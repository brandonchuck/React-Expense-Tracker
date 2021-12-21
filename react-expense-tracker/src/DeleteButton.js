import React from "react";

// i have the expense how do i delete it from dom?? Use the expense.id property?? maybe use .filter() to remove by the expense.id onClick??
const DeleteButton = ({ expenseList, expense }) => {
  const deleteRow = (e) => {
    e.target.parentElement.parentElement.remove(); // remove from DOM
    // expenseList.filter((expense) => { // remove from expenseList
    //   return expense.id !== expense.id;
    // });
  };

  return (
    <td>
      <button className="delete-button" onClick={deleteRow}>
        X
      </button>
    </td>
  );
};

export default DeleteButton;
