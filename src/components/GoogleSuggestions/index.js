// Write your code here
import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchResult: ''}

  searchedResults = event => {
    this.setState({searchResult: event.target.value})
  }

  onArrowEvent = suggestion => {
    this.setState({searchResult: suggestion})
  }

  render() {
    const {searchResult} = this.state

    const {suggestionsList} = this.props

    const searchedData = suggestionsList.filter(eachData =>
      eachData.suggestion.toLowerCase().includes(searchResult.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image"
        />
        <div className="card">
          <div className="searchBar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="image1"
            />
            <input
              type="search"
              className="input"
              placeholder="Search Google"
              value={searchResult}
              onChange={this.searchedResults}
            />
          </div>
          <ul>
            {searchedData.map(Data => (
              <SuggestionItem
                suggestionItem={Data}
                key={Data.id}
                onArrowEvent={this.onArrowEvent}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
