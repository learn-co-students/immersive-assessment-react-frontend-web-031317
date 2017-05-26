import React from 'react'
import Transaction from "./Transaction"

function CustomTransactionList (props) {
console.log("YYYYY")
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

        {props.searchResults.map(function(trans) { return <Transaction transDetail={trans} />})}

      </tbody>

    </table> 
    )
	
};

export default CustomTransactionList