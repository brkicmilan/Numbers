import React from 'react';
import { Link } from 'react-router-dom';

const PhoneNumberItems = (item) => {
  return (
    <Link to={`/numbers/${item._id}`} className="book_item">
      <div className="book_items">
        <h2>{item.firstname}</h2>
      </div>
      <div className="book_items">
        <h2>{item.lastname}</h2>
      </div>
      <div className="book_bubble rating">
         <strong>Number: </strong>{item.telephonenumber}
      </div>
    </Link>
  );
};

export default PhoneNumberItems;