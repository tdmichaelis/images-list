import React from 'react'

class SearchBar extends React.Component {
  state = {
    term: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //use term for request
    this.props.handleSearchInput(this.state.term)
  }

  handleChange = (event) => {
    this.setState({
      term: event.target.value
    })
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <input value={this.state.term} type="text" placeholder="Search..." onChange={this.handleChange} />
        </div>
      </form>
    )
  }
}

export default SearchBar