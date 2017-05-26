import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
  if (props.transactions) {
    const results = props.transactions.filter(function(term){
      if (props.searchTerm === ""){
        return props.transactions
      }else{
        return term.description[0].toLowerCase() === props.searchTerm[0].toLowerCase()
      }
    })

    const show = results.map(function(el){
      return <Transaction result={el}/>
    })

    // console.log(results)
    return (
      <table className="ui celled striped padded table">
        <tbody>
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

          {show}

        </tbody>
      </table>
    )
  }else{
    return null
  }

}

export default TransactionsList
