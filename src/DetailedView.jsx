import React from 'react';

class DetailedView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewForm: false
    }
  }
  handleButtonClick () {
    this.setState({
      viewForm: true
    })
  }

  render() {
    const percentage = (this.props.listing.raised / this.props.listing.goal).toFixed(2)
    const inputField = this.state.viewForm ? <form method='post'>
         <h3> How Much Would you like to seed: </h3>
         <input type="text" placeholder="$" /><br/>
         <input type="submit" value="Submit"/>
       </form> : null

    return (
      <div className={`container`}>
      <img src={require(`./${this.props.listing.image}.jpg`)} />
     <div> {this.props.listing.title}</div>
     <div>Owner: {this.props.listing.owner}</div>
     <div>{this.props.listing.about}</div>
     <div>{this.props.listing.raised} raised </div>
     <div>{`${percentage}% of goal!`}</div>
     <button type="button" onClick={this.handleButtonClick.bind(this)}>Seed this project</button>
     {inputField}
      </div>
      )
  }
}

export default DetailedView;
