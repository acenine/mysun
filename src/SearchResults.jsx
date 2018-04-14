import React from 'react';
import Listing from './Listing.jsx'


const SearchResults = (props) => {
  console.log('props.listings', props.listings)
  return (
    <div>
    {props.listings.map(listing => {
     return <Listing listing={listing} handleClick={props.handleClick}/>
    })}
    </div>
    )
}

export default SearchResults;