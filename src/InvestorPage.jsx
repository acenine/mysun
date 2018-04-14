import React from 'react';

export default class InvestorPage extends React.Component {
  render() {
    return (
      <div className={`page container`}>
        <div  className={`greeting`}>
          <h1> Thinking of Investing? </h1>
          <h2> Tell us where: </h2>
        </div>
        <form action="/action_page.php">
          <h3> Zip Code: </h3>
          <input type="text" name="zip" value=""/><br/>
          <h3> Email: </h3>
          <input type="text" name="email" value=""/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}
