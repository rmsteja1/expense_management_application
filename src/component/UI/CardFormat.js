import "./Card.css";

// This is a wrapper component used to reduce the css code that is similar in Expenses.css and ExpenseItem.css file (Rectangle box operation is common in both of them)
// "<Card> Some content <Card />" this format will not work as html open and closing. props.children should be used to shouw the content between copen and closing tag.
// props.children is a reserved word.
// If only one class name is added only few styling actions will be applicable, actally we need all the stylings so multiple classes should be there.
// props.className includes all the uncommon stylig
function CardFormat(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default CardFormat;
