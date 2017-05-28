import React from 'react'

const OneRow = (props) => {
  //console.log('OneRow props: ', props)
  //changing below so now it's 'props.transaction.[name-of-key]'
  return (
    <tr>
      <th>
        <h3 className="ui center aligned header">
          {props.transaction.posted_at}
        </h3>
      </th>
      <th>
        <h3 className="ui center aligned header">
          {props.transaction.description}
        </h3>
      </th>
      <th>
        <h3 className="ui center aligned header">
          {props.transaction.category}
        </h3>
      </th>
      <th>
        <h3 className="ui center aligned header">
          {props.transaction.amount}
        </h3>
      </th>
    </tr>
  )
}

export default OneRow
