import React from 'react'

const Transaction = (props) => {
  console.log(props);
  let posted_at = props.transactions.map( (trans) => {
    return (
      <li>
        {posted_at.posted_at}
      </li>
    )
  })
  return (
    <tr>
      <td>{posted_at}</td>
    </tr>
  )
}

export default Transaction
