import ExpenseItem from "./Components/ExpenseItem";

function App() {
    let expenseDate = new Date(2022, 9, 10);
    let expenseTitle = "School Fee";
    let expenseAmount = 300;

    return (
        <div>
        <ExpenseItem
            date={expenseDate}
            title={expenseTitle}
            amount={expenseAmount}
        />
        <ExpenseItem
            date={expenseDate}
            title={expenseTitle}
            amount={expenseAmount}
        />
        <ExpenseItem
            date={expenseDate}
            title={expenseTitle}
            amount={expenseAmount}
        />
        <ExpenseItem
            date={expenseDate}
            title={expenseTitle}
            amount={expenseAmount}
        />
        </div>
    );
}

export default App;
