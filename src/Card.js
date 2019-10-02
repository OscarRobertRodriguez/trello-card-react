
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({text}) => {
   return (
     <div className='card'>
      <p>{text}</p>
      <i className='fa fa-pencil pencil'></i>
     </div>
   )
}

Card.propTypes = {
  text: PropTypes.string.isRequired 
}

export default Card; 