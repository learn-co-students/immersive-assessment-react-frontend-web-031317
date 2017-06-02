import React from 'react'

const Transaction = ({transaction}) => {
console.log('transaction props', transaction.posted_at);
  return (
    <tr>
      <td>{transaction.posted_at}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  )
}

export default Transaction
