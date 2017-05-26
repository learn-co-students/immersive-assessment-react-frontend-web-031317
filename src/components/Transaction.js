import React from 'react'

const Transaction = (props) => {

  let dateTime = new Date(props.transaction.posted_at).toLocaleString() // parsing the ISO Date format into plain english

  return (
    <tr>
      <td>{dateTime}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
    </tr>
  )
}

export default Transaction
