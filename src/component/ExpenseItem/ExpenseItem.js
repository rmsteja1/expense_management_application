import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import CardFormat from "../UI/CardFormat";

function ExpenseItem(props) {
  //const [expenseTitle, setTitle] = useState(props.title);
  const expenseTitle = props.title;
  // const clickHandler = () => {
  //   setTitle("Updated");
  // };

  return (
    <li>
      <CardFormat className="expense-item">
        <div>
          <ExpenseDate date={props.date} />
        </div>
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button>Change Title</button>
      </CardFormat>
    </li>
  );
}

export default ExpenseItem;
