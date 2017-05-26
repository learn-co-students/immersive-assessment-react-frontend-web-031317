import React from 'react'

//holy moly I didn't see this here

const Transaction = (props) => {
  var list = props.array.map((item) => {
    return (
      <tr>
        <td>Posted At {item.posted_at}</td>
        <td>Description {item.description}</td>
        <td>Category {item.category}</td>
        <td>Amount {item.amount}</td>
      </tr>
    )

    // return (
    //   <tr>
    //     <th>
    //       <h5 className="ui center aligned header">
    //         Posted At {item.posted_at}
    //       </h5>
    //     </th>
    //     <th>
    //       <h5 className="ui center aligned header">
    //         Description {item.description}
    //       </h5>
    //     </th>
    //     <th>
    //       <h5 className="ui center aligned header">
    //         Category {item.category}
    //       </h5>
    //     </th>
    //     <th>
    //       <h5 className="ui center aligned header">
    //         Amount {item.amount}
    //       </h5>
    //     </th>
    //   </tr>
    // )
  })

  return (
    <tr>
      <td>{"...your code here"}</td>
      <td>{"...your code here"}</td>
      <td>{"...your code here"}</td>
      <td>{"...your code here"}</td>
    </tr>
  )
}

export default Transaction
