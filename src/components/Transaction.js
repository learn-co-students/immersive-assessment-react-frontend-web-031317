import React from 'react'

const Transaction = (props) => {
console.log('transaction props', props.value.posted_at);
  return (
    <tr>
      <td>{props.value.posted_at}</td>
      <td>{props.value.description}</td>
      <td>{props.value.category}</td>
      <td>{props.value.amount}</td>
    </tr>
  )
}

export default Transaction
