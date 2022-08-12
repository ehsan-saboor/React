import AllExpenses from "./Components/Expenses/AllExpenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";

const App = () => {

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
    ];

    const againCollectFormData = (againEnteredExpenseData) =>{
        console.log(againEnteredExpenseData)
    }

    return (
        <div>
            <NewExpenses savedAgainCollectFormData={againCollectFormData} />
            <AllExpenses items={expenseArray} />
        </div>
    );
}

export default App;