import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2022, 9, 14)
  const expenseTitle = 'Car Insurance'
  const expenseAmout = '965.65'

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmout}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
