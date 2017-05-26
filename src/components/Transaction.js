import React from 'react'

const Transaction = (props) => {
// console.log(props)
  if (props.result){

    return (
      <tr>
        <td>{props.result.posted_at}</td>
        <td>{props.result.description}</td>
        <td>{props.result.category}</td>
        <td>{props.result.amount}</td>
      </tr>
    )
  }else{
    return null
  }
}

export default Transaction
