import React from 'react';

const Listing = (props) =>  (
    <div onClick={ () => props.handleClick(props.listing)}>
    <img src={require(`./${props.listing.image}.jpg`)} />
      <div>{props.listing.title}</div>
      <div>{props.listing.owner}</div>
      <div>Raised {props.listing.raised}</div>
      <p>&nbsp;</p>
    </div>
    )

export default Listing;
