import React from 'react'

const Search = (props) => {
  //console.log('search props: ', props)
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        // value={this.state.value}
        searchTerm={props.searchTerm}
        onChange={props.handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
