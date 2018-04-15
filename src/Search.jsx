import React from 'react';
import SearchResults from './SearchResults.jsx'
import DetailedView from './DetailedView.jsx'
import image1 from './home_1.jpg'
import image2 from './home_2.jpg'
import image3 from './home_3.jpg'

import sampleData from './sampleData.js'

class Search extends React.Component {
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
    const searchView = this.state.view === 'search' ?  <div>
          <SearchResults listings={sampleData} handleClick={this.handleClick.bind(this)}/>
        </div> : null
    const detailedView = this.state.view ==='detailedView' ? <DetailedView listing={this.state.clickedListing}/> : null

    return (
      <div>
      {searchView}
      {detailedView}
      </div>
      )
   }
}

export default Search;