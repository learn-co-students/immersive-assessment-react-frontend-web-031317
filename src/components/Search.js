import React from 'react'



const Search = (props) => {
  //console.log('search props: ', props)

  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"

        onKeyUp={props.filterListByDescriptionOrCategory}

        placeholder={"Search your Recent Transactions"}
        searchTerm={props.searchTerm}

        //note: below needs to be onChange, can't call it onSearch
        onChange={props.handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
