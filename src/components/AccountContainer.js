import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()

    // we have provided this default state for you,
    // use this to get the functionality working
    // and then replace the default transactions with a call to the API

    this.state = {
      searchTerm: '',
      transactions: [
        {
          id: 1,
          posted_at: "2017-02-28 11:00:00",
          description: "Leather Pants, Gap co.",
          category: "Fashion",
          amount: -20000
        },
        {
          id: 2,
          posted_at: "2017-02-29 10:30:00",
          description: "Paycheck from Bob's Burgers",
          category: "Income",
          amount: 100000
        },
        {
          id: 3,
          posted_at: "2017-05-24 10:53:00",
          description: "'Pair Programming Illuminated' by Laurie Williams and Robert Kessler",
          category: "Book",
          amount: 1498
        },
        {
          id: 4,
          posted_at: "2017-05-24 08:52:00",
          description: "Medium Iced Cold Brew, Gregory's Coffee",
          category: "Coffee",
          amount: 365
        }
      ]
    }
  }

//   fetch(url)
// .then((resp) => resp.json()) // Transform the data into json
// .then(function(data) {
//   // Create and append the li's to the ul
//   })
// })

//getting data from API: task 2
//this took me 30 minutes
//used code from here: https://stackoverflow.com/questions/39030239/using-fetch-to-render-json-data-in-react-app
componentDidMount() {
  var that = this;
  //var url = 'http://localhost:3000/api/data'
  var url = "https://boiling-brook-94902.herokuapp.com/transactions"

  fetch(url)
  .then(function(response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then(function(data) {
    console.log('data from API: ', data)
    //that.setState({ person: data.person });
    that.setState({ transactions: data });
  });
}


  handleChange(event) {
    // your code here
  }

  render() {

    return (
      <div>
        <Search
          searchTerm={this.state.searchTerm}
          handleChange={"...add code here..."}
        />
        <TransactionsList
          transactions={this.state.transactions}
          searchTerm={this.state.searchTerm}
        />
      </div>
    )
  }
}

export default AccountContainer
