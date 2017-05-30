import React from 'react'

const Transaction = ({transaction}) => {
  const amount = transaction.amount.toString().split('')
  amount[0] === '-' ?
    amount.splice(1,0,'$') :
    amount.splice(0,0,'$')
  amount.splice(-2,0,'.')
  return (
    <tr>
      <td>{transaction.posted_at}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{amount}</td>
    </tr>
  )
}

export default Transaction
