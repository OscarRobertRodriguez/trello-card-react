import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Cards from './Cards';
import AddCard from './AddCard'; 


const List = ({list}) => {
  return (
    <div className="list">
     <Header title={list.title}/>
     <Cards cards={list.cards} />
     <AddCard cards={list.cards} />
    </div>
  )
}


List.propTypes = {
  list: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cards:  PropTypes.arrayOf(PropTypes.shape({
     id: PropTypes.number.isRequired,
     text: PropTypes.string.isRequired 
   })).isRequired
 })
}

export default List; 