import React from 'react'
import "./NewExpenses.css"
import NewExpensesForm from './NewExpensesForm'

const NewExpenses = (props) => {

  const collectFormData = (enteredExpenseData) =>{
    
    const copyofenteredExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    
    props.savedAgainCollectFormData(copyofenteredExpenseData)
    console.log(copyofenteredExpenseData)
  }


  return (
    <div className='new-expense'>
        <NewExpensesForm storedFormData={collectFormData} />
    </div>
  )
}

export default NewExpenses;