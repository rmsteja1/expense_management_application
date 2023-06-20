import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (porps) => {
  
  if (porps.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  }

  return <ul className="expenses-list">
    {porps.items.map((eachExpense) => (
      <ExpenseItem
        key={eachExpense.id}
        title={eachExpense.title}
        amount={eachExpense.amount}
        date={eachExpense.date}
      />
    ))}
  </ul>

};

export default ExpensesList;
