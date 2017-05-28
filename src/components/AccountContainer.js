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
      searchTerm: '', //or is 'null' better?

      filteredResults: [], ///adding this, for filter

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
    this.handleChange = this.handleChange.bind(this)
    this.filterListByDescriptionOrCategory = this.filterListByDescriptionOrCategory.bind(this) //without binding, will get error: Cannot read property 'state' of null
    //console.log('this.state.searchTerm: ', this.state.searchTerm)
  } //end of class


  //getting data from API: task 2
  //this took me 30 minutes
  //used code from here: https://stackoverflow.com/questions/39030239/using-fetch-to-render-json-data-in-react-app
  componentDidMount() {
    var that = this //new variable name to bind 'this'
    //var url = 'http://localhost:3000/api/data'
    var url = "https://boiling-brook-94902.herokuapp.com/transactions"

    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server")
      }
      return response.json()
    })
    .then(function(data) {
      console.log('data from API: ', data)

      //that.setState({ filteredResults: data })
      that.setState({ transactions: data, filteredResults: data }) //adding filteredResults to setState for filtering API data
    })
  } //end of componentDidMount


  //user typing into input field updates the state: task 3
  //this took me about an hour
  //used code from Dan Abramov codepen: https://codepen.io/gaearon/pen/VmmPgp?editors=0010

  ////updating state
  handleChange(event) {
    // your code here
    let searchTerm = event.target.value.toLowerCase() //making all searchTerms lowercase

    //this.setState({searchTerm: query})

    this.setState({ searchTerm }, () => this.filterListByDescriptionOrCategory() ) //using object reassignment and calling filterListByDescriptionOrCategory() function
    //not really sure what's happening in line above, i need to better understand this.

    console.log('now the searchTerm is: ', searchTerm)
  }





  //final task -- filtering by description or category: task 4
  // this took me ~10 hours

  // Using the state of the user input and the list of transactions,
  // figure out how to render only the transactions that
  // include the entered text in either the description or category

  //in other words, typing in 'atm' shows all listfilteredResults
  //with 'atm' in their description, by filtering

  //mostly used this, with a lot of refactoring: https://stackoverflow.com/questions/43002417/arrays-javascript-filter-array-of-objects-using-input-search

  //could call this function 'filterList' but this is more descriptive.
  filterListByDescriptionOrCategory() {
    let oneTransaction = this.state.transactions.map(transaction => {return transaction}) //this returns one transaction object
    let searchTerm = this.state.searchTerm

    let filteredResults = oneTransaction.filter(function(transaction) { //filtering oneTransaction object
      return (transaction.description.toLowerCase().indexOf(searchTerm) !== -1) || (transaction.category.toLowerCase().indexOf(searchTerm) !== -1); // returns true or false
    });
    this.setState({ filteredResults: filteredResults });
  }


//spend a few hours doing it this way, which was wrong approach.
//was filtering through an array instead of through an object.
//got this from here: https://codepen.io/pjmtokyo/pen/ZGVjVV?editors=1010

////this is returning an array of strings, i need to filter through an array of objects.
  // filterListByDescriptionOrCategory(event) {
  //   let transactionDescription = this.state.transactions.map(transaction => {return transaction.description})
  //
  //   console.log('transactionDescription: ', transactionDescription)
  //
  //   // var updatedList = this.state.transactions; //this needs to be transactions.description
  //   //var updatedList = transactionDescription //this needs to be transactions.description
  //
  //   var updatedList = transactionDescription.filter(function(item) {
  //     return item.toLowerCase().search(
  //       event.target.value.toLowerCase()) !== -1
  //     })
  //     this.setState({filteredResults: updatedList})
  //     console.log('updatedList: ', updatedList)
  //   }




  render() {

    return (
      <div>
        <Search
          //filterListByDescriptionOrCategory={this.filterListByDescriptionOrCategory}
          searchTerm={this.state.searchTerm}
          // handleChange={"...add code here..."}
          handleChange={this.handleChange}
        />
        <TransactionsList
          filteredResults={this.state.filteredResults} //this will be rendered, so we only see filtered filteredResults (not all the transactions)
          //transactions={this.state.transactions}
          searchTerm={this.state.searchTerm}
        />
      </div>
    )
  }
}

export default AccountContainer
