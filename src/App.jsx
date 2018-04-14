import React from 'react';
import './App.css';
import LandingPage from './LandingPage.jsx';
import InvestorPage from './InvestorPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'landing',
    }
  }
  render() {
    return (
      <div className="App">
        {<LandingPage route={this.state.route} updateRoute={this.updateRoute.bind(this)}/>}
        {/*<InvestorPage/>*/}
        <footer>
          <a href="#"> Contact </a>
          <a href="#"> About </a>
          <a href="#"> Legal </a>
        </footer>
      </div>
    );
  }
  updateRoute(route) {
    this.setState({route})
  }
}

export default App;

