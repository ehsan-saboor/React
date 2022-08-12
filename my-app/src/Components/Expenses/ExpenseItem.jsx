import React, { useState } from "react"
import "../Expenses/ExpenseItem.css"
import ExpensePrice from "./ExpensePrice"
import Card from "../UI/Card"

const ExpenseItem = (props) => {
    const month = props.date.toLocaleString("en-us", { month: "long" })
    const day = props.date.toLocaleString("en-us", { day: "2-digit" })
    const year = props.date.getFullYear()

    const [ChangeTitle, TitleFunc] = useState(props.title)

    const clickhandler = () => {
        TitleFunc("This Changed")
    }

    return (
        <Card className="expense-item">
            <div className="date-flex">
                <div>{month}</div>
                <div>{day}</div>
                <div >{year}</div>
            </div>
            <div className="expense-item__description">
                <h2>{ChangeTitle}</h2>
                <ExpensePrice amount={props.amount} />
            </div>
            <button onClick={clickhandler}>Click Me</button>
        </Card>
    )
}

export default ExpenseItem;