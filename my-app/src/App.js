import ExpenseItem from "./Components/ExpenseItem";

function App() {
    // let expenseDate = new Date(2022, 9, 10);
    // let expenseTitle = "School Fee";
    // let expenseAmount = 300;

    let expenseArray = [
        {
            id: "e1",
            date: new Date(2022, 6, 10),
            title: "School Fee",
            amount: 300
        },
        {
            id: "e2",
            date: new Date(2022, 9, 11),
            title: "School Fee",
            amount: 250
        },
        {
            id: "e3",
            date: new Date(2022, 7, 12),
            title: "School Fee",
            amount: 300
        },
        {
            id: "e4",
            date: new Date(2022, 8, 13),
            title: "School Fee",
            amount: 200
        }
    ]

    return (
        <div>
        <ExpenseItem
            date={expenseArray[0].date}
            title={expenseArray[0].title}
            amount={expenseArray[0].amount}
        />
        <ExpenseItem
            date={expenseArray[1].date}
            title={expenseArray[1].title}
            amount={expenseArray[1].amount}
        />
        <ExpenseItem
            date={expenseArray[2].date}
            title={expenseArray[2].title}
            amount={expenseArray[2].amount}
        />
        <ExpenseItem
            date={expenseArray[3].date}
            title={expenseArray[3].title}
            amount={expenseArray[3].amount}
        />
        
        </div>
    );
}

export default App;
