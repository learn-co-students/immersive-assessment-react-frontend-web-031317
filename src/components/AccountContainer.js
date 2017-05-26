import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()


    this.state = {
      searchResults: '',
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
  };

  componentDidMount() {
    
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then((response) => response.json() )
    .then((jsonResponse) => this.setState(
      presentState => ( {transactions: presentState.transactions.concat(jsonResponse) }) 
      ))
  };


  handleChange(event) {
    
    if(event.target.value) {
      var capitalizeFirstLetter = event.target.value[0].toUpperCase() + event.target.value.slice(1)
      console.log(capitalizeFirstLetter)
      this.setState({
        searchResults: this.state.transactions.filter((obj)=> obj.category.startsWith(capitalizeFirstLetter))
      })
    } else {
        this.setState({
          searchResults: ""
        })
    }
};


  render() {
    return (
      <div>
        <Search handleChange={this.handleChange.bind(this)} />
        <TransactionsList transactions={this.state.transactions} searchResults={this.state.searchResults} />
      </div>
    )
  }
};

export default AccountContainer
