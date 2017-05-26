import React from 'react'
import TableHeader from './TableHeader'

export default ( {filteredList} ) => {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <TableHeader>Posted At</TableHeader>
          <TableHeader>Description</TableHeader>
          <TableHeader>Category</TableHeader>
          <TableHeader>Amount</TableHeader>
        </tr>
        {filteredList}
      </tbody>
    </table>

  )
}
