import React from 'react'
import AccountContainer from '../containers/AccountContainer'

import '../stylesheets/App.css'

export default () => {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>

      <AccountContainer />

    </div>
  )
}
