import React from 'react';

const Listing = (props) =>  (
    <div onClick={ () => props.handleClick(props.listing)}>
    <img src={require(`./${props.listing.image}.jpg`)} />
      <div>{props.listing.description}</div>
      <div>{props.listing.host}</div>
      <div>{props.listing.city}</div>
      <div>Seeds Required: {props.listing.seeds_required}</div>
      <div>Current Seed Count: {props.listing.seeds_count}</div>
      <p>&nbsp;</p>
    </div>
    )

export default Listing;