import React from 'react'

const Transaction = (props) => {

  const transactionRow = props.transactions.map((transaction, i) => 
    <tr key={i}>
      <td>{transaction.posted_at}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  )

  return <tr>{ transactionRow }</tr>
}

export default Transaction
