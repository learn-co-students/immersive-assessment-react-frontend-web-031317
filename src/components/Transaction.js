import React from 'react'

const Transaction = (props) => {


  return (
    <tr>
      <td>{props.postTimes}</td>
      <td>{props.descriptions}</td>
      <td>{props.categories}</td>
      <td>{props.amounts}</td>
    </tr>
  )
}

export default Transaction
