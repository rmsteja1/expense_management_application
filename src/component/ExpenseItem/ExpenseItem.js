import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import CardFormat from "../UI/CardFormat";

function ExpenseItem(props) {
  let expenseItem = props.expense.title;
  let expensePrice = props.expense.amount;
  return (
    <CardFormat className="expense-item">
      <div>
        <ExpenseDate date={props.expense.date} />
      </div>
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </CardFormat>
  );
}

export default ExpenseItem;
