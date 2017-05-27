import React from 'react'

const OneRow = (props) => {
  //console.log('OneRow props: ', props)
  return (
    <tr>
      <th>
        <h3 className="ui center aligned header">
          {props.postedAt}
        </h3>
      </th>
      <th>
        <h3 className="ui center aligned header">
          {props.description}
        </h3>
      </th>
      <th>
        <h3 className="ui center aligned header">
          {props.category}
        </h3>
      </th>
      <th>
        <h3 className="ui center aligned header">
          {props.amount}
        </h3>
      </th>
    </tr>
  )
}

export default OneRow
