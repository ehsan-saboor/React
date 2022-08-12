import React, { useState } from "react"
import "./ExpenseItem.css"
import ExpensePrice from "./ExpensePrice"
import Card from "../UI/Card"

const ExpenseItem = (props) => {
    const month = props.date.toLocaleString("en-us", { month: "long" })
    const day = props.date.toLocaleString("en-us", { day: "2-digit" })
    const year = props.date.getFullYear()

    return (
        <Card className="expense-item">
            <div className="date-flex">
                <div>{month}</div>
                <div>{day}</div>
                <div >{year}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <ExpensePrice amount={props.amount} />
            </div>
        </Card>
    )
}

export default ExpenseItem;