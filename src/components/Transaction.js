import React from 'react'

const Transaction = (props) => {
  console.log(props);
  const transaction = props.transaction
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
