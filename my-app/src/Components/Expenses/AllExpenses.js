import "../Expenses/AllExpenses.css"
import ExpenseItem from "../Expenses/ExpenseItem"
import Card from "../UI/Card";

function AllExpenses(props) {
    return (
        <Card className="bg-color">
            <ExpenseItem
                date={props.items[0].date}
                title={props.items[0].title}
                amount={props.items[0].amount}
            />
            <ExpenseItem
                date={props.items[1].date}
                title={props.items[1].title}
                amount={props.items[1].amount}
            />
            <ExpenseItem
                date={props.items[2].date}
                title={props.items[2].title}
                amount={props.items[2].amount}
            />
            <ExpenseItem
                date={props.items[3].date}
                title={props.items[3].title}
                amount={props.items[3].amount}
            />
        </Card>
    )
}
export default AllExpenses;