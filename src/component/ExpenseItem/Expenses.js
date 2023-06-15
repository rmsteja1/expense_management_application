import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import CardFormat from "../UI/CardFormat";

function Expense(props) {
  const expenses = props.expensesArray;
  return (
    <CardFormat className="expenses">
      <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} />
      <ExpenseItem expense={expenses[3]} />
    </CardFormat>
  );
}
export default Expense;
