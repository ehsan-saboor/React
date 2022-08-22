import "./AllExpenses.css"
import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card";

const AllExpenses = (props) => {
    return (
        <Card className="bg-color">

            {
                props.items.map(
                    expense => (
                        <ExpenseItem
                            key = {expense.id}
                            date={expense.date}
                            title={expense.title}
                            amount={expense.amount}
                        />
                    )
                )
            }
        </Card>
    )
}
export default AllExpenses;