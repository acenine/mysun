import React from 'react';
import Listing from './Listing.jsx'


const SearchResults = (props) => {
  console.log('props.listings', props.listings)
  return (
    <div className={`container`}>
      <ul className={`container`}>
        {props.listings.map(listing => {
          return (
            <li>
              <Listing listing={listing} handleClick={props.handleClick}/>
            </li>
          );
        })}
      </ul>
    </div>
    )
}

export default SearchResults;
