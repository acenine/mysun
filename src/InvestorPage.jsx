import React from 'react';
import Search from './Search.jsx';

export default class InvestorPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      viewSearch: false 
    }
  }

  handleClick (e) {
    this.setState({
      viewSearch: true
    })
    e.preventDefault()
  }
  render() {
    const searchResults = this.state.viewSearch ? <Search /> : null

    return (
      <div className={`page container`}>
        <div  className={`greeting`}>
          <h1> Thinking of Investing? </h1>
          <h2> Tell us where: </h2>
        </div>
        <form action="/action_page.php">
          <h3> Zip Code: </h3>
          <input type="text" name="zip"/><br/>
          <h3> Email: </h3>
          <input type="text" name="email"/><br/>
          <input type="submit" value="Submit" onClick={this.handleClick.bind(this)}/>
        </form>
      {searchResults}
      </div>
    );
  }
}
