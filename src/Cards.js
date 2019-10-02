import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = ({cards}) => {

  return (
     <div className='cards'>
     {
       cards.map(card => {
         return  <Card key={card.id} text={card.text} /> 
       })
     }
     
     </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.array.isRequired
}

export default Cards; 