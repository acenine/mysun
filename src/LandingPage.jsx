import React from 'react';
import InvestorPage from './InvestorPage.jsx';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'landing',
    }
  }
  render() {
    const {route, updateRoute} = this.props;
    if (route === 'investor') {
      return <InvestorPage/>;
    }
    return (
      <div className={`landing page container`}>
        <div  className={`greeting`}>
          <h1> Welcome to Suncellerate </h1>
          <h2> No roof? No Problem. </h2>
        </div>
        <form className={`container`} onSubmit={this.handleSubmit.bind(this)}>

          <div className={`dropdown container`}>
            <h3 className={`dropdown-title`}> Who are you? </h3>
              <select className={`dropdown`} size="3" onChange={this.handleChange.bind(this)}>
                <option value="host">Host</option>
                <option value="investor">Investor</option>
                <option value="supplier">Supplier</option>
              </select>
            <input type="submit" value="Get Started" />
          </div>
        </form>
      </div>
    );
  }
  handleChange(event) {
    this.setState({
      selected: event.target.value,
    })
  }
  handleSubmit(event) {
    this.props.updateRoute(this.state.selected)
    event.preventDefault();
  }
}

