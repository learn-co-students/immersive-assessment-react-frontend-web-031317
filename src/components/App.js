import React, { Component } from 'react'
import AccountContainer from './AccountContainer'

import '../stylesheets/App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      transactions: []
    }

    const url = "https://boiling-brook-94902.herokuapp.com/transactions"

    // function getTransactions() {
    //   return (
    //     fetch(url)
    //     .then( (response) => response.json() )
    //     .then( (responseJson) => {
    //       console.log(responseJson)
    //     })
    //     .catch( error => console.log(error) )
    //   )
    // }
    //
    // componentDidMount() {
    //   getTransactions()
    //   .then( (data) => {
    //     this.setState({
    //       transactions: data
    //     })
    //   })
    // }

  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>

        <AccountContainer />

      </div>
    )
  }
}

export default App
