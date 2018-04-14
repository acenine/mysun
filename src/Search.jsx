import React from 'react';
import ReactDOM from 'react-dom';
import SearchResults from './SearchResults.jsx'
import DetailedView from './DetailedView.jsx'
import image1 from './home_1.jpg'
import image2 from './home_2.jpg'
import image3 from './home_3.jpg'

const sampleData = [
{title: 'Home in Oakland', owner: 'Tom Brady', raised: 1503, goal: 2000, image: 'home_1', about: 'I love solar, and I win superbowls, so you should vote for me'},
{title: 'Home in Albany', owner: 'Brad Stevens', raised: 2342, goal: 3000, image: 'home_2', about: 'We want to help the world, so seed my home!'}
]

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: sampleData,
      view: 'search',
      clickedListing: null
    }
  }

  handleClick(listing) {
    console.log('clicked listing', listing)
    this.setState({
      view: 'detailedView',
      clickedListing: listing
    })
  }
  render() {
    const searchView = this.state.view === 'search' &&
      <SearchResults listings={sampleData} handleClick={this.handleClick.bind(this)}/>

    const detailedView = this.state.view ==='detailedView' &&
      <DetailedView listing={this.state.clickedListing}/>

    return (
      <div className={`container`}>
      {searchView}
      {detailedView}
      </div>
      )
   }
}

