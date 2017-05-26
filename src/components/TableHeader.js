import React from 'react'

export default ( props ) => {
  return (
    <th>
      <h3 className="ui center aligned header">
        {props.children}
      </h3>
    </th>
  )
}
