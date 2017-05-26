import React from 'react'

const Transaction = (props) => {

  return (
	<tr>
      <td>{props.transDetail.posted_at}</td>
      <td>{props.transDetail.description}</td>
      <td>{props.transDetail.category}</td>
      <td>{props.transDetail.amount}</td>
    </tr>
  )
}

export default Transaction
