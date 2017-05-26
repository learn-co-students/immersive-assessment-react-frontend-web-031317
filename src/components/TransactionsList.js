import React from 'react'
// import Transaction from './components'

const TransactionsList = (props) => {
  var array = props.transactions
  var string = props.searchTerm
  var newArray = []

  // console.log(string)

  for(var i = 0; i < array.length; i ++) {
    if (array[i].description.slice(0, string.length).toLowerCase() === string.toLowerCase() && string.length !== 0) {
      console.log(array[i].description)
      newArray.push(array[i])
    }
  }

  var list = newArray.map((item) => {
    return (
      <tr>
        <th>
          <h5 className="ui center aligned header">
            Posted At {item.posted_at}
          </h5>
        </th>
        <th>
          <h5 className="ui center aligned header">
            Description {item.description}
          </h5>
        </th>
        <th>
          <h5 className="ui center aligned header">
            Category {item.category}
          </h5>
        </th>
        <th>
          <h5 className="ui center aligned header">
            Amount {item.amount}
          </h5>
        </th>
      </tr>
    )
  })

  return (
    <table className="ui celled striped padded table">
      <thead>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

      </thead>

      <tbody>
        {list}
      </tbody>

    </table>
  )
}

export default TransactionsList
