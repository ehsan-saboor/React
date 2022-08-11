import "../Expenses/ExpensePrice.css"


const ExpensePrice = (props) => {
    return (
        <div className="expense-item__price">${props.amount}</div>
    )
}

export default ExpensePrice;