import React from 'react';
import PropTypes from 'prop-types';


const AddCard = ({cards}) => {

  return (
    <div className='addCard'>
    <i className="fa fa-plus addCard__icon"></i>
    <span className='addCard__text'>{cards.length > 0 ? 'Add another card' : 'Add a card'}</span>
    </div>
  )
}

AddCard.propTypes = {
   cards: PropTypes.array.isRequired
}


export default AddCard; 