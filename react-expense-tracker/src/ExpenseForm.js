import ExpenseTable from "./ExpenseTable";

export default function ExpenseForm(props) {
  let expense = props.expense;

  const handleChange = (e) => {
    props.setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const form = document.querySelector(".expense-form");
    form.reset();
  };

  // Should each input be its own component and then we pass the expense object to it via props?
  return (
    <div>
      <div className="form-container">
        <form className="expense-form" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="currency">Currency: </label>
          <select
            onChange={(e) => handleChange(e)}
            value={expense.currency}
            type="text"
            name="currency"
            id="currency"
          >
            <option value="cash">Cash</option>
            <option value="credit">Credit Card</option>
            <option value="crypto">Cryptocurrency</option>
            <option value="check">Check</option>
          </select>
          <br />
          <label htmlFor="date">Date: </label>
          <input
            onChange={(e) => handleChange(e)}
            value={expense.date}
            name="date"
            type="date"
            id="date"
          />
          <br />
          <label htmlFor="description">Description: </label>
          <input
            onChange={(e) => handleChange(e)}
            value={expense.description}
            type="text"
            name="description"
            id="description"
          />
          <br />
          <label htmlFor="location">Location: </label>
          <input
            onChange={(e) => handleChange(e)}
            value={expense.location}
            name="location"
            type="text"
            id="location"
          />
          <br />
          <label htmlFor="amount">Amount: </label>
          <input
            onChange={(e) => handleChange(e)}
            value={expense.amount}
            name="amount"
            type="number"
            step="0.2"
            id="amount"
          />
          <br />
          <button type="submit">Add Expense</button>
        </form>
        <ExpenseTable />
      </div>
    </div>
  );
}
