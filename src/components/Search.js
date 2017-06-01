import React, { Component } from 'react'

class Search extends Component {
  constructor(){
    super()
    this.state = {
      input: ''
    }
  }

  handleChange(e) {
    const term = e.target.value
    this.setState({ input: term})
    this.props.handleChange(term)
  }

  render(){
    console.log('search component', this.state.input)
    return (
      <div className="ui huge fluid icon input">
        <input
          value={this.state.input}
          type="text"
          placeholder={"Search your Recent Transactions"}
          onChange={this.handleChange.bind(this)}
        />
        <i className="circular search link icon"></i>
      </div>
    )
  }
}

export default Search
